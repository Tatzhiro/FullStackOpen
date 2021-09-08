import React, { useState } from 'react'

const LineAnecdote = ({ anecdote }) => {
    return (
        <p>{anecdote}</p>
    )
}

const LineVotes = ({ vote }) => {
    return (
        <p>has {vote} votes</p>
    )
}

const DayAnecdote = ({ anecdote, vote }) => {
    return (
        <div>
            <h1>Anecdote of the day</h1>
            <LineAnecdote anecdote={anecdote} />
            <LineVotes vote={vote} />
        </div>
    )
}

const maxIndex = (a) => {
    let index = 0
    let value = -Infinity
    for (let i = 0, l = a.length; i < l; i++) {
        if (value < a[i]) {
            value = a[i]
            index = i
        }
    }
    return index
}


const MostVotes = ({ anecdotes, votes }) => {
    const max_index = maxIndex(votes)
    return (
        <div>
            <h1>Anecdote with most votes</h1>
            <LineAnecdote anecdote={anecdotes[max_index]} />
            <LineVotes vote={votes[max_index]} />
        </div>
    )
}

export const Button = (props) => {
    return (
        <button onClick={props.handleClick}>
            {props.text}
        </button>
    )
}

export const Anecdote = () => {
    const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
    ]

    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0])

    const handleAnecdote = () => {
        const randomAnecdote = () => {
            return (selected + Math.floor(Math.random() * anecdotes.length)) % anecdotes.length
        }
        setSelected(randomAnecdote())
    }

    const handleVotes = () => {
        const copy = [...votes]
        copy[selected] += 1
        setVotes(copy)
    }

    return (
        <div>
            <DayAnecdote anecdote={anecdotes[selected]} vote={votes[selected]} />
            <Button handleClick={handleVotes} text="vote" />
            <Button handleClick={handleAnecdote} text="next anecdote" />
            <MostVotes votes={votes} anecdotes={anecdotes} />
        </div>
    )
}
export default Anecdote