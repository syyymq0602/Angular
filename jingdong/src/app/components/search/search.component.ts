import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public keywords:string='';
  public historyList:any[]=[];
  constructor() { }

  ngOnInit() {
  }

  doSearch()
  {
    if(this.historyList.indexOf(this.keywords)==-1){
      this.historyList.push(this.keywords);
    }
    console.log(this.keywords);
    this.keywords='';
  }
  DelHistory(key){
    this.historyList.splice(key,1);
  }
}
