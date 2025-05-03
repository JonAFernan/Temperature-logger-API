import { Router } from 'express';
import postUserDTO from '../dto/user.post.dto.js';
import postUserController from '../controllers/user-post-controller.js';

const userRouter = Router();

userRouter.post('/login', postUserDTO, postUserController);

export default userRouter;
