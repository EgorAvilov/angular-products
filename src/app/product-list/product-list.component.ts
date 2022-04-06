import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductItem, ProductService} from '../service/product.service';
import {getIconClass} from '../common/util-functions';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  isLoading = true;
  productItems: ProductItem[] = [];
  subscription: Subscription = null;

  getIconClass = getIconClass;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.subscription = this.productService.getProductList().subscribe(productList => {
      this.productItems = productList;
      this.isLoading = false;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  remove(productItem: ProductItem): void {
    this.productService.remove(productItem);
  }

  changeAmount(productItemId: string, newAmount: number): void {
    this.productService.updateAmount(productItemId, newAmount);
  }

  get total(): number {
    return this.productItems.reduce((total, product) => total + product.price * product.amount, 0);
  }
}
