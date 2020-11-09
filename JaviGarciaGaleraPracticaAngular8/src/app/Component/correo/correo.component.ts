import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.component.html',
  styleUrls: ['./correo.component.scss']
})
export class CorreoComponent implements OnInit {
  
  correo: any;

  constructor() { 
   this.correo = {
     titulo: "Titulo del email",
     cuerpo: 'cuerpo del Email, cuerpo del Email, cuerpo del Email, cuerpo del Email, cuerpo del Email, cuerpo del Email, cuerpo del Email, cuerpo del Email, cuerpo del Email',
     emisor : 'correoEmisor@gmail.inv',
     destinatario: 'correoReceptor@gmail.inv'
   }
  }

  ngOnInit(){
  }

}
