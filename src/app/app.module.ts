import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FixtureComponent } from './Component/fixture/fixture.component';
import { SharedModule } from './Shared/shared/shared.module';
import { DynamicDropDownComponent } from './Component/dynamic-drop-down/dynamic-drop-down.component';
import { DateformatPipe } from './dateformat.pipe';
import { HomeComponent } from './Component/home/home.component';
import { FooterComponent } from './Component/footer/footer.component';
import { ToolbarComponent } from './Component/toolbar/toolbar.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './Shared/interceptors/jwt.interceptor';
import { NotificationComponent } from './Component/notification/notification.component';
import { FixtureDetailsComponent } from './Component/fixture-details/fixture-details.component';
import { GroupByPipe } from './Component/Pipe/group-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FixtureComponent,
    DynamicDropDownComponent,
    DateformatPipe,
    HomeComponent,
    FooterComponent,
    ToolbarComponent,
    NotificationComponent,
    FixtureDetailsComponent,
    GroupByPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
