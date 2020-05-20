import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CuriosityQuizQueryComponent } from './curiosity-quiz-query/curiosity-quiz-query.component';
import { HomePageReflectComponent } from './home-page-reflect/home-page-reflect.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomePageReflectComponent
      },
          {
            path: 'curiosityQuizQuery',
            component: CuriosityQuizQueryComponent
          }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }