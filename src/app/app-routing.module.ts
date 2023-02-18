//Title:  app-routing.module.ts
//Author: John Vanhessche
//Date 17 February 2023
//Description:  TypeScript file for the app component.

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { SignInGuard } from './sign-in.guard';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,           //anyone following the baselayout will use the baselayout in all the child components, that's why this child doesn't have path it uses base..
    children: [                               //the children is an array of children components.
      {
        path: '', 
        component: HomeComponent
      }
    ],
    canActivate: [SignInGuard]     //added 7.2, user will need to sign it to get access to baselayout 
  },
  {
    path: 'session',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'not-found',
        component: NotFoundComponent
      },
      {
        path: 'sign-in',
        component: SignInComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'session/not-found'            //redirects when a user enters an invalid URL, send to not found.  the session is the parent route (see above) and not-found is the component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
