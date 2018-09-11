import {Component, OnInit} from '@angular/core';
import {PeopleService} from '../services/people.service';
import {Person} from '../interfaces/person';
import {NavigationExtras, Router} from '@angular/router';

@Component({
               selector: 'app-contact',
               templateUrl: 'contact.page.html',
               styleUrls: ['contact.page.scss']
           })
export class ContactPage implements OnInit {
    people: Array<Person> = [];

    constructor(private _peopleService: PeopleService,
                private _router: Router
    ) {

    }

    ngOnInit() {
        this._loadPeople();
    }

    private async _loadPeople() {
        this.people = await this._peopleService.fetchPeople();
    }

    openDetailPage(contact: Person) {
        const navigationExtra: NavigationExtras = {
            queryParams: {'person': JSON.stringify(contact)},
            queryParamsHandling: 'merge'
        };
        this._router.navigate(['/detail-contact'], navigationExtra);
    }
}
