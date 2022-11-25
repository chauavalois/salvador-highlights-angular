import { Component, OnInit } from '@angular/core';

import { INoticia } from 'src/app/models/noticias';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-editar-noticia',
  templateUrl: './editar-noticia.component.html',
  styleUrls: ['./editar-noticia.component.scss']
})
export class EditarNoticiaComponent implements OnInit {

  constructor(private NoticiasService: NoticiasService) { }

  public editarNoticia: INoticia = {
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
salvar(noticia:INoticia) {
  this.NoticiasService.salvarNoticia(noticia).subscribe({
    next: () =>{
      alert('Noticia salva com sucesso');
      // this.getNoticias();
      // this.criarNoticia = new INoticia();
    },
    error: () => {
      alert('Erro ao tentar salvar')
    }
  })
}

  ngOnInit(): void {
  }

}
