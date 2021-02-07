import axios from 'axios'
import React, { Component } from 'react';

class Country extends Component {
    constructor() {
        super()
        this.state = {
            Data: [

            ]

        }
    }
    componentDidMount() {
        axios.get(`https://restcountries.eu/rest/v2/all`)
            .then(respose => {
                this.setState({ Data: respose.data })
                console.log(respose)
            })//promise axios Response 


            .catch(error => {
                console.log(error)
            })

    }




    render() {

        const CountryName = this.state.Data
        const selectCountry = CountryName.map((CountryName => {
            return <select  >{CountryName.name}</select>
        }))
        return (
            <div>
                <option>{selectCountry}</option>
                {/* <select className='select'>
                    <option value="{arry.all}" > {selectCountry}</option>
                    {/* 
                    <option value='{arry.home}'>{arry.home}</option>
                    <option value={arry.cloth}>{arry.cloth}</option>
                    <option value={arry.Electrical}>{arry.Electrical}</option>
                    <option value={arry.Tv}>{arry.Tv}</option>
                </select> * /} */}
            </div >
        );
    }
}

export default Country;





