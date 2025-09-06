import { Component, Input } from '@angular/core';
import { Customers } from '../../models/student';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [FormsModule, CommonModule],
  templateUrl: './details.html',
  styleUrl: './details.css'
})
export class Details {
  @Input() customer!: Customers;
}
