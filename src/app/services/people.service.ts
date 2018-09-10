import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
                providedIn: 'root'
            })
export class PeopleService {
    url = 'https://randomuser.me/api/?results=20&nat=fr';

    constructor(private httpClient: HttpClient) {
    }

    async fetchPeople() {
        const data = await this.httpClient
                               .get(this.url)
                               .toPromise();
        return data['results'];
    }
}
