import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailCountryComponent } from './detail-country/detail-country.component';
import { CountriesComponent } from './countries/countries.component';

const routes: Routes = [
  {
    path : '',
    component : CountriesComponent
  },
  {
    path : 'country',
    component : DetailCountryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
