import React from "react";

function ResultList(props) {
  if (props.sortby === "lastname"){
    return (
      <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Profile Pic</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Cell Phone</th>
          </tr>
        </thead><tbody>
            {props.results.sort((a,b) => a.name.last > b.name.last ? 1 : -1).map(result => (
              <tr key={result.id.value}>
                <td>
                  <img alt={`${result.name.first} ${result.name.last}`} className="img-fluid" src={result.picture.large} />
                </td>
                <td>
                  <span>{`${result.name.first} ${result.name.last}`}</span>
                </td>
                <td>
                  <span>{result.email}</span>
                </td>
                <td>
                  <span>{result.cell}</span>
                </td>
              </tr>
            ))}
      </tbody></table></div>
    );
  }
  if (props.sortby === "firstname"){
    return (
      <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Profile Pic</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Cell Phone</th>
          </tr>
        </thead><tbody>
            {props.results.sort((a,b) => a.name.first > b.name.first ? 1 : -1).map(result => (
              <tr key={result.id.value}>
                <td>
                  <img alt={`${result.name.first} ${result.name.last}`} className="img-fluid" src={result.picture.large} />
                </td>
                <td>
                  <span>{`${result.name.first} ${result.name.last}`}</span>
                </td>
                <td>
                  <span>{result.email}</span>
                </td>
                <td>
                  <span>{result.cell}</span>
                </td>
              </tr>
            ))}
      </tbody></table></div>
    );
  }
}

export default ResultList;
