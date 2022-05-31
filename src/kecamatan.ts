import axios from 'axios';
import {Request, Response} from 'express';

function allKecamatan(req: Request, res: Response) {
    let id_kota = req.query.id_kota;

    axios.get('https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=' + id_kota).then(response => {
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
    })
}

function detailKecamatan(req: Request, res: Response) {
    let id_kecamatan = req.params.id_kecamatan;

    axios.get('https://dev.farizdotid.com/api/daerahindonesia/kecamatan/' + id_kecamatan).then(response => {
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

export {allKecamatan, detailKecamatan}