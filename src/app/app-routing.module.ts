import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageReflectComponent } from './home-page-reflect/home-page-reflect.component';
import { CuriosityQuizQueryComponent } from './curiosity-quiz-query/curiosity-quiz-query.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CuriosityResultsComponent } from './curiosity-results/curiosity-results.component';
import { GrowthMindsetQuizComponent } from './growth-mindset-quiz/growth-mindset-quiz.component';
import { GrowthMindsetResultsComponent } from './growth-mindset-results/growth-mindset-results.component';
import { BlindQuizQueryComponent } from './blind-quiz-query/blind-quiz-query.component';
import { BlindQuizSaveComponent } from './blind-quiz-save/blind-quiz-save.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginPageComponent
      },
      {
        path: 'home',
        component: HomePageReflectComponent
      },
      {
        path: 'curiosityQuiz',
        component: CuriosityQuizQueryComponent
      },
      {
        path: 'curiosityResults',
        component: CuriosityResultsComponent
      },
      {
        path: 'growthMindesetQuiz',
        component: GrowthMindsetQuizComponent
      },
      {
        path: 'growthMindsetResults',
        component: GrowthMindsetResultsComponent
      },
      {
        path: 'blindQuizQuery',
        component: BlindQuizQueryComponent
      },
      {
        path: 'blindQuizSave',
        component: BlindQuizSaveComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
