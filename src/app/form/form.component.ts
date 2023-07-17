import { Component, Output, EventEmitter } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  constructor(private data : DataService){

  }
  submitData(name:string, designation:string, image:string) {

    this.data.addEmp({name, designation, image})
    //console.log(name, designation, image)
    return false

  }
}
