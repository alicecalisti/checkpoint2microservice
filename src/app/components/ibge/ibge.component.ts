import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Estado } from '../../interfaces/Estado';
import { IBGEService } from '../../services/ibge.service';

@Component({
  selector: 'app-ibge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ibge.component.html',
  styleUrl: './ibge.component.css'
})
export class IbgeComponent {

  estados: Estado[]=[];
  constructor(private IBGEService: IBGEService){

  };

  listar():void{
    this.IBGEService.listar().subscribe((listEstado)=>(this.estados=listEstado));
  }
  
  ngOnInit():void{
    this.listar();
  }

}
