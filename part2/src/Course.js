import React from 'react'

const Header = ({ course }) => {
    return (
        <h2>{course.name}</h2>
    )
}

const Total = ({ parts }) => {
    const sum = parts.map(part => parseInt(part.exercises, 10))
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    return (
        <p><b>Total of {sum.reduce(reducer)} exercises</b></p>
    )
}

const Part = (props) => {
    return (
        <p>
            {props.part.name} {props.part.exercises}
        </p>
    )
}

const Content = ({ course }) => {
    return (
        <div>
            {course.parts.map(part => <Part key={part.id} part={part} />)}
        </div>
    )
}

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course} />
            <Content course={course} />
            <Total parts={course.parts} />
        </div>
    )
}

export default Course