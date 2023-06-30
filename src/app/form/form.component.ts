import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  arr : any[] =[] 
  submitData(name:string, designation:string, image:string) {

    this.arr.push({name, designation, image})
    //console.log(name, designation, image)
    return false

  }
}
