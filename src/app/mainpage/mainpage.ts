import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentID } from '../models/student';
import { Customers } from '../models/student';
import { RouterModule } from '@angular/router';
import { ApiService } from '../services/api.service';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './mainpage.html',
  styleUrl: './mainpage.css'
})

export class Mainpage {

  customers: Customers[] = [];

  isModalOpen = false;
  isEditMode: boolean = false; 
  isViewMode: boolean = false; 

  currentCustomer: Customers = { CustomerNo: '', Name: '', Contact: '' };
  newCustomer: Customers = {CustomerNo: '',Name: '',Contact: ''
  };

  students: StudentID[] = [
    { sno: 1, name: 'Alice Johnson', course: 'BCSA' },
    { sno: 2, name: 'Brian Smith', course: 'BCA' },
    { sno: 3, name: 'Catherine Lee', course: 'BCOM' },
    { sno: 4, name: 'David Miller', course: 'BSC' },
    { sno: 5, name: 'Emily Davis', course: 'BA' },
    { sno: 6, name: 'Frank Wilson', course: 'BBA' },
    { sno: 7, name: 'Grace Taylor', course: 'BCSA' },
    { sno: 8, name: 'Henry Brown', course: 'BSC' },
    { sno: 9, name: 'Isabella Martinez', course: 'BCOM' }
  ]

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getCustomers().subscribe({
      next: (res: Customers[]) => {
        this.customers = res;
        console.log(res);
      },
      error: (err) => {
        console.error('Error fetching customers:', err);
      }
    });
  }

  addCustomer() {
  this.api.addCustomer(this.newCustomer).subscribe({
    next: (res: Customers) => {
      this.customers.push(res);  
      this.closeModal();
    },
    error: (err) => {
      console.error('Error adding customer:', err);
    }
  });
  }

  updateCustomer(): void {
    this.api.updateCustomer(this.currentCustomer).subscribe({
      next: (res) => {
        const index = this.customers.findIndex(cus => cus.CustomerNo === this.currentCustomer.CustomerNo);
        this.customers[index] = res;  
        this.closeModal();  
      },
      error: (err) => {
        console.error('Error updating customer:', err);
      }
    });
  }

  openEditModal(customer: Customers): void {
    this.isEditMode = true;  
    this.isViewMode = false; 
    this.currentCustomer = { ...customer };  
    this.isModalOpen = true;  
  }

  openViewtModal(customer: Customers): void {
    this.isEditMode = true;  
    this.isViewMode = true; 
    this.currentCustomer = { ...customer };  
    this.isModalOpen = true;  
  }

  toggleSelectAll(event: any) {
    const isChecked = event.target.checked;
    this.customers.forEach(cus => {
      cus.selected = isChecked;
    });
  }

  onSelectionChange() {
    
    const selectedCustomers = this.customers.filter(cus => cus.selected);
    console.log(selectedCustomers);  
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.isEditMode = false;
    this.isViewMode = false; 
    this.newCustomer = { CustomerNo: '', Name: '', Contact: '' }; 
  }

  hasSelectedCustomers(): boolean {
    return this.customers.some(cus => cus.selected);
  }

}
