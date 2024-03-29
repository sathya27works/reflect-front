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
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminAddQuizComponent } from './admin-add-quiz/admin-add-quiz.component';
import { AdminEditQuizComponent } from './admin-edit-quiz/admin-edit-quiz.component';
import { MakingtimeForMeComponent } from './makingtime-for-me/makingtime-for-me.component';
import { AdminResultsComponent } from './admin-results/admin-results.component';
import { DashboardReportsHomeComponent } from './dashboard-reports-home/dashboard-reports-home.component';

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
      },
      {
        path: 'admin',
        component: AdminHomeComponent
      },
      {
        path: 'adminAdd',
        component: AdminAddQuizComponent
      },
      {
        path: 'adminEdit',
        component: AdminEditQuizComponent
    },
    {
      path: 'adminResults',
      component: AdminResultsComponent
  },
	  {
        path: 'makingTimeforMeQuery',
        component: MakingtimeForMeComponent
      },
      {
	path: 'dashboard&Reports',
        component: DashboardReportsHomeComponent 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
