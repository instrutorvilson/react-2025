import CardProduto from "./carProduto";

function ConsultaProduto(){
    return(
        <div style={{'display':'flex','flexWrap':'wrap'}}>
           <CardProduto
              nome='Milho'
              descricao='de pipoca'
              foto='https://m.media-amazon.com/images/I/71RxcmFY4DL._AC_SX679_.jpg'
              preco='10.50'
           />

           <CardProduto
              nome='Milho'
              descricao='de pipoca'
              foto='https://m.media-amazon.com/images/I/71RxcmFY4DL._AC_SX679_.jpg'
              preco='10.50'
           />

           <CardProduto
              nome='Milho'
              descricao='de pipoca'
              foto='https://m.media-amazon.com/images/I/71RxcmFY4DL._AC_SX679_.jpg'
              preco='10.50'
           />

           <CardProduto
              nome='Milho'
              descricao='de pipoca'
              foto='https://m.media-amazon.com/images/I/71RxcmFY4DL._AC_SX679_.jpg'
              preco='10.50'
           />

        </div>
    )
}

export default ConsultaProduto