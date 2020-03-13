import React, { Component } from 'react';
class Projet1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            compt: 0 ,
            on : false
    
        }
    }
    settime = (num) => {
        var h = Math.floor(num / 3600)
        var m = Math.floor((num % 3600) / 60)
        var s = ((num % 3600) % 60)
        return (<div className="h1">
            <span>{h.toString().padStart(2,0)} :</span>
            <span >{m.toString().padStart(2,0)} :</span>
            <span >{s.toString().padStart(2,0)} </span>
        </div>)
    }
    start=()=> {
        this.setState({
            on: true
        })
    this.interval=     setInterval(() => {
            this.setState({
                compt : this.state.compt+1
            })
        }, 1000);
       
    }
    reset=()=> {
        clearInterval(this.interval)
        this.setState({
            compt: 0
        })
    }
 pause =()=>  {
     clearInterval(this.interval)
     this.setState({
         on:false
     })
 }
    render() {
        return (<div className="affiche">
           
            <span>{this.settime(this.state.compt)}</span> 
            <span className="temp">Hour Minute Second</span>
            
             <button className="b1" onClick={!this.state.on?this.start:this.pause}>Start</button>
             <button className="b2" onClick={this.reset}>Reset</button>
             </div>
        );
    }
}
export default Projet1;
