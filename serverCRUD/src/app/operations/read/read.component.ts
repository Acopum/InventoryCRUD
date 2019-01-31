import { Component, OnInit } from '@angular/core';
import { ServerItemService } from '../../server-item.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { ServerItem } from '../../serverItem.model';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  constructor(private serverItemService: ServerItemService, private snackBar: MatSnackBar, private router: Router) { }

  servers: ServerItem[];
  displayedColumns = [
    'id',
    'name',
    'actions'
  ];


  ngOnInit() {
    this.fetchServers();
  }

  fetchServers(){
    this.serverItemService.getServers().subscribe((data: ServerItem[]) => {
      this.servers = data;
      console.log('Reading DB');
      console.log(this.servers);
    })
  }

  updateServer(id){
    this.router.navigate([`/update/${id}`]);
  }

  deleteServer(id) {
   this.serverItemService.deleteServer(id).subscribe(() => {
     this.snackBar.open('Entry deleted successfully', 'OK', { duration: 3000, });
     this.fetchServers();
   });
}
}
