import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  form: FormGroup

  constructor(private formBuilder : FormBuilder,
              private http : HttpClient) { }

  ngOnInit(): void {
    
    this.form = this.formBuilder.group({ //form's logic. Called by formControlName
      nome: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email]],
    })
  }

  onSubmit(){
    console.log(this.form)    //fake API integration
    this.http.post('https://httpbin.org/post', JSON.stringify(this.form.value))   
    .subscribe(data => {
      console.log(data);
      this.form.reset()         //reset form after submit
    },
    (error:any) => alert('erro') ) // alert in error
    
  }

  resetForm(){
    this.form.reset()
  }

}
