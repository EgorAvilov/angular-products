import {ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewChild} from '@angular/core';
import {CounterButtonsComponent} from '../counter-buttons/counter-buttons.component';
import {ProductService} from '../service/product.service';
import {v4 as uuidv4} from 'uuid';
import {IconMenuComponent} from '../icon-menu/icon-menu.component';
import {defaultIcon} from '../common/constants';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateProductComponent {

  @ViewChild(CounterButtonsComponent) counterButtons;
  @ViewChild(IconMenuComponent) iconMenu;

  form = this.formBuilder.group({
    name: ['', Validators.required],
    price: [null, Validators.required]
  });

  constructor(private productService: ProductService,
              private formBuilder: FormBuilder,
              private cdr: ChangeDetectorRef) {
  }

  submit(): void {
    this.productService.add({
        id: uuidv4(),
        name: this.form.get('name').value,
        amount: this.counterButtons.value,
        price: this.form.get('price').value,
        iconName: this.iconMenu.chosenIcon
      }
    );
    this.counterButtons.value = 1;
    this.iconMenu.chosenIcon = defaultIcon;
    this.form.reset();
    this.cdr.detectChanges();
  }
}
