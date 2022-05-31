"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.detailKelurahan = exports.allKelurahan = void 0;
const axios_1 = __importDefault(require("axios"));
function allKelurahan(req, res) {
    let id_kecamatan = req.query.id_kecamatan;
    axios_1.default.get('https://dev.farizdotid.com/api/daerahindonesia/kelurahan?id_kecamatan=' + id_kecamatan).then(response => {
        let dataResponse = response.data.kelurahan;
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
exports.allKelurahan = allKelurahan;
function detailKelurahan(req, res) {
    let id_kelurahan = req.params.id_kelurahan;
    axios_1.default.get('https://dev.farizdotid.com/api/daerahindonesia/kelurahan/' + id_kelurahan).then(response => {
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
exports.detailKelurahan = detailKelurahan;
