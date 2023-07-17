import { Component, Input } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-rmp',
  templateUrl: './rmp.component.html',
  styleUrls: ['./rmp.component.css']
})
export class RmpComponent {
  constructor(private data : DataService){}
  db : any = this.data.getEmp()
}
