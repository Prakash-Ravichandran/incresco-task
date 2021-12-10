import React from 'react';
import DownArrow from '../../../../images/downarrow.png';


const DropDown = ({dropDownValue}) => {
    return(
        <>
          <div>
              <p>{dropDownValue}</p>
              <span>
                  <img></img>
              </span>
          </div>
        </>
    );
}

export default DropDown;