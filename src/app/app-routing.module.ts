import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard, NotAuthGuard } from './core/auth/auth.guard';
import { MembersComponent } from './members/members.component';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [NotAuthGuard] },
    { path: 'members', component: MembersComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}
