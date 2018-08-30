import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { PokemonsModule } from './modules/pokemons/pokemons.module';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './modules/auth/auth.module';
import { AuthService } from './services/auth/auth.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    PokemonsModule,
    AuthModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private authService: AuthService) {
    this.authService.checkToken();
  }
}
