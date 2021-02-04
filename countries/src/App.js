import React, { Children } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "./components/Button";
import Card from "./components/Card"

class App extends React.Component{
  constructor() {
    super();
    this.state = {  
    name : "",
    capital : "",
    flag : "",
    population: "",
    region: ""
    };
    this.getCountry=this.getCountry.bind(this)
  }

  componentDidMount(){
    fetch('https://restcountries.eu/rest/v2/name/france')
  .then(response => response.json()) // on transforme la donnée reçue en JSON 
  .then(result => {console.log(result[0].capital) }); // on détaille l'action à exécuter sur ce JSON
  }

  getCountry(country){
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(response => response.json())
    .then(countries => {
      this.setState({
        name: countries[0].name,
        capital: countries[0].capital,
        flag: countries[0].flag,
        population: countries[0].population,
        region: countries[0].region,
      })
    })
  }

  render(){
    return (
    <div className="row justify-content-center">
      <h1 className="m-4">Countries selectors</h1>
      <div className="col-12 pays m-2 " >
        <Button  onClick={()=>this.getCountry("france")}>France </Button>
        <Button onClick={()=>this.getCountry("brazil")}>Brazil</Button>
        <Button onClick={()=>this.getCountry("Croatia")}>Croatia</Button>
      </div>

      <Card className="col-12" 
        name={this.state.name}
        capital={this.state.capital}
        flag={this.state.flag}
        population={this.state.population}
        region={this.state.region}/>
        
      
    </div>
  );}
}

export default App;
