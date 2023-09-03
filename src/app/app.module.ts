import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LifecycleExampleComponent } from './features/component/lifecycle-example/lifecycle-example.component';
import { LifecycleTemplateExampleComponent } from './features/component/lifecycle-example/app-lifecycle-template-example';
import { ContentChildExampleComponent } from './features/component/app-content-child-example';

@NgModule({
  declarations: [
    AppComponent,

    LifecycleExampleComponent,
    LifecycleTemplateExampleComponent,
    ContentChildExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
