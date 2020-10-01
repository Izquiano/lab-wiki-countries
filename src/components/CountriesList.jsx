import React from 'react';
import { Link } from 'react-router-dom';

import countries from '../countries.json';

const CountriesList = () => {
  return (
    <div className="col-5" style={{ maxHeight: 90 + 'vh', overflow: 'scroll' }}>
      <div className="list-group">
        {countries.map((el, i) => {
          return (
            <Link
              key={i}
              className="list-group-item list-group-item-action"
              to={`/country/${el.cca3}`}
            >
              {el.flag} {el.name.common}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default CountriesList;
