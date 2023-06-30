import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output() btnClick = new EventEmitter();
  submitData(name:string, designation:string, image:string) {

    this.btnClick.emit({name, designation, image})
    //console.log(name, designation, image)
    return false

  }
}
