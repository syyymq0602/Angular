import { Component, OnInit } from '@angular/core';

import { HttpClient,HttpHeaders} from '@angular/common/http';

import { HttpserviceService } from '../../services/httpservice.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public list:any[]=[];
  public id:any="";
  public body:any={
    "name": "NIKE",
    "type": 3,
    "publishDate": "2021-01-30T02:55:18.532Z",
    "price": 89.87
  }
  constructor(public http:HttpClient,public service:HttpserviceService) { }

  ngOnInit() {
  }
  getData(){
    let api="http://a.itying.com/api/productlist";
    this.http.get(api).subscribe((response:any)=>{
      console.log(response);
      this.list=response.result;
    });
  }

  doLogin(){
    const httpOptions ={
      headers : new HttpHeaders({
        'Content-Type':'application/json'
      })
    }

    let api:string='https://localhost:44350/api/app/book';
    
    this.http.post(api,this.body,httpOptions).subscribe((response:any)=>{
      console.log(response);
      this.id=response.id;
    })
  }

  getJsonpData(){
    let api="http://a.itying.com/api/productlist";
    this.http.jsonp(api,'callback').subscribe((res)=>{
      console.log(res);
    });
  }

  getAxiosData(){
    let api:string="http://a.itying.com/api/productlist";
    this.service.axiosGet(api).then((data)=>{
      console.log(data);
    });
  }
}
