import { Component, OnInit } from '@angular/core';
import {Persona} from '../../Modelos/persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  public name:String
  public lastName:String
  public age:Number
  public sex:String
  persona=new Persona();
  constructor() { 
    this.persona.setName("Ruben")
    this.persona.setLastName("Hernandez Barraza")
    this.persona.setAge(18)
    this.persona.setSex("Masculino")


    this.name=this.persona.getName();
    this.lastName=this.persona.getLastName();
    this.age=this.persona.getAge();
    this.sex=this.persona.getSex();
  }

  ngOnInit(): void {
  }

}
