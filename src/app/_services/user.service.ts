import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment';
import { User } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    //'http://localhost:8092'
    getAll() {
        return this.http.get<User[]>(`${environment.urlAddress}/users`);
    }

    getById(id: number) {
        return this.http.get(`${environment.urlAddress}/users/${id}`);
    }

    register(user: User) {
        return this.http.post(`${environment.urlAddress}/users/register`, user);
    }

    update(user: User) {
        return this.http.put(`${environment.urlAddress}/users/${user.id}`, user);
    }

    delete(id: number) {
        return this.http.delete(`${environment.urlAddress}/users/${id}`);
    }
}
