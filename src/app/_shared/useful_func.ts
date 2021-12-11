import { Product } from "./Models/product";

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