import { Component, OnInit } from '@angular/core';
import { ServerItemService } from '../../server-item.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private serverItemService: ServerItemService) { }

  ngOnInit() {
  }

}
