"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    return res.send('get all dogs');
});
router.get('/:id', (_req, res) => {
    return res.send('get one dog');
});
router.post('/', (_req, res) => {
    return res.send('create a dog');
});
router.put('/:id', (_req, res) => {
    return res.send('update dog');
});
router.delete('/:id', (_req, res) => {
    return res.send('delete a dog');
});
exports.default = router;
