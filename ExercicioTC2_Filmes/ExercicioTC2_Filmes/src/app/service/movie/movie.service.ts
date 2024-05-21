import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

const API_KEY = environment.API_KEY;
const API_URL = environment.API_URL;

@Injectable({
    providedIn: 'root',
})
export class MovieService {
    private HTTP = inject(HttpClient);

    constructor() {}

    public getMovies() {
        return this.HTTP.get(`${API_URL}?api_key=${API_KEY}&language=pt_BR`);
    }
}
