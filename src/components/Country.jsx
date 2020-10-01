import React from 'react';
import { Link } from 'react-router-dom';

import countries from '../countries.json';

class Country extends React.Component {
  

  render() {
    const country = countries.filter(
      (el) => el.cca3 === this.props.match.params.country
    );

   findBorders = (leters) =>{
     const country = countries.find(el => {  el   })

   }

    return (
      <div className="col-7">
        <h1>{country[0].name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: 30 + '%' }}>Capital</td>
              <td>{country[0].capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {country[0].area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {

                    
                    country[0].borders.map((el, i) => {

                      

                    return(
                    <div>{el}</div>
                    )
                    })
                    

                 

                    }
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default Country;
