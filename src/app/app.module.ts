import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StInputModule, StHeaderModule, StPopOverModule, StLauncherModule, StModal2Module} from '@stratio/egeo';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StInputModule,
    StLauncherModule,
    StPopOverModule,
    StModal2Module,
    StHeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
