import React from "react";

function ResultList(props) {
  const field = (props.sortby === "firstname") ? "first" : "last";
  return (
    <div className="table-responsive">
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Profile Pic</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Cell Phone</th>
          <th scope="col">Address</th>
        </tr>
      </thead><tbody>
          {props.results.sort((a,b) => a.name[field] > b.name[field] ? 1 : -1).map(result => (
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
              <td>
                <p>{`${result.location.street.number} ${result.location.street.name}`}</p>
                <p>{`${result.location.city}, ${result.location.state} `}</p>
                <p>{result.location.postcode}</p>
              </td>
            </tr>
          ))}
    </tbody></table></div>
  );
}

export default ResultList;
