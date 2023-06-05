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
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeQuery = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
const db = promise_1.default.createPool({
    host: 'localhost',
    user: 'root',
    password: 'roottoor',
    database: 'sakila'
});
exports.default = db;
function executeQuery(query, params = []) {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = yield db.getConnection();
        try {
            const [rows, fields] = yield connection.query(query, params);
            return rows;
        }
        catch (err) {
            throw err;
        }
        finally {
            connection.release();
        }
    });
}
exports.executeQuery = executeQuery;
/*export async function getFilmsFromDatabase() {
    try {
      const [rows] = await db.query('SELECT * FROM film');
      console.log(rows);
      return rows;
    } catch (error) {
      console.error(error);
      throw new Error('Error retrieving films from the database');
    }
  }*/
