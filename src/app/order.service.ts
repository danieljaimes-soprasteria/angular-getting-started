import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "./product";

@Injectable({
  providedIn: "root",
})
export class OrderService {
  private backendURL: string = "http://localhost:8080/api/shop/orders";

  constructor(private httpClient: HttpClient) {}

  createOrder(productList: Product[]): void {
    this.httpClient
      .post(`${this.backendURL}`, { products: [...productList] })
      .subscribe({
        next: (data) => {
          console.log("Order saved", data);
        },
        error: (error) => {
          console.error("Error", error);
        },
      });
  }
}
