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

  macAddress = '';
  hashAtm ='';
  estadoAtm = '';
  cidadeAtm = '';
  data = '';
  
  ngOnInit(){
    this.atmServiceService.getMac().then(data => {
      this.macAddress = data._body;
      console.log(data._body);
    })
  }

  public postarHash = function(){
    console.log(this.macAddress, this.hashAtm, this.estadoAtm, this.cidadeAtm);
    this.atmServiceService.postHash('',this.hashAtm);
    this.data= '{ "macAddress": "' + this.macAddress + '","hashAtm": "' + this.hashAtm + '","estadoAtm": "' + this.estadoAtm + '","cidadeAtm":"' + this.cidadeAtm + '"}';
    this.atmServiceService.sendBlockChain(this.data);
  }

  
  
  
}





