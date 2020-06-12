import React, { useEffect } from "react";
import SmurfsCard from "./SmurfsCard";
import { connect } from "react-redux";
import { fetchSmurfs } from "../actions";

const SmurfsList = (props) => {
  console.log(props);
  useEffect(() => {
    props.fetchSmurfs();
  }, []);

  return (
    <div>
      <h2>Smurfs List</h2>
      <div className="card-container">
        {props.smurf.map((smurf) => (
          <SmurfsCard key={smurf.id} smurf={smurf} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchSmurfs })(SmurfsList);
