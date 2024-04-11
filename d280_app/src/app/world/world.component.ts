import { Component } from '@angular/core';
import { ApicallService } from '../apicall.service';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrl: './world.component.scss'
})

export class WorldComponent {
  constructor(private apiCall:ApicallService) 
  {
    
  }
  fillColor: string = 'rgb(0,0,0)'; 
  
  countryData = [{
    'name': 'Select a country',
    'capitalCity': '',
    'region': {
      'value': ''
    },
    'incomeLevel': {
      'value': ''
    },
    'longitude': '',
    'latitude': ''
  }]

  onMouseEnter(event: any) {
    event.target.attributes.fill.value = 'rgb(225, 0, 255)';

   this.apiCall.getCountryData(event.target.id).subscribe((data) => {
   this.countryData = data[1];
   this.countryData[0].name = event.target.attributes.name.value;
   })
  }

  onMouseLeave(event: any): void {
    event.target.attributes.fill.value = 'rgb(0,0,0)';
  }
  
}



