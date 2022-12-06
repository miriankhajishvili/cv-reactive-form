import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ValidateUrl } from './validators/url.validator';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  form = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    birthyear: new FormControl('', Validators.required),
    
    contactInfo: new FormGroup({
      linkdin: new FormControl('', [
        Validators.required,
        Validators.pattern("^https:\\/\\/[a-z]{2,3}\\.linkedin\\.com\\/.*$"),
      ]),
      github: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern("^(http(s?):\/\/)?(www\.)?github\.([a-z])+\/([A-Za-z0-9]{1,})+\/?$"),
      ]),
      address: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(15),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
    }),
     
     experience : new FormArray([
      new FormGroup({
        company: new FormControl('', Validators.required),
        years: new FormControl('', [Validators.required, Validators.maxLength(2)]),
      })


     ]),
  });

  get experienceFormArray(){

    return <FormArray>this.form.get('experience')
  }


  addExperience(){

    this.experienceFormArray.push(
      new FormGroup({
        company: new FormControl('', Validators.required),
        years: new FormControl('', [Validators.required, Validators.maxLength(2)]),

      })
    )

  }
  removeExperience(i: number) {
    this.experienceFormArray.removeAt(i);
  }
  
}
