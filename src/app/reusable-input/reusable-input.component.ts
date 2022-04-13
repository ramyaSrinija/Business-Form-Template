import { Component, OnInit,Input,ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm } from '@angular/forms';
import { FormComponent } from '../form/form.component';
import { SameAddressService } from '../same-address.service';

@Component({
  selector: 'app-reusable-input',
  templateUrl: './reusable-input.component.html',
  styleUrls: ['./reusable-input.component.scss']
})
export class ReusableInputComponent implements OnInit {

  constructor(public sa:SameAddressService) { }

  @Input() control: FormControl
  @Input() label: string
  @Input() typeInput:string
  @Input() popup:string
  @Input() read:boolean
  @Input() phonemask 

  // formRef:FormGroup | FormArray


  @ViewChild('formRef',{static:false}) public formRef: FormComponent;

  ngOnInit(): void {
  }
}
