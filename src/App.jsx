import { useState } from 'react'
import './App.css'
import { initialCardCollection } from './components/CardCollection.js'
import CardGrid from './components/CardGrid.jsx'
import './styles/card-grid.css'

function App() {
    const [cardCollection, setCardCollection] = useState(initialCardCollection)
    const [score, setScore] = useState(0)
    const [clickedCards, setClickedCards] = useState([])
    let bestScore = 0;

    function shuffleArray(array) {
        for (let i= array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]
        }
        return array
    }

    function onClick(e) {
        const cardId = e.target.key
        if (clickedCards.includes(cardId)) {
            bestScore = score;
            setScore(0);
            setClickedCards([])
        } else {
            setClickedCards(
                [...clickedCards, cardId]
            )
            setScore(score+1)
        }
    }


  return (
    <>
      <div className="header">
        <div className="info">
          <h1>Chiikawa Memory Game</h1>
          <br/>
          <p>Score 12 points by clicking on different cards! Try your best to not click on the same cards</p>
        </div>
          <div className="score">
              <span>Your current score: {score}</span>
              <span>Your best score: {bestScore}</span>
          </div>
      </div>
      <CardGrid cardCollection={cardCollection}/>
    </>
  )
}

export default App
