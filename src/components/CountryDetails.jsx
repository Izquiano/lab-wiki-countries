import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Country from './Country';

class CountryDetails extends React.Component {

  render() {
    console.log(this.props.country)
    return (
      <Switch>
        <Route exact path="/country/:country" component={Country} />
      </Switch>
    );
  }
}

export default CountryDetails;
