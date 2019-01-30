import { Component, OnInit } from '@angular/core';
import { ServerItemService } from '../../server-item.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private serverItemService: ServerItemService) { }

  ngOnInit() {
  }

}
