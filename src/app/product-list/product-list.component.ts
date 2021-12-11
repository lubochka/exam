import { Component, OnInit } from '@angular/core';
import { Product } from '../_shared/Models/product';
import { SaveProducts, LoadProducts } from '../_shared/useful_func';

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
  options:string[]=[];
  products:Product[] = [{id :1, name:'Windstorm', description:'some product', price:100,creationDate:new Date("Fri Dec 08 2019 07:44:57"), edit:false}]
  ngOnInit(): void {
    let productsStorage =LoadProducts();
    if(productsStorage.length>0)
    {
      this.products=productsStorage;
    } 
    this.makeOptionsFromProducts();
  }

  openProductForm()
  {
    this.addNew=true;
  }
  productCreated(product:Product)
  {
    this.products.push(product);
    SaveProducts(this.products);
    this.makeOptionsFromProducts();
    this.addNew=false;
  }

  deleteProduct(product:Product)
  {
    
    this.products=this.products.filter(a=>a.id!= product.id);
    SaveProducts(this.products);
    this.makeOptionsFromProducts();
  }

  selectedValue(productName:string)
  {
    this.products=this.products.filter(a=>a.name!= productName);
    
  }

  makeOptionsFromProducts()
  {
    this.options=this.products.map(a=>a.name);
  }

}
