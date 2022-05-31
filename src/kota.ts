import axios from 'axios';
import {Request, Response} from 'express';

function allKota(req: Request, res: Response) {
    let id_provinsi = req.query.id_provinsi;

    axios.get('https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=' + id_provinsi).then(response => {
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
    })
}

function detailKota(req: Request, res: Response) {
    let id_kota = req.params.id_kota;

    axios.get('https://dev.farizdotid.com/api/daerahindonesia/kota/' + id_kota).then(response => {
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
    })
}

export {allKota, detailKota}