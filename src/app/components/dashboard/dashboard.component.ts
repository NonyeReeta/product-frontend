import { Component, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/interfaces/product.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  page: number = 1;
  showApprove: boolean = true;
  showApproved: boolean = false;
  approvedProducts: ProductInterface[] | undefined;

  pendingProducts: ProductInterface[] | undefined;

  toggleApproved() {
    this.showApproved = true;
    this.showApprove = false;
  }
  toggleApprove() {
    this.showApproved = false;
    this.showApprove = true;
  }
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
      this.loadApprovedProducts(this.page);
      this.loadPendingProducts(this.page);
  };

  loadApprovedProducts(page: number) {
    this.apiService
      .getApprovedProducts(page)
      .subscribe(
        products =>
        {
          this.approvedProducts = products;
         }
    );
  }

  loadPendingProducts(page: number) {
    this.apiService
      .getPendingProducts(page)
      .subscribe(products =>
      {
        this.pendingProducts = products;
      });
  }

  approveProduct(product: ProductInterface) {
    const sku = product.sku;
    this.apiService.approveProduct(sku).subscribe(
      product =>
    {
      location.reload();
    }
    )
  }

  //  function to formate date
  formatter(date: string) {
    const dateTime = new Date(date);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
      timeZone: 'UTC',
    };
    const formatter = new Intl.DateTimeFormat('en-US', options);
    const formattedDateTime = formatter.format(dateTime);
    return formattedDateTime;
  }
}
