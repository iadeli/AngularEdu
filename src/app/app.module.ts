import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LifecycleExampleComponent } from './features/component/lifecycle-example.component';
import { LifecycleTemplateExampleComponent } from './features/component/app-lifecycle-template-example';
import { ContentChildExampleComponent } from './features/component/app-content-child-example';
import { HighlightDirective } from './features/directives/highlight-directive';
import { CustomColorDirective } from './features/directives/app-custom-color';
import { DemoComponent } from './features/demo/demo.component';
import { CustomIfDirective } from './features/directives/custom-if-directive';
import { SwitchComponent } from './features/directives/switch-component';

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
    SwitchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
