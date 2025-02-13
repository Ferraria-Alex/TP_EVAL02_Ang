import { Component } from '@angular/core';
import { AffichageComponent } from './affichage/affichage.component';
import { FormulaireComponent } from './formulaire/formulaire.component';

@Component({
  selector: 'app-communication',
  imports: [AffichageComponent,FormulaireComponent],
  templateUrl: './communication.component.html',
  styleUrl: './communication.component.css'
})

export class CommunicationComponent {
  text:string='AWERTYYUIOP';
  age:number=45;

  updatedUser(data:any){
    this.text = data.text;
    this.age = data.age;
  }

}
