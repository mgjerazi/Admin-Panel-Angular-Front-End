import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Category, CategoryService} from '../services/category.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {
  categoryForm = new FormGroup({});

  constructor(private categoryService: CategoryService,
              private router: Router,
              private activeRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    if (this.activeRoute.snapshot.params.id) {
      // Update
      this.categoryService.getById(this.activeRoute.snapshot.params.id)
        .subscribe((category) => {
          this.categoryForm = this.createForm(category);
        });
    } else {
      // Create
      this.categoryForm = this.createForm({
        id: '00000000-0000-0000-0000-000000000000',
        name: ''
      });
    }
  }

  createForm(category: Category): FormGroup {
    return new FormGroup({
      id: new FormControl(category.id),
      name: new FormControl(category.name, Validators.required)
    });
  }

  onSubmit(): void {
    this.categoryService.save(this.categoryForm.value)
      .subscribe(response => {
        return this.router.navigate(['/category']);
      });
  }
}

