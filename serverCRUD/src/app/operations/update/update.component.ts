import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

import { ServerItemService } from '../../server-item.service';
import { ServerItem } from '../../serverItem.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

export class UpdateComponent implements OnInit {

  id: String;
  server: any = {};
  updateForm: FormGroup;

  constructor(private serverService: ServerItemService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    console.log(this.id);
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.serverService.getServersByID(this.id).subscribe(res => {
        this.server = res;
        this.updateForm.get('name').setValue(this.server.name);
      });
    });
  }

  createForm() {
    this.updateForm = this.fb.group({
      name: ['', Validators.required ]
    });
  }

  updateServer(name) {
    if(typeof name !== 'string'){
      this.snackBar.open('Input must be string', 'OK', { duration: 3000, });
    }
    else{
      this.serverService.updateServer(this.id, name).subscribe(() => {
        this.snackBar.open('Entry updated successfully', 'OK', { duration: 3000, });
        this.router.navigate(['/read']);
      });
    }
  }

}
