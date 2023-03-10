import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs';

import { User } from '../interfaces/user.interface';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    private baseUrl: string = 'https://peticiones.online/api/users';
    constructor(private httpClient: HttpClient) { }
    
    getAll(pPage: number = 1): Promise<any> {
            return lastValueFrom(this.httpClient.get<any>(`${this.baseUrl}?page=${pPage}`))
              }

    getAllPromise() : Promise<any[]> {
        return lastValueFrom(this.httpClient.get<any[]>('https://peticiones.online/api/users'));
    }   



}
