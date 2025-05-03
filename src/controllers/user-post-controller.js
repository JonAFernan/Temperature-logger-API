import '../config/env.js';
import { SignJWT } from 'jose';
import { adminUser } from '../lib/user.js';
const postUserController = async (req, res) => {
    const { user, password } = req.body;

    if (
        user !== process.env.SUPER_USER ||
        password !== process.env.USER_PASSWORD
    )
        return res.status(401).json({
            message: 'Not correct credentials',
        });

    const encoder = new TextEncoder();
    const jwtConstructor = new SignJWT({ role: adminUser.role });
    const jwt = await jwtConstructor
        .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
        .setIssuedAt()
        .setExpirationTime('1d')
        .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));

    return res.status(201).json({ jwt });
};

export default postUserController;
