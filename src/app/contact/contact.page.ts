import {Component, OnInit} from '@angular/core';
import {PeopleService} from '../services/people.service';
import {Person} from '../interfaces/person';

@Component({
               selector: 'app-contact',
               templateUrl: 'contact.page.html',
               styleUrls: ['contact.page.scss']
           })
export class ContactPage implements OnInit {
    people: Array<Person> = [];

    constructor(private _peopleService: PeopleService) {

    }

    ngOnInit() {
        this._loadPeople();
    }

    private async _loadPeople() {
        this.people = await this._peopleService.fetchPeople();
    }
}
