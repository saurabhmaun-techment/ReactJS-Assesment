import React from 'react';

export default class Homepage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            countryText:""
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

    render(){
        return(
            <section>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col">
                            <form>
                                <div class="form-group">
                                    <label for="country">Email address</label>
                                    <input type="text" className="form-control" id="country" placeholder="Enter country" onChange={this.handleCountryInputChange} />
                                </div>
                                <button type="submit" className="btn btn-primary" disabled={!this.state.countryText}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}