import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {ActionCreator} from "../../store/action.js";

const CalendarControls = ({setSeason}) => {

  const [yearInput, setYearValue] = useState(``);

  const handleYearInput = (evt) => {
    evt.preventDefault();
    const {value} = evt.target;
    setYearValue(value);
  };

  const handleYearClick = () => {
    setSeason(yearInput);
  };

    return (
      <>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Choose year" aria-label="year chosen" aria-describedby="basic-addon2" onChange={handleYearInput}/>
        <div className="input-group-append">
          <button type="button" className="btn btn-outline-secondary" onClick={handleYearClick}>Set season</button>
        </div>
      </div>

      </>
    )
  };

  CalendarControls.propTypes = {
    setSeason: PropTypes.func.isRequired
  };

  const mapDispatchToProps = (dispatch) => ({
    setSeason(year) {
      dispatch(ActionCreator.setActiveSeason(year));
    }
  });

  export default connect(null, mapDispatchToProps)(CalendarControls);
