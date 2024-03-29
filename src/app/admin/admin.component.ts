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

  public listaNoticias: INoticia[] = [];
  //preciso saber como usar a variável noticiaAEditar no component.ts do editar_noticia, pra usar ela pra preencher o formulário  
  //de edição e a medida que o usuário for editando, ela vai armazenando e quando o usuário clicar em salvar edições, acionará 
  //um método em seu TS que acionará o service que acionará o http client para salvar as alterações
  public noticiaAEditar: INoticia = {
    noticia_int_id: 0,
    noticia_txt_titulo: "",
    noticia_txt_texto: "",
    noticia_txt_foto: "",
    created_at: "",
    updated_at: "",
    deleted_at: "",
    noticia_bool_ativo: false,
    noticia_tipos: [
        {
            noticiaTipo_int_id: 0,
            noticiaTipo_txt_chave: "",
            noticiaTipo_txt_valor: "",
            noticiaTipo_bool_ativo: false,
            deleted_at: "",
            created_at: "",
            updated_at: "",

        }

    ]
};


  ngOnInit(): void {
    this.getNoticias();
  }

  getNoticias() {
   this.noticiasService.getAllNoticias().subscribe(
    noticias => this.listaNoticias = noticias
    );
  }

  excluirNoticia(noticiaId: number) {
    if (confirm('Tem certeza que deseja excluir a notícia?')) {
      this.noticiasService.excluir(noticiaId).subscribe({
        next: () => {
          alert('Excluído com sucesso');
          this.getNoticias();
        },
        error: () => {
          alert('Erro ao tentar excluir');
        }
      });
    }
  }
//ainda temos que colocar o método abaixo no botão editar, para quando o usuário clicar no botão, o método captura as informações
// da noticia em questão e transfere esses dados para a variável noticiaAEditar. Ao mesmo tempo em que o método é acionado, o usuário 
// é direcionado para a página de edição e lá teremos a variável noticiaAEditar preenchendo o formulário através do two way data binding

  capturaNoticia(noticia: INoticia){
    this.noticiaAEditar.noticia_int_id=noticia.noticia_int_id;
    this.noticiaAEditar.noticia_txt_titulo=noticia.noticia_txt_titulo;
    this.noticiaAEditar.noticia_txt_texto=noticia.noticia_txt_texto;
    this.noticiaAEditar.noticia_txt_foto=noticia.noticia_txt_foto;
    this.noticiaAEditar.created_at=noticia.created_at;
    this.noticiaAEditar.updated_at=noticia.updated_at;
    this.noticiaAEditar.deleted_at=noticia.deleted_at;
    this.noticiaAEditar.noticia_bool_ativo=noticia.noticia_bool_ativo;
    this.noticiaAEditar.noticia_tipos=noticia.noticia_tipos;
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

//  //limpar Formulário
//  cleanForm(form: NgForm) {
//   this.getNoticias();
//   form.resetForm();
//   noticia = {} as INoticia;
//  }
// 
}