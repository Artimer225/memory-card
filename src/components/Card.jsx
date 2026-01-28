export default function Card({ card }) {
    return (
        <div className={'card'} key={card.id}>
            <img src={'src/images/' + card.img} alt={card.name}/>
            <br/>
            <span>
                {card.name}
            </span>
        </div>
    )
}