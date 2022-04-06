import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {take} from 'rxjs/operators';

export interface ProductItem {
  id: string;
  name: string;
  amount: number;
  price: number;
  iconName: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productItems: ProductItem[] = [];

  productsSubject$ = new BehaviorSubject([]);

  constructor(private http: HttpClient) {
  }

  getProductList(): Observable<ProductItem[]> {
    if (!this.productItems.length) {
      this.load();
    }
    return this.productsSubject$.asObservable();
  }

  add(productItem: ProductItem): void {
    this.productItems.push(productItem);
    this.productsSubject$.next(this.productItems);
  }

  remove(productItem: ProductItem): void {
    this.productItems = this.productItems.filter(el => el.id !== productItem.id);
    this.productsSubject$.next(this.productItems);
  }

  updateAmount(productItemId: string, newAmount: number): void {
    this.productItems = this.productItems.map(productItem => (productItem.id == productItemId) ?
      {...productItem, amount: newAmount} : productItem);
    this.productsSubject$.next(this.productItems);
  }

  get(id: string): ProductItem {
    return this.productItems.find(productItem => productItem.id === id);
  }

  load(): void {
    this.http
      .get<ProductItem[]>(`https://demo1224889.mockable.io/angular_products `)
      .pipe(take(1))
      .subscribe(productItems => {
        this.productItems = productItems;
        this.productsSubject$.next(this.productItems);
      });
  }
}
