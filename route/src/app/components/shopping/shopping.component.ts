import { Component, OnInit } from '@angular/core';

import { Router,NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  goProduct(){
    this.router.navigate(['/product/','1111']);
  }

  goHome(){
    let para:NavigationExtras={
      queryParams:{'aid':987}
    };

    this.router.navigate(['/newscontent'],para);
  }

}
