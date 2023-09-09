import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/Changing Pages with Routing/home.component';
import { AboutComponent } from './features/Changing Pages with Routing/about.component';
import { ContactComponent } from './features/Changing Pages with Routing/contact.component';
import { ProfileComponent } from './features/Changing Pages with Routing/profile.component';
import { ProfileInfoComponent } from './features/Changing Pages with Routing/profile-info.component';
import { ProfileSettingsComponent } from './features/Changing Pages with Routing/profile-settings.component';
import { ProfileOrdersComponent } from './features/Changing Pages with Routing/profile-orders.component';
import { ProductListComponent } from './features/Changing Pages with Routing/product-list.component';
import { NotFoundComponent } from './features/Changing Pages with Routing/not-found.component';
import { AuthChildGuard, AuthGuard } from './features/Changing Pages with Routing/auth-guard.service';
import { ProtectedComponent } from './features/Changing Pages with Routing/protected.component';
import { ContactResolverService } from './features/Changing Pages with Routing/contact-resolver.service';
import { CanDeactivateGuard } from './features/Changing Pages with Routing/can-deactivate.guard';
import { TemplateDrivenFormComponent } from './features/Handling Forms in Angular Apps/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './features/Handling Forms in Angular Apps/reactive-form/reactive-form.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'about', component: AboutComponent,
        data: {
            name: 'John Doe',
            age: 30,
            location: 'New York'
        }
    },
    { path: 'about/:id', component: AboutComponent },
    { path: 'contact', component: ContactComponent, canDeactivate: [CanDeactivateGuard] },
    {
        path: 'contact/:id', component: ContactComponent, canDeactivate: [CanDeactivateGuard],
        resolve: {
            data: ContactResolverService
        }
    },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivateChild: [AuthChildGuard],
        children: [
            { path: '', redirectTo: 'info', pathMatch: 'full' },
            { path: 'info', component: ProfileInfoComponent },
            { path: 'settings', component: ProfileSettingsComponent },
            { path: 'orders', component: ProfileOrdersComponent }
        ]
    },
    { path: 'products', component: ProductListComponent },
    { path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard] },
    { path: 'template-driven-form', component: TemplateDrivenFormComponent },
    { path: 'reactive-form', component: ReactiveFormComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    // , { useHash: true }
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }