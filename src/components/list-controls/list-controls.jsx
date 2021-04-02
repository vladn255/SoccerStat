import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { ActionCreator } from "../../store/action.js";
import { ListTypes } from "../../const.js";

const ListControls = ({ listType, searchLeague, searchTeam, setSeason }) => {
  const [searchInput, setSearchValue] = useState(``);
  const [yearInput, setYearValue] = useState(``);

  const handleSearchInput = (evt) => {
    const { value } = evt.target;
    setSearchValue(value);
  };

  const handleSearchClick = () => {
    listType === ListTypes.LEAGUE
      ? searchLeague(searchInput)
      : searchTeam(searchInput);
  };

  const handleYearInput = (evt) => {
    const { value } = evt.target;
    setYearValue(value);
  };

  const handleYearClick = () => {
    setSeason(yearInput);
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder={`${listType} name`}
        name
        aria-label={`${listType} name`}
        aria-describedby="basic-addon2"
        onChange={handleSearchInput}
      />
      <div className="input-group-append">
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={handleSearchClick}
        >
          Search
        </button>
      </div>

      <input
        type="text"
        className="form-control"
        placeholder="Choose year"
        aria-label="year chosen"
        aria-describedby="basic-addon2"
        onChange={handleYearInput}
      />
      <div className="input-group-append">
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={handleYearClick}
        >
          Set season
        </button>
      </div>
    </div>
  );
};

ListControls.propTypes = {
  listType: PropTypes.string.isRequired,
  searchLeague: PropTypes.func.isRequired,
  searchTeam: PropTypes.func.isRequired,
  setSeason: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  searchLeague(league) {
    dispatch(ActionCreator.setActiveLeague(league));
  },

  searchTeam(team) {
    dispatch(ActionCreator.setActiveTeam(team));
  },

  setSeason(year) {
    dispatch(ActionCreator.setActiveSeason(year));
  },
});

export default connect(null, mapDispatchToProps)(ListControls);
