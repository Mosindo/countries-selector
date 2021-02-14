import React, { Children } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "./components/Button";
import Card from "./components/Card";
import Search from "./components/Search";

class App extends React.Component{
  constructor() {
    super();
    this.state = {  
    name : "",
    capital : "",
    flag : "",
    population: "",
    region: "",
    searchValue:"",
    };
    this.getCountry = this.getCountry.bind(this);
    this.searchInput = this.searchInput.bind(this);
    this.searchButton = this.searchButton.bind(this);
  }

  componentDidMount() {
    this.getCountry("france");
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
  searchInput(e){
    this.setState({
      searchValue: e.target.value
      
    })
    console.log({searchValue: e.target.value})
  }

  searchButton(){
    this.getCountry(this.state.searchValue)
  }

  render(){
    return (
    <div className="row justify-content-center">
      <h1 className="m-4">Countries selectors</h1>
      <div className="col-12 pays m-2 " >
        <Search onChange={this.searchInput} onClick={this.searchButton}></Search>
        {/*<Button  onClick={()=>this.getCountry("france")}>France </Button>
        <Button onClick={()=>this.getCountry("brazil")}>Brazil</Button>
        <Button onClick={()=>this.getCountry("Croatia")}>Croatia</Button>*/}
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
