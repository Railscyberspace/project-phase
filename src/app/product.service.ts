
import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ProductService } from '../product.service';

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

  }


}

































