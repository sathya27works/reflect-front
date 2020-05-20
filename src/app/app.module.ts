import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CuriosityQuizQueryComponent } from './curiosity-quiz-query/curiosity-quiz-query.component';
import { HomePageReflectComponent } from './home-page-reflect/home-page-reflect.component';

@NgModule({
  declarations: [
    AppComponent,
    CuriosityQuizQueryComponent,
    HomePageReflectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
