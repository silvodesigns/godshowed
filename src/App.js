import React , {Component} from 'react';
import { bibleSymbols } from './data/data';
import './App.css';


class Symbols extends Component{
  render(){

    const Symbols = Object.entries(bibleSymbols).map(item => {
      return item
    
    })
    console.log(Symbols);
    return(
      <ul>
        {Symbols.forEach((item) => {
          <li>{item}</li>
        })}
    
      </ul>
    )
  }
}

class App extends Component {
  render(){
    return (
      <div>
        <p>HELLO</p>
        <Symbols />
      </div>

    )
  }
 
}


export default App;
