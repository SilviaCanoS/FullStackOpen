import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

//aqui comienza la primera parte
/*const Hello = ({name, age}) => {

  const bornYear = () => {
    const yearNow = new Date().getFullYear();
    return yearNow - age;
  };

  return(
    <div>
      <p>Greetings, {name}. You were probably born in {bornYear()}.</p>
    </div>
  )
}; 

const App = () => {
  const date = new Date(), a = 10, b = 20, age = 26;

  return(
    <div>
      <p>Hello World! It is {date.toString()}</p>
      <p>{a} plus {b} is {a + b}</p>
      <Hello name="Silvia" age={age}/>
    </div>
  )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App counter={counter}/>)*/
//aqui termina la primera parte


//aqui comienza la segunda parte ReRenderizado
/*let counter = 1;

const App = (props) => {
  return(
    <div>
      {props.counter}
    </div>
  )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App counter={counter}/>);

setInterval(() => {
  root.render(<App counter={counter}/>);
  counter += 1
}, 1000);*/
//aqui termina la segunda parte


//aqui comienza la tercera parte, uso de estados
/*const App = () => {
  const [ counter, setCounter ] = useState(0);
  setTimeout(
    () => setCounter(counter + 1),
    1000
  )
  return (
    <div>{counter}</div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);*/
//aqui termina la tercera parte

//aqui comienza la cuarta parte, boton
/*const App = () => {
  const [ counter, setCounter ] = useState(0);
  const sumar = () => setCounter(counter + 1);
  const reset = () => setCounter(0);
  const restar = () => setCounter(counter - 1);
  return (
    <div>
      <Display counter={counter}/>
      <Boton action={sumar} nombre="Plus"/>
      <Boton action={reset} nombre="Reset"/>
      <Boton action={restar} nombre="Minus"/>
    </div>
  )
}

const Display = ({counter}) => {
  return(
    <div>{counter}</div>
  )
};

const Boton = ({action, nombre}) => {
  return(
    <div>
      <button onClick={action}>{nombre}</button>
    </div>
  )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);*/
//aqui termina la cuarta parte


//aqui comienza la quinta parte, estado complejo
/*const History = ({all}) => { //renderizado condicional
  if(all.length === 0){
    return(
      <div>
        <p>The app is used by pressing the buttons</p>
      </div>
    )
  }

  return(
    <div>
      <p>Button press history: {all.join(" ")}</p>
    </div>
  )
};

const Button = ({action, name}) => {
  return(
    <>
      <button onClick={action}>{name}</button>
    </>
  )
};

const App = () => {
  const [ left, setLeft ] = useState(0);
  const [ right, setRight ] = useState(0);
  const [ all, setAll] = useState([]);

  const sumLeft = () => {
    setAll(all.concat("L"));
    setLeft(left + 1);
  };
  const sumRight = () => {
    setAll(all.concat("R"));
    setRight(right + 1)
  };

  return (
    <div>
      {left}
      <Button action={sumLeft} name="Left"/>
      <Button action={sumRight} name="Right"/>
      {right}
      <History all={all} />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);*/
//aqui termina la quinta parte


//aqui comienza la sexta parte, eventos
const Button = ({action, name}) => {
  return(
    <div>
      <button onClick={action}>{name}</button>
    </div>
  )
};

const Display = ({value}) => {
  return(
    <div>
      <p>{value}</p>
    </div>
  )
};

const App = () => {
  const [ value, setValue ] = useState(10);

  const set = (num) => {
    return () => {setValue(num)};
  };
  const hello = () => { //funcion que devuelve una funcion
    return () => {console.log("Hello World")};
  };

  return (
    <div>
      <Display value={value}/>
      <Button action={set(0)} name="Set to Zero"/>
      <Button action={set(10)} name="Set to Ten"/>
      <Button action={hello()} name="Hello"/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
//aqui termina la sexta parte