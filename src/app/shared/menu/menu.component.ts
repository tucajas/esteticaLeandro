import { Component,Output,EventEmitter } from '@angular/core';

import { RouterLink, RouterOutlet } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';





@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterOutlet,MatListModule,MatIconModule,RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  @Output() menuToggle = new EventEmitter<void>();
  
  
  closeMenu():void{
    this.menuToggle.emit();
  }
}
