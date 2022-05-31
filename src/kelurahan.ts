import axios from 'axios';
import {Request, Response} from 'express';

function allKelurahan(req: Request, res: Response) {
    let id_kecamatan = req.query.id_kecamatan;

    axios.get('https://dev.farizdotid.com/api/daerahindonesia/kelurahan?id_kecamatan=' + id_kecamatan).then(response => {
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
    })
}

function detailKelurahan(req: Request, res: Response) {
    let id_kelurahan = req.params.id_kelurahan;

    axios.get('https://dev.farizdotid.com/api/daerahindonesia/kelurahan/' + id_kelurahan).then(response => {
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

export {allKelurahan, detailKelurahan}