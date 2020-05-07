"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const signale_1 = __importDefault(require("signale"));
const yup = __importStar(require("yup"));
const App_1 = __importDefault(require("./App"));
const getTicketsIdFromRequest = ({ tickets }) => __awaiter(void 0, void 0, void 0, function* () {
    const schema = yup.array().of(yup.number().min(1));
    yield schema.validate(tickets);
    return tickets;
});
const Router = () => express_1.default()
    .use(express_1.default.json())
    .post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tickets = yield getTicketsIdFromRequest(req.body);
        signale_1.default.watch(`Incoming request with ${tickets.length} ticket id's`);
        return App_1.default(tickets, res);
    }
    catch (e) {
        signale_1.default.fatal(e);
        return res.status(400).json('Corpo inválido da requisição');
    }
}));
exports.default = Router;
//# sourceMappingURL=Router.js.map