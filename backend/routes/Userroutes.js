import express from "express";
import { 
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deletedUser
 } from "../controllers/UserControllers.js";

const router = express.Router();

router.get('/Users', getUsers);
router.get('/Users/:id', getUserById);
router.post('/Users', createUser);
router.patch('/Users/:id', updateUser);
router.delete('/Users/:id', deletedUser);

export default router;