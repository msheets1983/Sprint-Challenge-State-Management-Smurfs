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
      <div className="card-container">
        {props.smurfs.map((smurfs) => (
          <SmurfsCard key={smurfs.id} smurfs={smurfs} />
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
