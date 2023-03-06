import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserlistComponent } from './components/userlist/userlist.component';
import { UserComponent } from './components/user/user.component';
import { UserformComponent } from './components/userform/userform.component';



const routes: Routes = [
    { path: '', pathMatch:'full', redirectTo : 'home' },
    { path: 'home', component: UserlistComponent},
    { path: 'user/:id', component: UserComponent},
    { path: 'newuser', component: UserformComponent},
    { path: 'updateuser/:id', component: UserformComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
