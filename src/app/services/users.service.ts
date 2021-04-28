import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
users=[
  {'id':1,'name':'David','surname':'Rodriguez','city':'Palencia'},
  {'id':2,'name':'Pepe','surname':'Lopez','city':'Madrid'},
  {'id':3,'name':'Juan','surname':'Losa','city':'Palencia'},
  {'id':4,'name':'Maria','surname':'Hernandez','city':'Barcelona'},
  {'id':5,'name':'Elena','surname':'Garcia','city':'Madrid'},
  {'id':6,'name':'Sara','surname':'Rodriguez','city':'Palencia'},
  {'id':7,'name':'Raul','surname':'Perez','city':'Palencia'}
]
  users$=new BehaviorSubject<any>(this.users);

  getusers(): Observable<any>{
    return this.users$.asObservable();
  }

  constructor() { }
}

