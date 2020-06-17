import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Template from "../Components/template";

const Staffs = () => {
  const [staffs, setStaffs] = useState([]);

  useEffect(() => {
    fetch(`http://hp-api.herokuapp.com/api/characters/staff`)
      .then((res) => res.json())
      .then((staffs) => setStaffs(staffs));
  }, []);

  return (
    <Template>
      <div className="col-12">
        <h1 className="col-12 text-center">Hogwarts Staff</h1>
        <div className="d-flex justify-content-between">
          <ul className="list-group list-group-flush">
            {staffs.map((staff) => (
              <li
                key={staff.name}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {staff.name}
                <Link
                  className="btn btn-link"
                  exact to={`/Staff/StaffDetails/${staff.name}`}
                >
                  Details
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Template>
  );
};
export default Staffs;
