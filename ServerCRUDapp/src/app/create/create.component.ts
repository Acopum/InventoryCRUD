import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  angForm: FormGroup;

  constructor(private fb: FormBuilder, private bs: ServerService) {
     this.createForm();
   }

  createForm() {
    this.angForm = this.fb.group({
      serverName: ['', Validators.required ],
    });
  }

  addServer(serverName) {
    this.bs.addServer(serverName);
  }

  ngOnInit() {
  }
}
