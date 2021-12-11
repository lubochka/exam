import { Component, OnInit,Input } from '@angular/core';
import { Product } from '../_shared/Models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product:Product={id :0, name:'0', description:'0', price:0,creationDate:new Date("Fri Dec 08 2019 07:44:57"), edit:false};
  constructor() { }

  ngOnInit(): void {
  }

}
