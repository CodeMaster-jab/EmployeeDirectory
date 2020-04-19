import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    search: "",
    sortby: "lastname",
    results: []
  };

  // When this component mounts, search the Random User API for 20 Users
  componentDidMount() {
    this.searchUsers("");
  }

  searchUsers = query => {
    API.search(query)
      .then(res => this.setState({ results: res.data.results }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.id;
    if (name === "both"){
      this.setState({search: ""});
    }
    if (name === "male"){
      this.setState({search: "&gender=male"});
    }
    if (name === "female"){
      this.setState({search: "&gender=female"});
    }
    if (name === "firstname"){
      this.setState({sortby: "firstname"});
    }
    if (name === "lastname"){
      this.setState({sortby: "lastname"});
    }
  };

  // When the form is submitted, search the Random User API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchUsers(this.state.search);
  };

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          sortby={this.state.sortby}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultList sortby={this.state.sortby} results={this.state.results} />
      </div>
    );
  }
}

export default SearchResultContainer;
