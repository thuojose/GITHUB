import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchUserComponent } from './search-user/search-user.component';
import { UserDataComponent } from './user-data/user-data.component';
import { UserRepoListComponent } from './user-repo-list/user-repo-list.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { LogoHighlightDirective } from './logo-highlight.directive';
import { FooterComponent } from './footer/footer.component';
import { DataCountPipe } from './data-count.pipe';
@NgModule({
  declarations: [
    AppComponent,
    SearchUserComponent,
    UserDataComponent,
    UserRepoListComponent,
    NavComponent,
    NotFoundComponent,
    LogoHighlightDirective,
    FooterComponent,
    DataCountPipe

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
