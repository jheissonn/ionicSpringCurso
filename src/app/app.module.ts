import { ImageUtilService } from './../services/image.service';
import { CartService } from './../services/domain/cart.service';
import { ProdutoService } from './../services/domain/produto.service';
import { AuthInterceptor } from './../interceptors/auth-interceptor';
import { ClienteService } from './../services/domain/cliente.service';
import { CategoriaService } from './../services/domain/categoria.service';
import { AuthService } from './../services/auth.service';
import { StorageService } from './../services/storage.service';
import { ErrorInterceptorProvider } from './../interceptors/error-interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CategoriaService,
    AuthInterceptor,
    ErrorInterceptorProvider,
    AuthService,
    StorageService,
    ClienteService,
    ProdutoService,
    CartService,
    ImageUtilService
  ]
})
export class AppModule {}
