import { Component, OnInit } from '@angular/core';
import { INoticia } from 'src/app/models/noticias';

@Component({
  selector: 'app-criar-noticia',
  templateUrl: './criar-noticia.component.html',
  styleUrls: ['./criar-noticia.component.scss']
})
export class CriarNoticiaComponent implements OnInit {

  constructor() { }

  public criarNoticia: INoticia = {
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
  }

}
