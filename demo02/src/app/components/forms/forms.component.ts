import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  public peopleInfo:any={
    username:'',
    sex:'',
    cityList:['北京','成都','上海'],
    city:'北京',
    hobbies:[{
      title:'睡觉',
      check:false
    },{
      title:'吃饭',
      check:false
    },{
      title:'写代码',
      check:true
    }],
    mark:''
  }
  constructor() { }

  ngOnInit() {
  }
  doSubmit(){
    console.log(this.peopleInfo);
  }
}
