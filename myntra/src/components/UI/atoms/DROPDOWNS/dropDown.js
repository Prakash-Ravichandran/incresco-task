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

DropDown.defaultProps = {
    dropDownValue: 'Bundle'
}

export default DropDown;