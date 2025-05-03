import { jwtVerify } from 'jose';
import '../config/env.js';

const userJWTDto = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization)
        return res.status(401).json({ error: 'access forbidden' });
    try {
        const encoder = new TextEncoder();
        const { payload } = await jwtVerify(
            authorization.split(' ')[1],
            encoder.encode(process.env.JWT_PRIVATE_KEY),
        );

        req.role = payload.role;
        next();
    } catch (error) {
        return res
            .status(401)
            .json({ error: error, messege: 'access forbidden:' });
    }
};

export default userJWTDto;
