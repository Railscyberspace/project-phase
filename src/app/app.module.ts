import { Http, Response } from '@angular/http';

import { Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { constructor } from 'assert';
import { getLocaleNumberSymbol } from '@angular/common';


import 'rxjs/add/operator/map';
import { ProductTracklistingComponent } from './product-tracklisting/product-tracklisting.component';
import { ProductListComponent } from './product-list/product-list.component';
@Injectable()
export class ProductService
{


  private const _albumUrl = '...assets/album.json';
  constructor(private _http: Http) { }

  getAlbum(id: number)
  {
    return this._http.get(this._albumUrl).map(
      // tslint:disable-next-line:no-shadowed-variable
      (Response => Response.json()));
  }
}

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    ProductDescriptionComponent,
    ProductTracklistingComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
