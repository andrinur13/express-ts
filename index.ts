import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

import {allProvince, detailProince} from "./src/provinsi";
import {allKota, detailKota} from "./src/kota";
import {allKecamatan, detailKecamatan} from "./src/kecamatan";
import {allKelurahan, detailKelurahan} from "./src/kelurahan";




// API PROVINSI
app.get('/apiv1/provinsi', allProvince);
app.get('/apiv1/provinsi/:id_provinsi', detailProince);

// API KOTA
app.get('/apiv1/kota', allKota);
app.get('/apiv1/kota/:id_kota', detailKota)

// API KECAMATAN
app.get('/apiv1/kecamatan', allKecamatan)
app.get('/apiv1/kecamatan/:id_kecamatan', detailKecamatan)

// API KELURAHAN
app.get('/apiv1/kelurahan', allKelurahan)
app.get('/apiv1/kelurahan/:id_kelurahan', detailKecamatan)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
