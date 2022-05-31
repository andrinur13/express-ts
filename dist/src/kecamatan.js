"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.detailKecamatan = exports.allKecamatan = void 0;
const axios_1 = __importDefault(require("axios"));
function allKecamatan(req, res) {
    let id_kota = req.query.id_kota;
    axios_1.default.get('https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=' + id_kota).then(response => {
        let dataResponse = response.data.kecamatan;
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
exports.allKecamatan = allKecamatan;
function detailKecamatan(req, res) {
    let id_kecamatan = req.params.id_kecamatan;
    axios_1.default.get('https://dev.farizdotid.com/api/daerahindonesia/kecamatan/' + id_kecamatan).then(response => {
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
exports.detailKecamatan = detailKecamatan;
