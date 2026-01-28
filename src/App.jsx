import { useState } from 'react'
import './App.css'
import { initialCardCollection } from './components/CardCollection.js'
import CardGrid from './components/CardGrid.jsx'
import WinAward from "./components/Card.jsx";
import './styles/card-grid.css'

function App() {
    const [cardCollection, setCardCollection] = useState(initialCardCollection)
    const [score, setScore] = useState(0)
    const [bestScore, setBestScore] = useState(0)
    const [clickedCards, setClickedCards] = useState([])

    function shuffleArray(array) {
        for (let i= array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]
        }
        return array
    }

    if (score >= 11) {
        return <WinAward />
    }

    function onClick(cardId) {
        console.log(cardId)
        console.log(score)
        if (clickedCards.includes(cardId)) {
            setBestScore(score > bestScore ? score : bestScore)
            setScore(0);
            setClickedCards([])
        } else {
            setClickedCards(
                [...clickedCards, cardId]
            )
            setScore(score+1)
        }
        setCardCollection(shuffleArray(cardCollection))
    }


  return (
    <>
      <div className="header">
        <div className="info">
          <h1>Chiikawa Memory Game</h1>
          <p>Score 12 points by clicking on different cards! Try your best to not click on the same cards</p>
        </div>
          <div className="score">
              <span>Your current score: {score}</span>
              <span>Your best score: {bestScore}</span>
          </div>
      </div>
      <CardGrid cardCollection={cardCollection} onClick={onClick}/>
    </>
  )
}

export default App
