export default function CardContato({ contato }: any) {
    return (
        <div className="card m-2">
            <div className="card-body pt-0">
                <h5 className="card-title">{contato.nome}</h5>
                <p className="card-text"> {contato.email} </p>
                <p className="card-text"> {contato.fone} </p>
                <a href={`contato/detalhes/${contato.id}`} className="btn btn-primary">Detalhes</a>
            </div>
        </div>
    )
}