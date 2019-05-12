import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutingModule } from '@app/routing/routing.module';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';

import { InternalServerComponent } from './error-pages/internal-server/internal-server.component';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { EnvironmentUrlService } from './shared/services/environment-url.service';
import { RepositoryService } from './shared/services/repository.service';
import { ErrorHandlerService } from './shared/services/error-handler.service';

import { DatePipe } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { AlertComponent } from './_components';
import { JwtInterceptor } from './_helpers';
// import { ErrorInterceptor } from './_helpers';
import { LoginComponent } from './login';
import { RegisterComponent } from './register/register.component';

// used to create fake backend
// import { fakeBackendProvider } from './_helpers';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AdminComponent } from './admin/admin.component';
import { MaterialModule} from '@app/material';
import { LayoutComponent } from './layout/layout.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InternalServerComponent,
    NotFoundComponent,
    AlertComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    LayoutComponent,
    HeaderComponent,
    SidenavListComponent

  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [ EnvironmentUrlService, RepositoryService, ErrorHandlerService, DatePipe,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
   // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    // provider used to create fake backend
    //fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
