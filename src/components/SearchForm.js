import React from "react";

function SearchForm(props) {
  return (
    <form>
      
      <div className="form-group">
        <label htmlFor="filter" >Filter:</label>
        <input 
          className="separate"
          onChange={props.handleInputChange}
          type="radio"
          name="filter"
          radioGroup="filter"
          id="both"
          checked="checked"
        />Both
        <input
          className="separate"
          onChange={props.handleInputChange}
          type="radio"
          name="filter"
          radioGroup="filter"
          id="male"
        />Male
        <input
          className="separate"
          onChange={props.handleInputChange}
          type="radio"
          name="filter"
          radioGroup="filter"
          id="female"
        />Female
        <br></br>
        <label htmlFor="sortby" >Sort Order:</label>
        <input 
          className="separate"
          onChange={props.handleInputChange}
          type="radio"
          name="sortby"
          radioGroup="sortby"
          id="lastname"
          checked="checked"
        />Last Name
        <input
          className="separate"
          onChange={props.handleInputChange}
          type="radio"
          name="sortby"
          radioGroup="sortby"
          id="firstname"
        />First Name
        <br></br>
        <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3" >
          Search
        </button>
      </div>
      
    </form>
  );
}

export default SearchForm;
