import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Product } from '../_shared/Models/product';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.scss']
})
export class ProductNewComponent implements OnInit {

  @Output() ProductCreated = new EventEmitter();
  product:Product={id :0, name:'', description:'', price:0,creationDate:new Date(Date.now()), edit:false};
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm,product:Product) {

    product.edit= product.edit==true? false : true;
    product.id=Math.floor(Math.random() * 100)
    
    this.ProductCreated.emit(product)
  }
}
