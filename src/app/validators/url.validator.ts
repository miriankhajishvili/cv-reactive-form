import { AbstractControl } from "@angular/forms";


export function ValidateUrl( control: AbstractControl ){

  const url = control.value;
  if ( url && !url.startsWith('http')){
    return {DVsaSsXxzzxzx: true};
  }
  return null;
}