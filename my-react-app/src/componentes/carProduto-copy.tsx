function CardProduto(props: any){
    const { nome, descricao, foto, preco } = props
    return(
        <div className="card" style={{'width':'18rem'}}>
            <img src={foto} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{nome}</h5>
                <p className="card-text"> {descricao}</p>
                <strong>{preco}</strong>
            </div>
        </div>
    )
}

export default CardProduto