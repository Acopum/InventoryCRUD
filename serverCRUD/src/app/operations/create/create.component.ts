import { Component, OnInit } from '@angular/core';
import { ServerItemService } from '../../server-item.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  //create this form for validation
  createForm: FormGroup;

  constructor(private serverService: ServerItemService, private fb: FormBuilder, private router: Router, private snackBar: MatSnackBar) {
    //check if field is blank
    this.createForm = this.fb.group({
      name: ['', Validators.required],
    });
  }

  //create entry, and return to main list
  createServer(name) {
    //check if field is valid string
    if(typeof name !== 'string'){
      this.snackBar.open('Input must be string', 'OK', { duration: 3000, });
    }
    else{
      this.serverService.createServer(name).subscribe(() => {
        this.snackBar.open('Entry added successfully', 'OK', { duration: 3000, });
        this.router.navigate(['/read']);
      });
    }

  }

  ngOnInit() {
  }

}
