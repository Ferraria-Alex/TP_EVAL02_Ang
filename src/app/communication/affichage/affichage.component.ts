import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-affichage',
  imports: [],
  templateUrl: './affichage.component.html',
  styleUrl: './affichage.component.css'
})
export class AffichageComponent {
  @Input() text!:string;
  @Input() age!: number;
}
