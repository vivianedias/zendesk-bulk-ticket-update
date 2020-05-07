"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Router_1 = __importDefault(require("./Router"));
const signale_1 = __importDefault(require("signale"));
const server = () => {
    const { PORT } = process.env;
    return Router_1.default().listen(Number(PORT), '0.0.0.0', () => {
        signale_1.default.watch(`Server listening on PORT ${PORT}`);
    });
};
exports.default = server;
//# sourceMappingURL=Server.js.map