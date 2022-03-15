export interface Noticias {
    noticia_int_id: number;
            noticia_txt_titulo: string;
            noticia_txt_texto: string;
            noticia_txt_foto: string;
            created_at: string;
            updated_at: string;
            deleted_at: null;
            noticia_bool_ativo: number;
            noticia_tipos: [
                {
                    noticiaTipo_int_id: number;
                    noticiaTipo_txt_chave: string;
                    noticiaTipo_txt_valor: string
                    noticiaTipo_bool_ativo: number;
                    deleted_at: null;
                    created_at: null;
                    updated_at: null;
                    
                }
                
            ]
        }

