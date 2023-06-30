import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rmp',
  templateUrl: './rmp.component.html',
  styleUrls: ['./rmp.component.css']
})
export class RmpComponent {
  @Input() db !: any[]  
}
