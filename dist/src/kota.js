"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.detailKota = exports.allKota = void 0;
const axios_1 = __importDefault(require("axios"));
function allKota(req, res) {
    let id_provinsi = req.query.id_provinsi;
    axios_1.default.get('https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=' + id_provinsi).then(response => {
        let dataResponse = response.data.kota_kabupaten;
        res.json({
            status: 'success',
            data: dataResponse
        });
    }).catch(() => {
        res.json({
            status: 'failed',
            message: 'failed fetch'
        });
    });
}
exports.allKota = allKota;
function detailKota(req, res) {
    let id_kota = req.params.id_kota;
    axios_1.default.get('https://dev.farizdotid.com/api/daerahindonesia/kota/' + id_kota).then(response => {
        let dataResponse = response.data;
        res.json({
            status: 'success',
            data: dataResponse
        });
    }).catch(() => {
        res.json({
            status: 'failed',
            message: 'failed fetch'
        });
    });
}
exports.detailKota = detailKota;
