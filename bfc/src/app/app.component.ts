import { Component, OnInit } from '@angular/core';
import {AtmServiceService} from './atm-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public isHidden = true;

  constructor(private atmServiceService: AtmServiceService){};
  submit(event) {
    console.log("Hello Word");
  };
  macAddress = '';
  hashAtm ='';
  estadoAtm = '';
  cidadeAtm = '';
  
  ngOnInit(){
    this.atmServiceService.getMac().then(data => {
      this.macAddress = data._body;
      console.log(data._body);
    })
  }

  

  public postarHash = function(){
    console.log(this.macAddress, this.hashAtm, this.estadoAtm, this.cidadeAtm);
    this.atmServiceService.postHash('',this.hashAtm);
  }

  
  
  
}





