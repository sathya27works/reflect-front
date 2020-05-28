import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageReflectComponent } from './home-page-reflect/home-page-reflect.component';
import { CuriosityQuizQueryComponent } from './curiosity-quiz-query/curiosity-quiz-query.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CuriosityResultsComponent } from './curiosity-results/curiosity-results.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
