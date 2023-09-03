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
    ReceiverComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
