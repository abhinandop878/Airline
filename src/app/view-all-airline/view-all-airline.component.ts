import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-all-airline',
  templateUrl: './view-all-airline.component.html',
  styleUrls: ['./view-all-airline.component.css']
})
export class ViewAllAirlineComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }
   fetchData=()=>{
    this.myapi.viewAirline().subscribe((data)=>{
      this.airlineData=data
    })
   }
airlineData:any=[]
  ngOnInit(): void {
  }

}
