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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return(
    <div>
      <Header title={course}/>
      <Content p1={part1} e1={exercises1} p2={part2} e2={exercises2} p3={part3} e3={exercises3}/>
      <Total total={exercises1 + exercises2 + exercises3}/>
    </div>
  )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)