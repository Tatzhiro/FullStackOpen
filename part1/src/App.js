import React, { useState } from 'react'

export const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

export const StatisticLine = (props) => {
  if (props.text === "positive") {
    return (
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
        %
      </tr>
    )
  }
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}


export const Statistics = (props) => {
  const good_score = props.review[0].score
  const neutral_score = props.review[1].score
  const bad_score = props.review[2].score
  const all_score = props.review[3].score
  if (all_score === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <table>
      <StatisticLine text="good" value={good_score} />
      <StatisticLine text="neutral" value={neutral_score} />
      <StatisticLine text="bad" value={bad_score} />
      <StatisticLine text="all" value={all_score} />
      <StatisticLine text="average" value={(good_score - bad_score) / all_score} />
      <StatisticLine text="positive" value={good_score / all_score * 100} />
    </table>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const review = [
    {
      text: "good",
      score: good
    },
    {
      text: "neutral",
      score: neutral
    },
    {
      text: "bad",
      score: bad
    },
    {
      text: "all",
      score: good + neutral + bad
    }
  ]

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }


  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text='Good' />
      <Button handleClick={handleNeutral} text='Neutral' />
      <Button handleClick={handleBad} text='Bad' />
      <h2>statistics</h2>
      <Statistics review={review} />

    </div>
  )
}

export default App


/*
//part 1b

import React from 'react'

export const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

export const Part = (props) => {
  return (
    <div>
      <p>{props.parts} {props.exercises}</p>
    </div>
  )
}


export const Content = (props) => {
  return (
    <div>
      <Part parts={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part parts={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part parts={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
  )
}

export const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </div>
  )
}



const App = () => {
  console.log('Hello from component')
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },
      {
        name: "State of a component",
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App
*/