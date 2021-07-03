import { Injectable } from '@angular/core';
import { Product } from '../product/product';

declare let alertify: any;


@Injectable({
  providedIn: 'root'
})

export class AlertifyService {

  constructor() { }

  success(message: string) {
    alertify.success(message)
  }
}

