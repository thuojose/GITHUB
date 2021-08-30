import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchUserComponent } from './search-user/search-user.component';
import { UserDataComponent } from './user-data/user-data.component';
import { UserRepoListComponent } from './user-repo-list/user-repo-list.component';
import { NavComponent } from './nav/nav.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LogoHighlight } from './logo-highlight.directive/logo-highlight.directive.component';
import { HighlightDirective } from './highlight.directive';
import { LogoHighlightDirective } from './logo-highlight.directive';
@NgModule({
  declarations: [
    AppComponent,
    SearchUserComponent,
    UserDataComponent,
    UserRepoListComponent,
    NavComponent,
    NotFoundComponent,
    LogoHighlight.DirectiveComponent,
    HighlightDirective,
    LogoHighlightDirective

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
