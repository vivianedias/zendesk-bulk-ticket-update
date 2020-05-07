"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = __importDefault(require("./Server"));
const signale_1 = __importDefault(require("signale"));
try {
    Server_1.default();
}
catch (e) {
    signale_1.default.fatal(e);
}
//# sourceMappingURL=main.js.map