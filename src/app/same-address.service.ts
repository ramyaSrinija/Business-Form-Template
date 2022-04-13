import { Injectable } from '@angular/core';
import { EMPTY } from 'rxjs';
import { tap, distinctUntilChanged, switchMap, startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SameAddressService {

  readOnly:boolean=false

  constructor() { }

  sameAddress(form,checkbox,address,addOne,addTwo){
    form.get(checkbox)
    .valueChanges   //check if the checkbox is checked or not
    .pipe(          //to combine multiple functions 
      distinctUntilChanged(),   // allowing items through that have not already been emitted
      switchMap(isSameAddress => {
        this.readOnly = form.get(checkbox).value
        if (isSameAddress) {
          return form.get(address)
            .get(addOne)
            .valueChanges
            .pipe(
              // at the beginning fill the form with the current values
              startWith(form.get(address).get(addOne).value),
              tap(value =>
                // every time the sending address changes, update the billing address 
                form.get(address)
                  .get(addTwo)
                  .setValue(value)
              )
            )
        } else {
          form.get(address)
            .get(addTwo)
            .reset();

          return EMPTY;
        }
      })
    
    )
    .subscribe()
    
  }
}


//switchMap:maps each value from the source observable into an inner observable, subscribes to it, and then starts emitting the values from it.