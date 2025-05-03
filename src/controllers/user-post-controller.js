import '../config/env.js';
const postUserController = async (req, res) => {
    const { user, password } = req.body;

    if (
        user !== process.env.SUPER_USER ||
        password !== process.env.USER_PASSWORD
    )
        return res.status(401).json({
            message: 'Not correct credentials',
        });

    return res.status(200).json({ messege: 'WELCOME' });
};

export default postUserController;
