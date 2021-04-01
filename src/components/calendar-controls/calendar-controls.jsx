import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {fetchLeagueMatchesFiltered} from "../../store/api-actions.js";
import {ActionCreator} from "../../store/action.js";

const CalendarControls = ({activeLeague, setSeason, setDateRange}) => {

const [yearInput, setYearValue] = useState(``);
const [dateRange, setDateRangeValue] = useState({
    fromYear: ``,
    fromMonth: ``,
    fromDay: ``,

    toYear: ``,
    toMonth: ``,
    toDay: ``

});

const handleYearInput = (evt) => {
  evt.preventDefault();
  const {value} = evt.target;
  setYearValue(value);
};

const handleYearClick = () => {
  setSeason(yearInput);
};

const handleDateRangeInput = (evt) => {
  evt.preventDefault();
  const {name, value} = evt.target.closest(`input`);

  setDateRangeValue({
    ...dateRange,
    [name]: value
  })

};

const handleDateRangeClick = (evt) => {
  evt.preventDefault();
  const parsedDateRange = {
    from: `${dateRange.fromYear}-${dateRange.fromMonth}-${dateRange.fromDay}`,
    to: `${dateRange.toYear}-${dateRange.toMonth}-${dateRange.toDay}`,
  };

  setDateRange(activeLeague.id, parsedDateRange);
};

  return (
    <>
    <div className="input-group mb-3">
      <input type="text" className="form-control" placeholder="Choose year" aria-label="year chosen" aria-describedby="basic-addon2" onChange={handleYearInput}/>
      <div className="input-group-append">
        <button type="button" className="btn btn-outline-secondary" onClick={handleYearClick}>Set season</button>
      </div>
    </div>

    <form onChange={handleDateRangeInput}>
        <div className="form-row" >
          <div className="col">
            <span >Date from</span>
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Year" name="fromYear"/>
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Month" name="fromMonth"/>
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Day" name="fromDay"/>
          </div>
        </div>

        <div className="form-row">
          <div className="col">
            <span >Date to</span>
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Year" name="toYear"/>
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Month" name="toMonth"/>
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Day" name="toDay"/>
          </div>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleDateRangeClick}>Search</button>
      </form>
    </>
  )
};

CalendarControls.propTypes = {
  activeLeague: PropTypes.object.isRequired,
  setSeason: PropTypes.func.isRequired,
  setDateRange: PropTypes.func.isRequired
};

const mapStateToProps = ({activeLeague}) => ({
  activeLeague
});

const mapDispatchToProps = (dispatch) => ({
  setSeason(year) {
    dispatch(ActionCreator.setActiveSeason(year));
  },

  setDateRange(league, range) {
    dispatch(fetchLeagueMatchesFiltered(league, range));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CalendarControls);
