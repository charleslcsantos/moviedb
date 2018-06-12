import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MomentModule } from 'ngx-moment';

import { AppComponent } from './app.component';
import { MovieDetailComponent } from './movie/movie-detail/movie-detail.component';
import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'ng2-select';
import { MovieService } from './movie/shared/movie.service';
import { AuthInterceptor } from './http-interceptors/auth-interceptor';

const appRoutes: Routes = [
  { path: '', children: [
    { path: '', component: MovieListComponent },
    { path: 'movie', component: MovieListComponent },
    { path: 'movie/:id', component: MovieDetailComponent },

  ]},
];

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
    MomentModule,
    FormsModule,
    SelectModule
  ],
  providers: [
    MovieService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
