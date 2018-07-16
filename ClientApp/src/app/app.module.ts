import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './course/course.service';
import { NamesComponent } from './names/names.component';
import { NameDetailComponent } from './name-detail/name-detail.component';
import { NamesService } from './names/names.service';
import { NameDetailService } from './name-detail/name-detail.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    CourseComponent,
    NamesComponent,
    NameDetailComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'course', component: CourseComponent},
      { path: 'names', component: NamesComponent},
    ])
  ],
  providers: [CourseService, NamesService, NameDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
