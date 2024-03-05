import React, { useState } from 'react';
import "./Result.css"

const Result = ({ result }) => {


  return (
    <div id="result-container">
      {result.map(item => {
        return (
          <div className='key-value'>
            <div className="key">{item[0]} sec:  </div>
            <div className="value"><b>{item[1]}</b></div>
          </div>
        )
      })}

    </div>
  );
};

export default Result;