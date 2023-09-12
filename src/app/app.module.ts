import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LifecycleExampleComponent } from './features/component/lifecycle-example.component';
import { LifecycleTemplateExampleComponent } from './features/component/app-lifecycle-template-example.component';
import { ContentChildExampleComponent } from './features/component/app-content-child-example.component';
import { HighlightDirective } from './features/directives/highlight.directive';
import { CustomColorDirective } from './features/directives/app-custom-color.directive';
import { DemoComponent } from './features/demo/demo.component';
import { CustomIfDirective } from './features/directives/custom-if.directive';
import { SwitchComponent } from './features/directives/switch.component';
import { ExampleComponent } from './features/using-services-dependency-injection/example.component';
import { SenderComponent } from './features/using-services-dependency-injection/sender.component';
import { ReceiverComponent } from './features/using-services-dependency-injection/receiver.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ObservablesComponent } from './features/observables/observables/observables.component';
import { HomeComponent } from './features/changing-pages-with-routing/home.component';
import { AboutComponent } from './features/changing-pages-with-routing/about.component';
import { ContactComponent } from './features/changing-pages-with-routing/contact.component';
import { ProfileComponent } from './features/changing-pages-with-routing/profile.component';
import { ProfileInfoComponent } from './features/changing-pages-with-routing/profile-info.component';
import { ProfileSettingsComponent } from './features/changing-pages-with-routing/profile-settings.component';
import { ProfileOrdersComponent } from './features/changing-pages-with-routing/profile-orders.component';
import { ProductListComponent } from './features/changing-pages-with-routing/product-list.component';
import { NotFoundComponent } from './features/changing-pages-with-routing/not-found.component';
import { TemplateDrivenFormComponent } from './features/handling-forms-in-angular-apps/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './features/handling-forms-in-angular-apps/reactive-form/reactive-form.component';
import { CanDeactivateGuard } from './features/changing-pages-with-routing/can-deactivate.guard';
import { PipesComponent } from './features/using-pipes-to-transform-output/pipes/pipes.component';
import { TemperatureConverterPipe } from './features/using-pipes-to-transform-output/temperature-converter.pipe';
import { FilterPipe } from './features/using-pipes-to-transform-output/filter.pipe';
import { HttpRequestExample1Component } from './features/making-http-requests/http-request-example1/http-request-example1.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RequestInterceptor } from './features/making-http-requests/request.interceptor';
import { ResponseInterceptor } from './features/making-http-requests/response.interceptor';
import { LoginComponent } from './features/authentication/login.component';
import { AuthInterceptor } from './features/authentication/auth.interceptor';

import { StoreModule } from '@ngrx/store';
import { TodoModule } from './features/ngrx/todo.module';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [
    AppComponent,

    DemoComponent,
    LifecycleExampleComponent,
    LifecycleTemplateExampleComponent,
    ContentChildExampleComponent,
    HighlightDirective,
    CustomColorDirective,
    CustomIfDirective,
    SwitchComponent,
    ExampleComponent,
    SenderComponent,
    ReceiverComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProfileComponent,
    ProfileInfoComponent,
    ProfileSettingsComponent,
    ProfileOrdersComponent,
    ProductListComponent,
    NotFoundComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    ObservablesComponent,
    PipesComponent,
    TemperatureConverterPipe,
    FilterPipe,
    HttpRequestExample1Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    TodoModule
  ],
  providers: [
    CanDeactivateGuard,
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }