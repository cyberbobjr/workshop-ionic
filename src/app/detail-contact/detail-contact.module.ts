import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {Contacts} from '@ionic-native/contacts/ngx';

import {IonicModule} from '@ionic/angular';

import {DetailContactPage} from './detail-contact.page';

const routes: Routes = [
    {
        path: '',
        component: DetailContactPage
    }
];

@NgModule({
              imports: [
                  CommonModule,
                  FormsModule,
                  IonicModule,
                  RouterModule.forChild(routes)
              ],
              declarations: [DetailContactPage],
              providers: [Contacts]
          })
export class DetailContactPageModule {
}
