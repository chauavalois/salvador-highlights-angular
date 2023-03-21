export class INoticia {
  public id!: number;
  public title!: string;
  public description!: string;
  public hour!: string;
}

export interface INoticiaTipo {
  noticiaTipo_int_id: number;
  noticiaTipo_txt_chave: string;
  noticiaTipo_txt_valor: string;
  noticiaTipo_bool_ativo: boolean;
  deleted_at: string | Date;
  created_at: string | Date;
  updated_at: string | Date;
}
