import React from 'react'

class Card extends React.Component {
    
    render() {
        return (
            <div>
                <div className="card" style={{width: "400px"}}>
                <img src={this.props.flag} class="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p className="card-text">Country : {this.props.name}</p>
                        <p className="card-text">Capital : {this.props.capital}</p>
                        <p className="card-text">population : {this.props.population}</p>
                        <p className="card-text">Region : {this.props.region}</p>
                    </div>
                </div>

            </div>
        )
    }
}
export default  Card;