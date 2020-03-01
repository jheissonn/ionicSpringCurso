import { StorageService } from './../storage.service';
import { API_CONFIG } from './../../config/api.config';
import { ClienteDTO } from './../../models/Cliente.dto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ClienteService{
    constructor(
        public http: HttpClient,
        public storage: StorageService
    ){

    }
    findByEmail(email: String): Observable<ClienteDTO>{
        let token = this.storage.getLocalUser().token;
        let authHeader = new HttpHeaders({'Authorization': 'Bearer ' + token})
        return this.http.get<ClienteDTO>(
            `${API_CONFIG.baseUrl}/cliente/email?value=${email}`,
            {'headers': authHeader});
    }
    getImageFromBucket(id: String): Observable<any>{
        let url = `${API_CONFIG.bucketBaseUrl}/cp${id}.jpg`
        return this.http.get(url, {responseType: 'blob'})
    }


}