import {Component, OnInit} from '@angular/core';
import {Person} from '../interfaces/person';
import {ActivatedRoute} from '@angular/router';
import {Params} from '@angular/router/src/shared';
import {Contacts, Contact, ContactField, ContactName} from '@ionic-native/contacts';

@Component({
               selector: 'app-detail-contact',
               templateUrl: './detail-contact.page.html',
               styleUrls: ['./detail-contact.page.scss'],
           })
export class DetailContactPage implements OnInit {
    contact: Person = null;

    constructor(private _route: ActivatedRoute,
                /*private _phoneContacts: Contacts*/) {
    }

    ngOnInit() {
        this._route.queryParams.subscribe((params: Params) => {
            this.contact = JSON.parse(params.person);
        });
    }

    onClickAddContact() {
        /*let contact: Contact = this._phoneContacts.create();

        contact.name = new ContactName(null, this.contact.name.last, this.contact.name.first);
        contact.phoneNumbers = [new ContactField('mobile', this.contact.cell)];
        contact.save()
               .then(
                   () => console.log('Contact saved!', contact),
                   (error: any) => console.error('Error saving contact.', error)
               );*/
    }
}
