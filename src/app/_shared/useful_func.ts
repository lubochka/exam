import { Product } from "./Models/product";
const _MS_PER_DAY = 1000 * 60 * 60 * 24*60;

export function SaveProducts(products:Product[])
{
    localStorage.setItem('products', JSON.stringify( products));
}

export function LoadProducts()
{
    let productsStr:any = localStorage.getItem('products');
    if(productsStr!=null)
    {
        return JSON.parse(productsStr);
    }
    else return [];
}

export function compareDates(a:Date, b:Date) {
   
    return Math.floor((a.getTime() - b.getTime()) / _MS_PER_DAY);
  }
