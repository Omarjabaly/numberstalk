import React, { Component } from 'react';
import 'tachyons';
import NumberFact from './NumberFact';

class App extends Component {

  constructor() {
    super();
    this.state = {
      topic: '',
      number: '',
      fact: '',
    };
  }

  getTrivia = () => {

    let triviaNumber = document.getElementById("triviaInput").value;
    console.log(triviaNumber);
    this.setState({topic: 'trivia'})
    this.setState({number: document.getElementById("triviaInput").value})
    fetch(`https://cors-anywhere.herokuapp.com/http://numbersapi.com/${triviaNumber}/trivia?json`)
      .then(resp => resp.json())
      .then(data => { return (
                      this.setState({fact: data.text }),
                      console.log(this.state.topic, this.state.number, this.state.fact) 
                      );
                    }
            )
  }


  getMath = () => {

    let mathNumber = document.getElementById("mathInput").value;
    console.log(mathNumber);
    this.setState({topic: 'math'})
    this.setState({number: document.getElementById("mathInput").value})
    fetch(`https://cors-anywhere.herokuapp.com/http://numbersapi.com/${mathNumber}/math?json`)
      .then(resp => resp.json())
      .then(data => { return (
                      this.setState({fact: data.text }),
                      console.log(this.state.topic, this.state.number, this.state.fact) 
                      );
                    }
            )
  }

  getDate = () => {

    let dateValue = document.getElementById("dateInput").value;
    console.log(dateValue);
    this.setState({topic: 'date'})
    this.setState({number: document.getElementById("dateInput").value})
    fetch(`https://cors-anywhere.herokuapp.com/http://numbersapi.com/${dateValue}/date?json`)
      .then(resp => resp.json())
      .then(data => { return (
                      this.setState({fact: data.text }),
                      console.log(this.state.topic, this.state.number, this.state.fact) 
                      );
                    }
            )
  }

  getYear = () => {

    let yearNumber = document.getElementById("yearInput").value;
    console.log(yearNumber);
    this.setState({topic: 'year'})
    this.setState({number: document.getElementById("yearInput").value})
    fetch(`https://cors-anywhere.herokuapp.com/http://numbersapi.com/${yearNumber}/year?json`)
      .then(resp => resp.json())
      .then(data => { return (
                      this.setState({fact: data.text }),
                      console.log(this.state.topic, this.state.number, this.state.fact) 
                      );
                    }
            )
  }

  componentDidMount() {
        window.scrollTo(0, 0)
  }


  render () {
    
    return (

      <div> 
        
        <h1 className='tc dark-blue f1 mv4'> Numbers Talk </h1>
        <h1 className='tc dark-blue f3 mv4'> facts behind numbers </h1>
        
        <NumberFact 
          topicToDisplay={this.state.topic} 
          numberToDisplay={this.state.number} 
          factToDisplay={this.state.fact} 
        />

        <h1 className='tc f3 dark-blue'> Trivia
            <input type='number' className='w5 mh4' placeholder='Enter Number' id='triviaInput' />
            <p className="f5 grow br-pill ba bw2 ph3 pv1 mb1 dib dark-blue pointer" onClick={this.getTrivia}>Go</p>
        </h1>
        
        <h1 className='tc f3 dark-blue'> Math 
            <input type='number' className='w5 mh4' placeholder='Enter Number' id='mathInput' />
            <p className="f5 grow br-pill ba bw2 ph3 pv1 mb1 dib dark-blue pointer" onClick={this.getMath}>Go</p>
        </h1>
        
        <h1 className='tc f3 dark-blue'> Date 
            <input className='w5 mh4 gray' type='text' placeholder='Format MM/DD' id='dateInput' />
            <p className="f5 grow br-pill ba bw2 ph3 pv1 mb1 dib dark-blue pointer" onClick={this.getDate}>Go</p>
        </h1>
        
        <h1 className='tc f3 dark-blue'> Year 
            <input className='w5 mh4' type='year' placeholder='Enter Year' id='yearInput' />
            <p className="f5 grow br-pill ba bw2 ph3 pv1 mb1 dib dark-blue pointer" onClick={this.getYear}>Go</p>
        </h1>



      </div>

      );
    
  
  }
  
}
  



export default App;
