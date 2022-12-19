import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { INoticia, INoticiaTipo } from 'src/app/models/noticias';
import { NoticiasService } from 'src/app/services/noticias.service';
import { AdminComponent } from '../admin.component';

@Component({
  selector: 'app-editar-noticia',
  templateUrl: './editar-noticia.component.html',
  styleUrls: ['./editar-noticia.component.scss'],
})
export class EditarNoticiaComponent implements OnInit {
  public paramId: number | null;
  public tiposNoticia: INoticiaTipo[] = [];
  public bindTipos: number[] = [];

  constructor(
    private NoticiasService: NoticiasService,
    private route: ActivatedRoute,
    public router?: Router
  ) {
    this.paramId = Number.parseFloat(route.snapshot.paramMap.get('id') ?? '');
  }

  ngOnInit(): void {
    this.buscarNoticiaById();
    this.buscarTiposNoticia();
  }

  public editarNoticiaCapturada: INoticia = {
    noticia_int_id: 0,
    noticia_txt_titulo: '',
    noticia_txt_texto: '',
    noticia_txt_foto: '',
    created_at: '',
    updated_at: '',
    deleted_at: '',
    noticia_bool_ativo: false,
  };

  buscarNoticiaById() {
    if (this.paramId) {
      this.NoticiasService.getNoticiaById(this.paramId).subscribe(
        (noticia: INoticia[]) => {
          this.editarNoticiaCapturada = noticia[0];
          this.bindTipos = this.editarNoticiaCapturada.noticia_tipos!.map(t => t.noticiaTipo_int_id);
        }
      );
    }
  }

  buscarTiposNoticia() {
    this.NoticiasService.getAllNoticiasTipos().subscribe(
      (tipos: INoticiaTipo[]) => {
        console.log(tipos);
        this.tiposNoticia = tipos;
      }
    );
  }

  editarNoticia(noticia: INoticia) {
    this.NoticiasService.editar(noticia).subscribe({
      next: () => {
        alert('Edições salvas com sucesso');
      },
      error: () => {
        alert('Erro ao tentar editar');
      },
    });
  }
}
