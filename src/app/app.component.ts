import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UsersService} from './services/users.service';

export interface persons{
    id:string;
    name: string;
    surname:string;
    city:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'busquedas_material';
  users:persons[];
  applyFilter=false;
  totalRows:number;
  filteredRows:number;

  constructor(private _user:UsersService){}
  displayedColumns: string[] = ['id', 'name', 'surname', 'city'];
  dataSource ;
  ngOnInit(){
    this._user.getusers().subscribe((data:persons[])=>{
      this.users=data;
      this.dataSource = new MatTableDataSource(this.users);
    });
  }

  filtrar(palabra: string) {
    const filtro = palabra.trim().toLowerCase()
    this.dataSource.filter = filtro.trim().toLowerCase();
    //To know if the filter is applied
    this.applyFilter=(palabra.length>0)?true:false;
    this.filteredRows=this.dataSource.filteredData.length;
    this.totalRows=this.dataSource.data.length;
  }

}
