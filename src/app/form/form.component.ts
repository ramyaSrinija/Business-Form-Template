import { Component, ElementRef, OnInit,TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SameAddressService } from '../same-address.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  businessForm:FormGroup;
  email:string="Email address should be of format xxxx@xxx.xx";
  phoneNo:string="Phone number should follow the format (xxx)xxx-xxxx";
  phoneMask = ['(', /[1-9]/, /\d/, /\d/, ')', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  registrationError = {
    error:false,
    errorMessage:''
  }


  constructor(private fb:FormBuilder,public sa:SameAddressService) { 

    this.businessForm = this.fb.group({
      emailadd:['',[Validators.required, Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")]],
      legalName:['',[Validators.required]],
      busscardName:['',[Validators.required]],
      addresses:this.fb.group({
        bussAddress:this.fb.group({
          Add1:['',[Validators.required]],
          Add2:['',[Validators.required]],
          zipCode:['',[Validators.required,Validators.pattern("[0-9]{6}")]],
        }),
        homeAddress:this.fb.group({
          Add1:['',[Validators.required]],
          Add2:['',[Validators.required]],
          zipCode:['',[Validators.required,Validators.pattern("[0-9]{6}")]],
        })
      }),
      phone:['',[Validators.required,Validators.pattern("^[(][0-9]{3}[)][0-9]{3}[-][0-9]{4}$")]],
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      cardName:['',[Validators.required]],
      sameAdd:[false],
      radioBtn:['',[Validators.required]],
      checkBtn:[false,Validators.required]
    })
  }

  ngOnInit(): void {
    this.sa.sameAddress(this.businessForm,"sameAdd","addresses","bussAddress","homeAddress")
  }

  submitForm(){
    if(this.businessForm.status == 'VALID'){
      this.registrationError.error = false;
      this.registrationError.errorMessage = ''
      console.log("Form Submitted")
    }
    else {
      this.registrationError.error = true
      this.registrationError.errorMessage = 'Please fill all the required details'
    }
  }

    // get controls
    get emailadd(){return this.businessForm.get("emailadd")}
    get legalName(){return this.businessForm.get("legalName")}
    get busscardName(){return this.businessForm.get("busscardName")}
    get Add1(){return this.businessForm.get("addresses.bussAddress.Add1")}
    get Add2(){return this.businessForm.get("addresses.bussAddress.Add2")}
    get busszipCode(){return this.businessForm.get("addresses.bussAddress.zipCode")}
    get phone(){return this.businessForm.get("phone")}
    get firstName(){return this.businessForm.get("firstName")}
    get lastName(){return this.businessForm.get("lastName")}
    get cardName(){return this.businessForm.get("cardName")}
    get sameAdd(){return this.businessForm.get("sameAdd")}
    get homeAdd1(){return this.businessForm.get("addresses.homeAddress.Add1")}
    get homeAdd2(){return this.businessForm.get("addresses.homeAddress.Add2")}
    get zipCode(){return this.businessForm.get("addresses.homeAddress.zipCode")}
    get radioBtn(){return this.businessForm.get("radioBtn")}
}
