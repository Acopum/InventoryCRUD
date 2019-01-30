import { Component, OnInit } from '@angular/core';
import { ServerItemService } from '../../server-item.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  constructor(private serverItemService: ServerItemService) { }

  ngOnInit() {
  }

}
