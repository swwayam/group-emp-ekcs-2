import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  empDB : any = []
  constructor() { }

  addEmp(emp : any){
    this.empDB.push(emp)
  }

  getEmp(){
    return this.empDB
  }
}
