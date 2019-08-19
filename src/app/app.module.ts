import { VersionPage } from './../pages/version/version';
import { SharePage } from './../pages/share/share';
import { FeedbackPage } from './../pages/feedback/feedback';
import { HelpPage } from './../pages/help/help';
import { BuilderInfoPage } from './../pages/builder-info/builder-info';
import { AccountSetupPage } from './../pages/account-setup/account-setup';
import { RegisterPage } from './../pages/register/register';
import { OnboardingPage } from './../pages/onboarding/onboarding';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { GoogleMaps } from '@ionic-native/google-maps';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { QuotationFormPage } from '../pages/quotation-form/quotation-form';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { MessagesPage } from '../pages/messages/messages';
import { UserProvider } from '../providers/user/user';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage,
    OnboardingPage,
    AccountSetupPage,
    BuilderInfoPage,
    QuotationFormPage,
    ForgotPasswordPage,
    MessagesPage,
    HelpPage,
    FeedbackPage,
    SharePage,
    VersionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage,
    OnboardingPage,
    AccountSetupPage,
    BuilderInfoPage,
    QuotationFormPage,
    ForgotPasswordPage,
    MessagesPage,
    HelpPage,
    FeedbackPage,
    SharePage,
    VersionPage


  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClient,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider
  ]
})
export class AppModule {}  
