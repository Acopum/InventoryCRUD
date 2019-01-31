import { Component, OnInit } from '@angular/core';
import { ServerItemService } from '../../server-item.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup;

  constructor(private serverService: ServerItemService, private fb: FormBuilder, private router: Router) {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
    });
  }

  createServer(name) {
    this.serverService.createServer(name).subscribe(() => {
      this.router.navigate(['/read']);
    });
  }

  ngOnInit() {
  }

}
