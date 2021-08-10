import { Component, OnInit } from '@angular/core';
import {Category, CategoryService} from '../services/category.service';

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.css']
})
export class CategoryTableComponent implements OnInit {
  category: Category[] = [];

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.updateCategories();
  }

  updateCategories(): void {
    this.categoryService.getAll().subscribe(response => {
      this.category = response;
    });
  }
  onDeleteCategory(id: string): void {
    const shouldDelete = confirm('Are you sure you want to delete it?');
    if (shouldDelete) {
      this.categoryService.delete(id).subscribe(response => {
        this.updateCategories();
      });
    }
  }
}
