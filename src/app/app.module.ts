import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Pelicula1Page } from '../pages/pelicula1/pelicula1';
import { Pelicula2Page } from '../pages/pelicula2/pelicula2';
import { Pelicula3Page } from '../pages/pelicula3/pelicula3';
import { SeptimoPage } from '../pages/septimo/septimo';
import {OdioPage} from '../pages/odio/odio';
import {Video1Page} from '../pages/video1/video1';
import { VideoPage } from '../pages/video/video';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    Pelicula1Page,
    Pelicula2Page,
    Pelicula3Page,
    SeptimoPage,
    VideoPage,
    OdioPage,
    Video1Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    Pelicula1Page,
    Pelicula2Page,
    Pelicula3Page,
    SeptimoPage,
    VideoPage,
    OdioPage,
    Video1Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
