import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AtmServiceService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private macAddressUrl = 'http://localhost:3000/atm/mac-address';
  private atmHashUrl = 'http://localhost:3000/atm/hash';

  constructor(private http: Http) {}

  public getMac(): Promise<any>{
    return this.http.get(this.macAddressUrl)
      .toPromise()
      .then(res => res)
      .catch(res => res)
  }

 public postHash(body): Promise<any>{
    return this.http.post(this.atmHashUrl, body)
      .toPromise()
      .then(res => res)
      .catch(res => res)
  }
  }
 



