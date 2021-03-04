import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  myForm!: FormGroup;
  isModalActive: boolean = false;

  constructor(private fb: FormBuilder, private dbData: DataService) {
    this.myForm = this.createFrom();
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  get name() { return this.myForm.get('name'); }
  get surname() { return this.myForm.get('surname'); }
  get email() { return this.myForm.get('email'); }
  get subject() { return this.myForm.get('subject'); }
  get message() { return this.myForm.get('message'); }

  createFrom(){
    return new FormGroup({
      name: new FormControl ('', [Validators.required]),
      surname: new FormControl ('', [Validators.required]),
      email: new FormControl ('', [Validators.required, Validators.email]),
      subject: new FormControl ('', [Validators.required, Validators.minLength(3)]),
      message: new FormControl ('', [Validators.required, Validators.minLength(10)]),
    });
  }
  onResetForm(): void{
    this.myForm.reset();
  }
  submit(): void{
    if (this.myForm.valid){
      this.dbData.saveMessage(this.myForm.value);
      this.onResetForm();
    }
  }
  toggleModal() {
    this.isModalActive = !this.isModalActive;
  }
}

