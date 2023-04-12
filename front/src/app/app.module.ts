import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartamentoComponent } from './departamento/departamento/departamento.component';
import { DepartamentoService } from './services/departamento.service';

@NgModule({
  declarations: [AppComponent, DepartamentoComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [DepartamentoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
