export interface IProduto{
    id:number 
    nome: string;
    descricao: string;
    preco: number;    
    imagem: string;
}

export interface ItemCarrinho{
    produto:IProduto 
    quantidade: number
}