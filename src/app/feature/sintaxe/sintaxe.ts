import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  imports: [ RouterLink, RouterLinkActive, RouterOutlet],
  selector: 'app-sintaxe',
  styleUrl: './sintaxe.scss',
  templateUrl: './sintaxe.html',
})
export class Sintaxe {}
