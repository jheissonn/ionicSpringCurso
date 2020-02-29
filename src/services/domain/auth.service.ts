import { API_CONFIG } from './../../config/api.config';
import { CredenciaisDTO } from './../../models/credenciais.dto';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService{

    constructor(public http: HttpClient){

    }

    authenticate(creds: CredenciaisDTO){
        return this.http.post(
            `${API_CONFIG.baseUrl}/login`,
            creds,
            {
                observe: 'response',
                responseType: 'text'
            })
    }
}