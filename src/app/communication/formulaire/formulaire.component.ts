import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  imports: [FormsModule],
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.css'
})
export class FormulaireComponent {
  text!:string;
  age!:number;

  @Output() updateUser = new EventEmitter<{text: string, age: number}>();

  onUpdateUser(){
    this.updateUser.emit({text: this.text, age: this.age});
  }
}
