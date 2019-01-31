import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

import { ServerItemService } from '../../server-item.service';
import { ServerItem } from '../../serverItem.model';

@Component({
  selector: 'app-edit',
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
    this.serverService.updateServer(this.id, name).subscribe(() => {
      this.snackBar.open('Entry updated successfully', 'OK', { duration: 3000, });
    });
  }

}
