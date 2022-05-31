"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.detailProince = exports.allProvince = void 0;
const axios_1 = __importDefault(require("axios"));
function allProvince(req, res) {
    axios_1.default.get('http://dev.farizdotid.com/api/daerahindonesia/provinsi').then(response => {
        let dataResponse = response.data.provinsi;
        res.json({
            status: 'success',
            data: dataResponse
        });
    }).catch(() => {
        res.json({
            status: "failed",
            message: "failed fetch"
        });
    });
}
exports.allProvince = allProvince;
function detailProince(req, res) {
    let id_provinsi = req.params.id_provinsi;
    axios_1.default.get('http://dev.farizdotid.com/api/daerahindonesia/provinsi/' + id_provinsi).then(response => {
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
exports.detailProince = detailProince;
