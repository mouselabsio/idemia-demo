import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserRecordService } from './user-record/user-record.service';
import { UserRecordListComponent } from './user-record-list/user-record-list.component';
import { GiphyService } from './shared/giphy/giphy.service';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { UserRecordAddComponent } from './user-record-add/user-record-add.component';
import { UserRecordRefreshComponent } from './user-record-refresh/user-record-refresh.component';

const appRoutes: Routes = [
{ path: '', redirectTo: '/user-record-refresh', pathMatch: 'full' },
{
path: 'user-record-list',
component: UserRecordListComponent
},
{
path: 'user-record-refresh',
component: UserRecordRefreshComponent
},
{
path: 'user-record-add',
component: UserRecordAddComponent
}
];

@NgModule({
  declarations: [
    AppComponent,
    UserRecordListComponent,
    UserRecordAddComponent,
    UserRecordRefreshComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserRecordService, GiphyService],
  bootstrap: [AppComponent, UserRecordListComponent]
})
export class AppModule { }
