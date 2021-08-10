import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:8080/api/products';
  constructor(private http: HttpClient) {
  }
  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}`);
  }
}
export interface Product {
  id: string;
  name: string;
  createdAt: Date;
  description: string;
  price: number;
  image: string;
  sale: boolean;
  salePrice: number;
  views: number;
  featured: boolean;
  featureImage: string;
  color: string;
  size: string;
  categoryId: string;
}


