export default function CardGrid({ cardCollection, onClick}) {
    return (
        <div className="card-grid">
            {cardCollection.map(card => (
                <div
                    className={'card'}
                    key={card.id}
                    id={card.id}
                    onClick={() => {onClick(card.id)}
                }>
                    <img src={'/images/' + card.img} alt={card.name}/>
                    <br/>
                    <span>
                        {card.name}
                    </span>
                </div>
            ))}
        </div>
    )
}