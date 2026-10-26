import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  selector: 'app-condicional-i',
  styleUrl: './condicional-i.scss',
  templateUrl: './condicional-i.html',
})
export class CondicionalI {}
