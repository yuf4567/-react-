// import logo from './logo.svg';
import './App.css';
import About from './About'


let name='yuf1234'

let day=['q','w','e','d','g']

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <About/>
        <h1>{name}'s first react app</h1>
        <p> {3>2?'y':'n'} </p>
        <p>
          {
            day.map( (x,i)=>{
              return <li key={i}>{x}+' '</li>
            })
          }
        </p>
      </header>
    </div>
  );
}

// console.log(App());

export default App;
