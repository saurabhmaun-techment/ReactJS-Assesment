import React from 'react';

export default class Homepage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            countryText:"",
            error:false
        }
    }

    handleCountryInputChange = (e) => {
        if(e.target && e.target.value){
            this.setState({
                countryText: e.target.value    
            })
        } else {
            this.setState({
                countryText: ""    
            })
        }
    }

    formSubmitHandler = (event) => {
        event.preventDefault()
        this.getCountryDetailsByCountryName()    
    }

    getCountryDetailsByCountryName(){
        this.setState({ error: false })
        fetch("https://restcountries.eu/rest/v2/name/" + this.state.countryText).then(response => response.json())
        .then(resultJSON => {
            if(!resultJSON.status){
                this.props.history.push({
                    pathname:"/country/details/",
                    state:{
                        countryList: resultJSON
                    }
                })
            } else {
                this.setState({ error: true })  
            }
        })
    }

    render(){
        return(
            <section>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col">
                            <form name="countryform" onSubmit={this.formSubmitHandler}>
                                <div className="form-group">
                                    <label htmlFor="country">Enter Country</label>
                                    <input type="text" className="form-control" id="country" placeholder="Enter country" onChange={this.handleCountryInputChange} />
                                    {this.state.error ? 
                                    <small class="form-text text-danger">Invalid country name entered.</small>
                                    : null }
                                </div>
                                <button type="submit" className="btn btn-primary mr-3" disabled={!this.state.countryText}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}