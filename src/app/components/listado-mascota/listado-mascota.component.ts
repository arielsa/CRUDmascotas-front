import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {  OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Mascota } from 'src/app/interfaces/mascota';



const listMascotas: Mascota[] = [
  { nombre: 'ringo', edad: 5, raza: 'boxer',color:'bayo',peso:10},
  
  
  
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
