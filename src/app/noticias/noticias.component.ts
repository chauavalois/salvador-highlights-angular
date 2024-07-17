import { NoticiasService } from './../services/noticias.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { INoticia } from '../models/noticias';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  constructor(private noticiasService: NoticiasService) { }

  @ViewChild('closeModal')
  closeModal!: ElementRef;


  public novaNoticia: INoticia = new INoticia();
  public listaNoticias: INoticia[] = [];
  public noticiaAEditar: INoticia = new INoticia();


  ngOnInit(): void {
    this.getNoticias();
  }

  getNoticias() {
   this.noticiasService.getAllNoticias().subscribe(
    noticias => this.listaNoticias = noticias
    );
  }

  savenoticia(noticia: INoticia) {
    if (noticia.title && noticia.description && noticia.hour) {
      if (noticia.id) { //editar tarefa
        this.noticiasService.editar(noticia).subscribe({
          next: () => {
            alert('Edições salvas com sucesso');
            this.getNoticias();
            this.closeModal.nativeElement.click();
          },
          error: () => {
            alert('Erro ao tentar editar');
          }
        });
      } else { //nova tarefa
        this.noticiasService.salvar(noticia).subscribe({
          next: () => {
            alert('Salvo com sucesso');
            this.getNoticias();
            this.novaNoticia = new INoticia();
          },
          error: () => {
            alert('Erro ao tentar salvar');
          }
        });
      }
    } else {
      alert("Prencha todos os campos para salvar uma nova tarefa")
    }
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
    this.noticiaAEditar.id=noticia.id;
    this.noticiaAEditar.title=noticia.title;
    this.noticiaAEditar.description=noticia.description;
    this.noticiaAEditar.hour=noticia.hour
    
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