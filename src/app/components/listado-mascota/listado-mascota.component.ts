import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {  OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Mascota } from 'src/app/interfaces/mascota';



const listMascotas: Mascota[] = [
  { nombre: 'ringo', edad: 5, raza: 'boxer',color:'bayo',peso:15},
  { nombre: 'pepe', edad: 5, raza: 'golden',color:'dorado',peso:20},
  { nombre: 'carl', edad: 4, raza: 'pitbul',color:'ambar',peso:30},
  { nombre: 'boby', edad: 3, raza: 'boxer',color:'blanco',peso:9},
  { nombre: 'rolfi', edad: 10, raza: 'caniche',color:'blanco',peso:6},
  { nombre: 'ema', edad: 8, raza: 'yabran',color:'blanco',peso:11},
  { nombre: 'tomy', edad: 5, raza: 'bulterrier',color:'marron',peso:18},
  { nombre: 'terry', edad: 9, raza: 'boxer',color:'bayo',peso:10},
  { nombre: 'gibson', edad: 13, raza: 'boxer',color:'bayo',peso:14},
  { nombre: 'rayo', edad: 6, raza: 'ovejero',color:'negro',peso:8},
  { nombre: 'preguntale', edad: 5, raza: 'boxer',color:'bayo',peso:20},
  
  
  
];

@Component({
  selector: 'app-listado-mascota',
  templateUrl: './listado-mascota.component.html',
  styleUrls: ['./listado-mascota.component.css']
})

export class ListadoMascotaComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['nombreh', 'edadh', 'razah','colorh','pesoh'];
  dataSource = new MatTableDataSource<Mascota>(listMascotas);
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'items por pagina';
  }

  constructor(){}

  ngOnInit():void {

  }

  
}
