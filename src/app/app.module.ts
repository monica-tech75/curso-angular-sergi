import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { ContadorComponent } from './contador/contador.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HermanoComponent } from './hermano/hermano.component';
import { EstiloHermanosDirective } from './estilo-hermanos.directive';
import { FirstPipePipe } from './first-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PadreComponent,
    HijoComponent,
    ContadorComponent,
    HermanoComponent,
    EstiloHermanosDirective,
    FirstPipePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
