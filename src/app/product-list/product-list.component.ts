import { Component, OnInit } from '@angular/core';
import { Product } from '../_shared/Models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
// id: number;
// name: string;
// description:string;
// price:number;
// creationDate:Date;
// edit:boolean;
export class ProductListComponent implements OnInit {
  addNew:boolean=false;
  constructor() { }
  products:Product[] = [{id :1, name:'Windstorm', description:'some product', price:100,creationDate:new Date("Fri Dec 08 2019 07:44:57"), edit:false}]
  ngOnInit(): void {
  }

  openProductForm()
  {
    this.addNew=true;
  }
  productCreated(product:Product)
  {
    this.products.push(product);
    this.addNew=false;
  }

}
