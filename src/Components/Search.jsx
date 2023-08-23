import React, { useContext, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import gitContext from "../Context/Contextdata";

function Search() {
  let [user, setUser] = useState("karbhari97");
  const { add } = useContext(gitContext);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${user}`)
      .then((res) => {
        add(res.data);
      })
      .catch(() => {
        alert("No Data Found");
      });
  }, []);

  return (
    <div style={{ backgroundColor: "black", padding: "10px" }}>
      <h3 className="h3" style={{ color: "whitesmoke" }}>
        Search For Username
      </h3>
      <div className="container mt-4">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search username"
            aria-label="Search username"
            aria-describedby="basic-addon2"
            onChange={(event) => {
              setUser(event.target.value);
            }}
          />
          <div className="input-group-append">
            <button
              className="btn btn-primary"
              id="basic-addon2"
              onClick={() => {
                axios
                  .get(`https://api.github.com/users/${user}`)
                  .then((res) => {
                    add(res.data);
                  })
                  .catch(() => {
                    alert("No Data Found");
                  });
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
