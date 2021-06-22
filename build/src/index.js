"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//Init 
const app = express_1.default();
// Setting
const serverPort = 4000;
app.set('port', process.env.PORT || serverPort);
// Middle
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// Routes
app.use('/', (req, res) => {
    res.send('Hi');
});
// Starting
app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
});
