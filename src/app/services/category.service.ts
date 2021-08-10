import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl = 'http://localhost:8080/api/category';
  private httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {
  }
  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseUrl}`);
  }
  save(request: CategoryRequest): Observable<number> {
    return this.http.post<number>(this.baseUrl, request, this.httpHeaders);
  }
  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
  getById(id: string): Observable<Category> {
    return this.http.get<Category>(`${this.baseUrl}/${id}`);
  }
}
export interface Category {
  id: string;
  name: string;
}
export interface CategoryRequest {
  id: number;
  name: string;
}
