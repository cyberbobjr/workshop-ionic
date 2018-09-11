import {Component, OnInit} from '@angular/core';
import {Person} from '../interfaces/person';
import {ActivatedRoute} from '@angular/router';
import {Params} from '@angular/router/src/shared';
import {EmailComposer} from '@ionic-native/email-composer/ngx';

@Component({
               selector: 'app-detail-contact',
               templateUrl: './detail-contact.page.html',
               styleUrls: ['./detail-contact.page.scss'],
           })
export class DetailContactPage implements OnInit {
    contact: Person = null;

    constructor(private _route: ActivatedRoute,
                private emailComposer: EmailComposer) {
    }

    ngOnInit() {
        this._route.queryParams.subscribe((params: Params) => {
            this.contact = JSON.parse(params.person);
        });
    }

    async onClickAddContact() {
        const email = {
            to: this.contact.email,
            subject: 'Cordova Icons',
            body: `Hi ${this.contact.name.first} ${this.contact.name.last}, How are you? `,
            isHtml: true
        };

        this.emailComposer.open(email);
    }
}
