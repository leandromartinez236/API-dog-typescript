"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const dog_routes_1 = __importDefault(require("./routes/dog.routes"));
require("./database");
dotenv_1.default.config();
const PORT = 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, morgan_1.default)('dev'));
app.get('/', (_req, res) => {
    res.send('Hello world');
});
app.use('/dogs', dog_routes_1.default);
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
