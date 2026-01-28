import Card from './Card.jsx'

export default function CardGrid({ cardCollection }) {
    const cardGrid = cardCollection.map(card => Card({card}))
    return <div className='card-grid'>
        {cardGrid}
    </div>
}