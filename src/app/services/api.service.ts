import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getApprovedProducts(page: number): Observable<any> {
    return this.http.get(`${environment.API_BASE}/approved-products?page=${page}`);
  }

  getPendingProducts(page: number): Observable<any> {
    return this.http.get(`${environment.API_BASE}/pending-products?page=${page}`);
  }

  approveProduct(sku: string): Observable<any> {
    return this.http.put(`${environment.API_BASE}/${sku}/approve`, {
      sku: sku,
    });
  }
}
