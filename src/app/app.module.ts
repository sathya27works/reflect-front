import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageReflectComponent } from './home-page-reflect/home-page-reflect.component';
import { CuriosityQuizQueryComponent } from './curiosity-quiz-query/curiosity-quiz-query.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HttpClientModule } from '@angular/common/http';
import { CuriosityResultsComponent } from './curiosity-results/curiosity-results.component';
import { GrowthMindsetQuizComponent } from './growth-mindset-quiz/growth-mindset-quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageReflectComponent,
    CuriosityQuizQueryComponent,
    LoginPageComponent,
    CuriosityResultsComponent,
    GrowthMindsetQuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
