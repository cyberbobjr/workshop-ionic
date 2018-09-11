import {Component, OnInit} from '@angular/core';
import {Person} from '../interfaces/person';
import {ActivatedRoute} from '@angular/router';
import {Params} from '@angular/router/src/shared';
import {Contacts, Contact, ContactField, ContactName} from '@ionic-native/contacts/ngx';

@Component({
               selector: 'app-detail-contact',
               templateUrl: './detail-contact.page.html',
               styleUrls: ['./detail-contact.page.scss'],
           })
export class DetailContactPage implements OnInit {
    contact: Person = null;

    constructor(private _route: ActivatedRoute,
                private _phoneContacts: Contacts) {
    }

    ngOnInit() {
        this._route.queryParams.subscribe((params: Params) => {
            this.contact = JSON.parse(params.person);
        });
    }

    async onClickAddContact() {
        const contactName = new ContactName(null, this.contact.name.last, this.contact.name.first);
        let phoneContact: Contact = this._phoneContacts.create();
        phoneContact.name = contactName;
        phoneContact.phoneNumbers = [new ContactField('mobile', this.contact.cell)];
        phoneContact.emails = [new ContactField('email', this.contact.email)];
        console.log(phoneContact);
        try {
            await phoneContact.save();
        } catch (e) {
            console.log(e);
        }
    }
}
