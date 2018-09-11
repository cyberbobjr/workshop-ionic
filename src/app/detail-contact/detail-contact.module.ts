import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {DetailContactPage} from './detail-contact.page';
import {EmailComposer} from '@ionic-native/email-composer/ngx';

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
              providers: [EmailComposer]
          })
export class DetailContactPageModule {
}
