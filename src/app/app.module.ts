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
import { HomeComponent } from './features/Changing Pages with Routing/home.component';
import { AboutComponent } from './features/Changing Pages with Routing/about.component';
import { ContactComponent } from './features/Changing Pages with Routing/contact.component';
import { ProfileComponent } from './features/Changing Pages with Routing/profile.component';
import { ProfileInfoComponent } from './features/Changing Pages with Routing/profile-info.component';
import { ProfileSettingsComponent } from './features/Changing Pages with Routing/profile-settings.component';
import { ProfileOrdersComponent } from './features/Changing Pages with Routing/profile-orders.component';
import { ProductListComponent } from './features/Changing Pages with Routing/product-list.component';
import { NotFoundComponent } from './features/Changing Pages with Routing/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { CanDeactivateGuard } from './features/Changing Pages with Routing/can-deactivate.guard';

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
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
