import { NoticiasService } from './../services/noticias.service';
import { Component, OnInit } from '@angular/core';
import { INoticia } from '../models/noticias';
import { NgForm } from '@angular/forms';
//import { format } from 'path';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

    noticia = {} as INoticia
    noticias!: INoticia[];

  constructor(private noticiasService: NoticiasService) { }

  public listaNoticias: INoticia[] = []

  ngOnInit(): void {
    this.getNoticias();
  }

  //chama o serviço para obter todos os carros

  getNoticias() {
   this.noticiasService.getAllNoticias().subscribe(
    noticias => this.listaNoticias = noticias
    );
  }

  

//Definir se a noticia será criada ou atualizada
  
// saveNoticia(form: NgForm) {
//     if (this.noticia.noticia_int_id !== undefined){
//       this.noticiaService.updateNoticia(this.noticia).subscribe(() =>{this.cleanForm(form);})
//     } else {
//       this.noticiaService.saveNoticia(this.noticia).subscribe(() => {
//         this.cleanForm(form);
//       });
//     }
//   }
// }
//  

//  //Deletar um carro
//  deleteNoticia(noticia: INoticia) {
//   this.noticiasService.deleteNoticia(noticia).subscribe(() => {
//     this.getNoticias();
//   });
//  }

//  //Copia o carro para ser editado
//  editNoticia(noticia: INoticia) {
//   this.noticia = {...noticia };
//  }

//  //limpar Formulário
//  cleanForm(form: NgForm) {
//   this.getNoticias();
//   form.resetForm();
//   noticia = {} as INoticia;
//  }
// 
}