import { Controller, Get, Query } from '@nestjs/common';
import * as fetch from 'node-fetch'

@Controller('school')
export class SchoolController {
@Get()
async get(@Query('nome') nome: string): Promise<any> {
    let response: any;
   await fetch(`http://educacao.dadosabertosbr.com/api/escolas?nome=${nome}`)
    .then(res => res.text())
    .then(body => response = body);
    return JSON.parse(response)
}
}