import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  arr : any[] = [];


  formDisplay = false;
  backbtn = false;
  showEmployee = false;

  hideboth() {
    this.formDisplay =false
    this.showEmployee = false
    this.backbtn =true;
  }

  showHome() {
    this.formDisplay = false;
    this.showEmployee = false;
    this.backbtn =false;
  }

  addEmployee() {
    this.formDisplay = true;
    this.backbtn =true;
    this.showEmployee = false;
  }
 
  showEmplyee() {
    this.showEmployee = true;
    this.formDisplay = false;
    this.backbtn =true;
    }

  

}