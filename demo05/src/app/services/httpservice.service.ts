import { Injectable } from '@angular/core';

import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor() { }

  axiosGet(api:string){
    return new Promise((resolve)=>{
      axios.get(api)
      .then((response)=>{
        resolve(response);
      });
    });
  }
}
