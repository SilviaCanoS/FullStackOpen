import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = (props) => {
  return(
    <div>
      <h1>{props.title}</h1>
    </div>
  )
};

const Part = (props) => {
  return(
    <div>
      <p>{props.part}: {props.exercises}</p>
    </div>
  )
};

const Content = (props) => {
  return(
    <div>
      <Part part={props.p1} exercises={props.e1}/>
      <Part part={props.p2} exercises={props.e2}/>
      <Part part={props.p3} exercises={props.e3}/>
    </div>
  )
};

const Total = (props) => {
  return(
    <div>
      <p>Number of exercises: {props.total}</p>
    </div>
  )
};

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return(
    <div>
      <Header title={course}/>
      <Content 
        p1={part1.name} e1={part1.exercises} 
        p2={part2.name} e2={part2.exercises} 
        p3={part3.name} e3={part3.exercises}/>
      <Total total={part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)