import React from "react";
import { useParams } from "react-router-dom";
import Template from "../Components/template";

const StaffDetails = () => {
  const { staffName } = useParams();

  const [staff, setStaff] = React.useState({});

  React.useEffect(() => {
    fetch(`http://hp-api.herokuapp.com/api/characters/staff/${staffName}`)
      .then((res) => res.json())
      .then((staff) => setStaff(staff));
  }, [staffName]);

  console.log ()
  return (
    <Template>
      <div className="col-12">
        <div className="d-flex justify-content-around">
          <img src={staff.image} alt="Character" />
          <div className="d-flex flex-column align-items-center justify-content-center">
            <h1>{staff.name}</h1>
            <h4>Species: {staff.species}</h4>
            <h4>Gender: {staff.gender}</h4>
          </div>
        </div>
      </div>
    </Template>
  );
};

export default StaffDetails; 