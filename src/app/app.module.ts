import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {ProductListComponent} from './product-list/product-list.component';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CreateProductComponent} from './create-product/create-product.component';
import {CounterButtonsComponent} from './counter-buttons/counter-buttons.component';
import {FormGroupDirective, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IconMenuComponent} from './icon-menu/icon-menu.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {path: '', component: ProductListComponent},
  {path: 'details/:id', component: ProductDetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CreateProductComponent,
    CounterButtonsComponent,
    IconMenuComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FormGroupDirective],
  bootstrap: [AppComponent]
})
export class AppModule {
}
