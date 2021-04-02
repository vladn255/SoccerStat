import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const FooterInfo = ({ activeSeason }) => {
  return (
    <>
      <span className="badge badge-info ">Active season: {activeSeason}</span>
    </>
  );
};

FooterInfo.propTypes = {
  activeSeason: PropTypes.string.isRequired,
};

const mapStateToProps = ({ activeSeason }) => ({
  activeSeason,
});

export default connect(mapStateToProps)(FooterInfo);
