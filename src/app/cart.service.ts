import { HttpClient } from "@angular/common/http";
import { Product } from "./product";
import { Injectable } from "@angular/core";
import { OrderService } from "./order.service";

@Injectable({
  providedIn: "root",
})
export class CartService {
  items: Product[] = [];
  constructor(private http: HttpClient, private orderService: OrderService) {}

  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      "/assets/shipping.json"
    );
  }

  addToCart(product: Product) {
    this.items.push(product);
  }

  createOrder() {
    this.orderService.createOrder(this.items);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
