import React, { useState } from "react";
import { connect } from "react-redux";
import { postSmurfs } from "../actions";

const SmurfsForm = (props) => {
  const [smurf, setSmurf] = useState({
    name: "",
    age: "",
    height: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    props.postSmurf(smurf);
    document.getElementById("SmurfsForm").reset();
  };

  const inputHandler = (e) => {
    e.preventDefault();
    setSmurf({ ...smurf, [e.target.name]: e.target.value });
  };

  return (
    <div className="form">
      <form id="smurfForm">
        <input
          type="text"
          name="name"
          label="name"
          placeholder="Smurf Name"
          value={props.name}
          onChange={inputHandler}
          className="input"
        />
        <input
          type="text"
          name="age"
          label="age"
          placeholder="Smurf Age"
          value={props.age}
          onChange={inputHandler}
          className="input"
        />
        <input
          type="text"
          name="height"
          label="height"
          placeholder="Smurf Height"
          value={props.height}
          onChange={inputHandler}
          className="input"
        />
        <button onClick={submitHandler} className="btn">
          Add New Smurf
        </button>
      </form>
      <h1>Smurfs Form</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    error: state.error,
  };
};

export default connect(mapStateToProps, { postSmurfs })(SmurfsForm);
