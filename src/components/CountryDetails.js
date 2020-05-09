import React from 'react';

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

    render(){
        return(
            <section>
                <div className="container">
                    <div className="row mt-5">
                     {
                        this.state.countryList.length> 0 ?
                            this.state.countryList.map((item, index) => {
                                return (
                                    <div className="col">
                                        <h4>Country Details for {item.name}</h4>
                                        <hr className="my-3" />
                                        <ul class="list-group">
                                            <li class="list-group-item">
                                                <strong>Capital</strong> : {item.capital}
                                            </li>
                                            <li class="list-group-item">
                                                <strong>Population</strong> : {item.population}
                                            </li>
                                            <li class="list-group-item">
                                                <strong>Latlng</strong> : { "("+item.latlng[0] + ", " + item.latlng[1] + ")"} 
                                            </li>
                                            <li class="list-group-item">
                                                <strong>flag </strong> : 
                                                <img className="" height={50} width={50} alt={item.name} src={item.flag} />
                                            </li>
                                        </ul>
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