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
}
