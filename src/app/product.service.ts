
import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ProductService } from '../product.service';
import { Album } from './album';

@Component(
  {
    Selector: 'app-prouct-description',
    templatetUrl: './product-description.component.html',
    styleUrls: ['./product-decription.component.css']
  })

export class ProductDescriptionComponent implements OnInit
{
  albumInfo;

  private _albumUrl = '../assets/album.json';

  constructor(private _productService: ProductService) { }

  ngOnInit()
  {
    this._productService.getAlbum(1).subscribe(response => this.albumInfo = response);





    import 'rxjs/add/operator/map';


    import { Album } from './album';

    import { Observable } from 'rxjs/Observable';

    @Injectable()
    export class ProductService
    {

      private _albumUrl = '../assets/album.json';

      constructor(private _http: Http) { }


      getAlbum(id: number): Observable<Album>
      {
        return
        this._http.get(this._albumUrl).map((Response)
          => <Album> Response.json());
      }

    }
























