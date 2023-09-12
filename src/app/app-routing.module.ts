import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ObservablesComponent } from './features/observables/observables/observables.component';
import { HomeComponent } from './features/changing-pages-with-routing/home.component';
import { AboutComponent } from './features/changing-pages-with-routing/about.component';
import { ContactComponent } from './features/changing-pages-with-routing/contact.component';
import { CanDeactivateGuard } from './features/changing-pages-with-routing/can-deactivate.guard';
import { ContactResolverService } from './features/changing-pages-with-routing/contact-resolver.service';
import { ProfileComponent } from './features/changing-pages-with-routing/profile.component';
import { AuthChildGuard, AuthGuard } from './features/changing-pages-with-routing/auth-guard.service';
import { ProfileInfoComponent } from './features/changing-pages-with-routing/profile-info.component';
import { ProfileSettingsComponent } from './features/changing-pages-with-routing/profile-settings.component';
import { ProfileOrdersComponent } from './features/changing-pages-with-routing/profile-orders.component';
import { ProductListComponent } from './features/changing-pages-with-routing/product-list.component';
import { ProtectedComponent } from './features/changing-pages-with-routing/protected.component';
import { TemplateDrivenFormComponent } from './features/handling-forms-in-angular-apps/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './features/handling-forms-in-angular-apps/reactive-form/reactive-form.component';
import { NotFoundComponent } from './features/changing-pages-with-routing/not-found.component';
import { PipesComponent } from './features/using-pipes-to-transform-output/pipes/pipes.component';
import { HttpRequestExample1Component } from './features/making-http-requests/http-request-example1/http-request-example1.component';
import { LoginComponent } from './features/authentication/login.component';
import { TodoComponent } from './features/ngrx/component/todo.component';


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
    { path: 'observables', component: ObservablesComponent },
    { path: 'template-driven-form', component: TemplateDrivenFormComponent },
    { path: 'reactive-form', component: ReactiveFormComponent },
    { path: 'pipes', component: PipesComponent },
    { path: 'http-request-example1', component: HttpRequestExample1Component },
    { path: 'ngrx', component: TodoComponent },
    { path: 'login', component: LoginComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    // , { useHash: true }
    imports: [RouterModule.forRoot(routes, { useHash: true, preloadingStrategy:PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutingModule { }