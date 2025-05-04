import { SignJWT } from 'jose';
import { users } from '../lib/user.js';

const postUserController = async (req, res) => {
    const { user, password } = req.body;

    const userData = users.find((userToCheck) => userToCheck.name === user);

    if (!userData || userData.password !== password)
        return res.status(401).json({
            message: 'Not correct credentials',
        });

    const encoder = new TextEncoder();
    const jwtConstructor = new SignJWT({ role: userData.role });
    const jwt = await jwtConstructor
        .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
        .setIssuedAt()
        .setExpirationTime('1h')
        .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));

    return res.status(201).json({ jwt });
};

export default postUserController;
