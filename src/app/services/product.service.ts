import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Product } from '../product/product';
import { tap, catchError } from 'rxjs/operators'


@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  path = 'http://localhost:3000/products'

  getProducts(categoryId: number): Observable<Product[]> {

    let newPath = this.path

    if (categoryId) {
      newPath += '?categoryId=' + categoryId
    }
    return this.http.get<Product[]>(newPath).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    )
  }

  addProduct(product: Product): Observable<Product> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'token'
      })
    }
    return this.http.post<Product>(this.path, product, httpOptions).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    )
  }

  handleError(err: HttpErrorResponse) {
    let errorMessage = ''

    if (err.error instanceof ErrorEvent) {
      errorMessage = 'Bir hata oluştu : ' + err.error.message
    } else {
      errorMessage = 'Sistemsel bir hata oluştu'
    }

    return throwError(errorMessage)
  }
}
