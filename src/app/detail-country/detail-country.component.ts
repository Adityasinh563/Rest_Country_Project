import { Component,OnInit } from '@angular/core';
import { CountrySvcService } from 'services/country-svc.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-country',
  templateUrl: './detail-country.component.html',
  styleUrls: ['./detail-country.component.css']
})
export class DetailCountryComponent implements OnInit {
  name: any;
  data: any;
  languages: any;
  currencies: any;

  constructor(private countrySvc:CountrySvcService,
              private activatedROute : ActivatedRoute){

  }

  ngOnInit(): void {
    this.getQueryParams();
    this.loadData();
  }

  getQueryParams(){
    this.activatedROute.queryParams.subscribe(res => {
      this.name = res['name']
    })
  }

  loadData(){
    this.countrySvc.getCountryByName(this.name).subscribe((res : any) =>{
      this.data = res[0];
      console.log(this.data);
      this.languages = this.getLanguages(res[0]?.languages);
      this.currencies = this.getCurrencies(res[0]?.currencies);
      console.log(this.languages)
    });
  }

  getLanguages(languages:any){
    var array:string[]=[];
    for(const language in languages){
      array.push(`${languages[language]}`)
    }
    return array.join()
  }

  getCurrencies(currencies:any){
    var array:string[]=[];
    for(const currency in currencies){
      array.push(`${currencies[currency].name}`)
    }
    return array.join()
  }

  onBackClick(){
    window.history.back();
  }

}
