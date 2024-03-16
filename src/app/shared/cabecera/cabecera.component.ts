import { Component, Output,EventEmitter } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
//import { EventEmitter } from 'stream';



@Component({
  selector: 'cabecera',
  standalone: true,
  imports: [MatToolbarModule,MatIconModule,MatButtonModule],
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.css'
})
export class CabeceraComponent {


  @Output() menutoggle = new EventEmitter<void>(); 

  openToggle():void{
    this.menutoggle.emit();
  }
}
