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
          checked={(props.search === "") ? "checked" : false}
        />Both
        <input
          className="separate"
          onChange={props.handleInputChange}
          type="radio"
          name="filter"
          radioGroup="filter"
          id="male"
          checked={(props.search === "&gender=male") ? "checked" : false}
        />Male
        <input
          className="separate"
          onChange={props.handleInputChange}
          type="radio"
          name="filter"
          radioGroup="filter"
          id="female"
          checked={(props.search === "&gender=female") ? "checked" : false}
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
          checked={(props.sortby === "lastname") ? "checked" : false}
        />Last Name
        <input
          className="separate"
          onChange={props.handleInputChange}
          type="radio"
          name="sortby"
          radioGroup="sortby"
          id="firstname"
          checked={(props.sortby === "firstname") ? "checked" : false}
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
