import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';



export interface House {
    url: string;
    name: string;
    region: string;
    coatOfArms: string;
}



@Injectable({ providedIn: 'root' })
export class HousesService {
    private readonly http = inject(HttpClient)
    private readonly url = 'http://localhost:8080/api/houses';

    getHouses() {
        return this.http.get<House[]>(this.url);
    }

}
