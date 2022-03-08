import { Component, OnInit } from '@angular/core';
import { Car } from '../models/car';
import { CarrosService } from './carros.service';


@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.scss']
})
export class CarrosComponent implements OnInit {

  carros: Car[] = [];
  casa: string = "house"

  constructor(
    private carrosService: CarrosService
  ) {}
  
  ngOnInit() {
    this.obterCarros();
    
  }

  obterCarros() {
    this.carrosService.getCars().subscribe((car: Car[]) =>{
      this.carros = car;
      console.log(this.carros)
    } )
  }
}