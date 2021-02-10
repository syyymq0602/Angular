//配置路由
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { NewscontentComponent } from './components/newscontent/newscontent.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  
  { path:'home',component:HomeComponent },
  { path:'news',component:NewsComponent },
  { path:'newscontent/:aid',component:NewscontentComponent },
  { path:'shopping',component:ShoppingComponent },
  { path:'product/:pid',component:ProductComponent },
  { path:'**',redirectTo:'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
