import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ProductService } from '../product.service';
import { Album } from './album';
import 'rxjs/add/operator/map';
import { Product } from './product';

@Component(
  {
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
  })
@Injectable()
export class ProductListComponent implements OnInit
{
  albumInfo;


  products: Product[];


  constructor(private _productService: ProductService) { }

  ngOnInit()
  {
    this._productService.getAlbum(1).subscribe(response => this.albumInfo = response);



    @Injectable()
    export class ProductService
    {

      private _albumUrl = '../assets/album.json';

      private _productsUrl = '../assets/products.json';


      constructor(private _http: Http) { }


      getAlbum(id: number): Observable<Album>
      {
        return this._http.get(this._albumUrl).map((Response)
          => <Album> Response.json());
      }

      getProducts(): Observable<Product[]>
      {
        return this._http.get(this._productsUrl).map((response) => <Product[]> response.json());
      }
    }
