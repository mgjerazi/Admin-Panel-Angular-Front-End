import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  productForm = new FormGroup({});

  constructor() {
  }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      id: new FormControl('00000000-0000-0000-0000-000000000000'),
      name: new FormControl('', Validators.required)
    });
  }

  // createProductForm(product: Product): FormGroup{
  //   return new FormGroup({
  //   id: new FormControl()
  //   })
  // }

  onSubmit(): void {
    console.log(this.productForm.value);
  }
}
