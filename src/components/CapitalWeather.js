import React from 'react';

export default class CapitalWeather extends React.Component{

    constructor(props){
        super(props);
        if(this.props.location.state){
            this.state = {
                weatherDetails: this.props.location.state.capitalWeatherDetails
            }
        } else {
            this.state = {
                weatherDetails: ""
            }
        }
    }

    render(){
        return(
            <section>
                <div className="container">
                    <div className="row mt-5">
                     {
                        this.state.weatherDetails?
                            <div className="col-sm-12">
                                <h4>Weather Details {this.state.weatherDetails.location.name}</h4>
                                <hr className="my-3" />
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <strong>Temperature</strong> : {this.state.weatherDetails.current.temperature}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Weather Icon </strong> : 
                                        {
                                            this.state.weatherDetails.current.weather_icons.map((item, index) => {
                                                return(
                                                    <img className="mx-2" height={50} width={50} alt={item.name} src={item} key={index} />
                                                )
                                            })
                                        }
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Wind Speed</strong> : {this.state.weatherDetails.current.wind_speed}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Precipitation</strong> : {this.state.weatherDetails.current.precip}
                                    </li>
                                </ul>
                            </div>
                        : 
                            <div className="alert alert-primary" role="alert">
                                No details available
                            </div>
                        }
                    </div>
                </div>
            </section>
        )
    }

}