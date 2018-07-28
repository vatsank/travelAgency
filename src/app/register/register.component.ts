import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  regForm: FormGroup;
  frmConfig: any[] = [
    {type: 'text', name: 'firstName', label: 'Name', constraint: Validators.required},
    {type: 'email', name: 'email', label: 'Email', constraint:  Validators.email},
  ];
  constructor(private builder: FormBuilder) { }

  ngOnInit() {

  this.regForm = this.createForm();
  }

    createForm(): FormGroup {

      const group = this.builder.group({});

       this.frmConfig.forEach(eachItem => group.addControl(
                eachItem.name, new FormControl('', eachItem.constraint)));
         return group;
}

submit(){
  console.log(this.regForm.value);
  console.log(this.regForm.valid);

}
}
