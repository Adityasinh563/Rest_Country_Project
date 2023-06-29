import { Component, OnInit } from '@angular/core';
import { CountrySvcService } from 'services/country-svc.service';
import { FormGroup,FormControl } from '@angular/forms';
import { Subject, debounceTime } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  data : any;
  form: FormGroup;
  searchByName: Subject<any> = new Subject<any>();
  constructor(private countrySvc : CountrySvcService,
              private router: Router){
    this.initForm();
  }

  ngOnInit(): void {
    this.loadData();
    this.initSearch();
  }

  initForm(){
    this.form = new FormGroup({
      search : new FormControl(''),
      dropDown : new FormControl('')
    })
  }

  loadData(){
    this.countrySvc.getAllCountries().subscribe((res) => {
      this.data = res;
      console.log(res)
    });
  }

  initSearch(){
    this.searchByName.pipe(debounceTime(1000)).subscribe(value => {
      if(value == ""){
        this.loadData();
      }
      else{
        this.getResult(value);
      }
    });
  }

  getResult(value : any){
    this.countrySvc.getCountryByName(value).subscribe(res => {
      this.data = res
    });
  }

  onDropDownChange(){
    const value = this.form.value;
    this.countrySvc.getCountryByRegion(value.dropDown).subscribe((res) => {
      this.data = res;
    })
  }

  onCardClick(value : any){
    this.router.navigate(['/country'],{
      queryParams : {
        name : value
      }
    })
  }

}
