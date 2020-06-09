import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageReflectComponent } from './home-page-reflect/home-page-reflect.component';
import { CuriosityQuizQueryComponent } from './curiosity-quiz-query/curiosity-quiz-query.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HttpClientModule } from '@angular/common/http';
import { CuriosityResultsComponent } from './curiosity-results/curiosity-results.component';
import { BlindQuizQueryComponent } from './blind-quiz-query/blind-quiz-query.component';
import { BlindQuizSaveComponent } from './blind-quiz-save/blind-quiz-save.component';
import { GrowthMindsetQuizComponent } from './growth-mindset-quiz/growth-mindset-quiz.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminAddQuizComponent } from './admin-add-quiz/admin-add-quiz.component';
import { AdminEditQuizComponent } from './admin-edit-quiz/admin-edit-quiz.component';
import { GrowthMindsetResultsComponent } from './growth-mindset-results/growth-mindset-results.component';
import { MakingtimeForMeComponent } from './makingtime-for-me/makingtime-for-me.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageReflectComponent,
    CuriosityQuizQueryComponent,
    LoginPageComponent,
    BlindQuizQueryComponent,
    BlindQuizSaveComponent,
    CuriosityResultsComponent,
    GrowthMindsetQuizComponent,
    AdminHomeComponent,
    AdminAddQuizComponent,
    AdminEditQuizComponent
    GrowthMindsetResultsComponent,
    MakingtimeForMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
