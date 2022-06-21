import { useEffect, useState } from 'react'
import { createGame } from './components/start'
import Game from './components/Game'
import BullsEye from './components/Bullseye'
import Header from './components/Header'

export default function App() {
  const [game, setGame] = useState(0)
  const [score, setScore] = useState(game?.total || 0)
  const [round, setRound] = useState(0)

  useEffect(() => {
    setGame(createGame(round))
    setScore(0)
  }, [round])

  const btns = game ? game.buttons : []
  const perfectScore = btns.reduce(
    (acc, { point }) => (point > 0 ? acc + point : acc),
    0
  )

  return (
    <div>
      <Header maxPoints={perfectScore} score={score} />
      {score >= perfectScore ? (
        <Game updateRound={() => setRound(round + 1)} />
      ) : (
        <div className="m-auto grid w-2/4 grid-cols-4 gap-6">
          {(btns || []).map(({ color, point }, index) => (
            <BullsEye
              score={score}
              isDisabled={score >= perfectScore}
              eyeColor={color}
              key={`BullsEye-${index}`}
              changeScore={() => {
                setScore(score + point)
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
