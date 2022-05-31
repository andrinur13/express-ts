"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
const provinsi_1 = require("./src/provinsi");
const kota_1 = require("./src/kota");
const kecamatan_1 = require("./src/kecamatan");
const kelurahan_1 = require("./src/kelurahan");
// API PROVINSI
app.get('/apiv1/provinsi', provinsi_1.allProvince);
app.get('/apiv1/provinsi/:id_provinsi', provinsi_1.detailProince);
// API KOTA
app.get('/apiv1/kota', kota_1.allKota);
app.get('/apiv1/kota/:id_kota', kota_1.detailKota);
// API KECAMATAN
app.get('/apiv1/kecamatan', kecamatan_1.allKecamatan);
app.get('/apiv1/kecamatan/:id_kecamatan', kecamatan_1.detailKecamatan);
// API KELURAHAN
app.get('/apiv1/kelurahan', kelurahan_1.allKelurahan);
app.get('/apiv1/kelurahan/:id_kelurahan', kecamatan_1.detailKecamatan);
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
