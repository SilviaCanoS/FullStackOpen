import React from 'react';
import ReactDOM from 'react-dom/client';

const Hello = (props) => {
  return(
    <div>
      <p>Greetings, {props.name}. You are {props.age} years old.</p>
    </div>
  )
}; 

const App = () => {
  const date = new Date(), a = 10, b = 20, year = 1997;

  return(
    <div>
      <p>Hello World! It is {date.toString()}</p>
      <p>{a} plus {b} is {a + b}</p>
      <Hello name="Silvia" age={2023 - year}/>
    </div>
  )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)
