import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  buyTicketsForm!: FormGroup;

  constructor(private fb:FormBuilder){
    this.buyTicketsForm= this.fb.group({
      eventName: ['', [Validators.required]],
      quantity:[1, [Validators.required, Validators.min(1), Validators.max(10)]],
      paymentMethod: ['', [Validators.required]],
      email:['', [Validators.required, Validators.email] ],
      agreeTerms: [false, [Validators.requiredTrue]]
    });
  }

}
