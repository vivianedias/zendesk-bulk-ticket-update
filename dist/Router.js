"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Router = () => express_1.default()
    .use(express_1.default.json())
    .get('/', (_req, res) => {
    return res.json('olá!');
});
exports.default = Router;
//# sourceMappingURL=Router.js.map