import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// #region NgRx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// #endregion

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // #region NgRx
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([])
    // #endregion
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
