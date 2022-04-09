export interface INoticia {
    noticia_int_id: number;
    noticia_txt_titulo: string;
    noticia_txt_texto: string;
    noticia_txt_foto: string;
    created_at: string|Date;
    updated_at: string|Date;
    deleted_at: string|Date;
    noticia_bool_ativo: boolean;
    noticia_tipos: [
        {
            noticiaTipo_int_id: number;
            noticiaTipo_txt_chave: string;
            noticiaTipo_txt_valor: string
            noticiaTipo_bool_ativo: boolean;
            deleted_at: string|Date;
            created_at: string|Date;
            updated_at: string|Date;

        }

    ]
}

