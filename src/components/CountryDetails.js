import React from 'react';

const API_KEY = "a254002eef12f6a71efd0efdaae300fd"
export default class CountryDetails extends React.Component{

    constructor(props){
        super(props);
        if(this.props.location.state){
            this.state = {
                countryList: this.props.location.state.countryList
            }
        } else {
            this.state = {
                countryList: []
            }
        }
    }

    getCapitalWeatherDetails = (capitalName) => {
        fetch("http://api.weatherstack.com/current?access_key="+ API_KEY +"&query=" + capitalName).then(response => response.json())
        .then(resultJSON => {
            console.log(resultJSON)
            this.props.history.push({
                pathname:"/capital-weather/",
                state:{
                    capitalWeatherDetails: resultJSON
                }
            })
        })
    }

    render(){
        return(
            <section>
                <div className="container">
                    <div className="row mt-5">
                     {
                        this.state.countryList.length> 0 ?
                            this.state.countryList.map((item, index) => {
                                return (
                                    <div className="col-sm-12">
                                        <h4>Country Details for {item.name}</h4>
                                        <hr className="my-3" />
                                        <ul className="list-group">
                                            <li className="list-group-item">
                                                <strong>Capital</strong> : {item.capital}
                                            </li>
                                            <li className="list-group-item">
                                                <strong>Population</strong> : {item.population}
                                            </li>
                                            <li className="list-group-item">
                                                <strong>Latlng</strong> : { "("+item.latlng[0] + ", " + item.latlng[1] + ")"} 
                                            </li>
                                            <li className="list-group-item">
                                                <strong>flag </strong> : 
                                                <img className="" height={50} width={50} alt={item.name} src={item.flag} />
                                            </li>
                                        </ul>
                                        <div className="mt-4">
                                            <button className="btn btn-sm btn-info" onClick={this.getCapitalWeatherDetails(item.capital)}>
                                                Capital Weather
                                            </button>
                                        </div>
                                    </div>
                                )
                            })
                        : 
                            <div className="alert alert-primary" role="alert">
                                No Country details available
                            </div>
                        }
                    </div>
                </div>
            </section>
        )
    }

}