import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "./product";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private backendURL: string = "http://localhost:8080/api/shop/products";

  constructor(private httpClient: HttpClient) {}

  findAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.backendURL}`);
  }

  findById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.backendURL}/${id}`);
  }
}
