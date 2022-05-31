import axios from 'axios';
import {Request, Response} from 'express';

function allProvince(req: Request, res: Response) {
    axios.get('http://dev.farizdotid.com/api/daerahindonesia/provinsi').then(response => {
        let dataResponse = response.data.provinsi;

        res.json({
            status: 'success',
            data: dataResponse
        });

    }).catch(() => {
        res.json({
            status: "failed",
            message: "failed fetch"
        })
    });
}

function detailProince(req: Request, res: Response) {
    let id_provinsi = req.params.id_provinsi;

    axios.get('http://dev.farizdotid.com/api/daerahindonesia/provinsi/' + id_provinsi).then(response => {
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

export {allProvince, detailProince}