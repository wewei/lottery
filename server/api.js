import { Router } from "express";
import { register } from "./store.js";

const router = Router();

router.post('/register', (req, res, next) => {
    const { userId, deviceId } = req.body;
    register(userId, deviceId, req.useragent.browser);
    return res.json({});
});

export default router;

