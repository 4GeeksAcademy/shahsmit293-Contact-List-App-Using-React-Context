import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Update = () => {
  let { contid } = useParams();
  const { store, actions } = useContext(Context);
  const [oldvalue, setoldvalue] = useState({
    full_name: "",
    email: "",
    phone: "",
    address: "",
  });
  const navigate = useNavigate();

  const updatedata = (e) => {
    e.preventDefault();
    fetch("https://playground.4geeks.com/apis/fake/contact/" + contid, {
      method: "PUT",
      body: JSON.stringify({
        ...oldvalue,
        agenda_slug: "smit1",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        console.log(resp.ok);
        console.log(resp.status);
        return resp.json();
      })
      .then((data) => {
        console.log(data);
        actions.loadSomeData();
        navigate("/contacts");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetch(`https://playground.4geeks.com/apis/fake/contact/` + contid)
      .then((resp) => {
        console.log(resp.ok);
        console.log(resp.status);
        return resp.json();
      })
      .then((body) => {
        setoldvalue({
          ...oldvalue,
          full_name: body.full_name,
          email: body.email,
          phone: body.phone,
          address: body.address,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <div>
        <form onSubmit={updatedata}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
              value={oldvalue.full_name}
              onChange={(e) =>
                setoldvalue((oldvalue) => ({
                  ...oldvalue,
                  full_name: e.target.value,
                }))
              }
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={oldvalue.email}
              onChange={(e) =>
                setoldvalue((oldvalue) => ({
                  ...oldvalue,
                  email: e.target.value,
                }))
              }
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="phone"
              className="form-control"
              placeholder="Enter phone"
              value={oldvalue.phone}
              onChange={(e) =>
                setoldvalue((oldvalue) => ({
                  ...oldvalue,
                  phone: e.target.value,
                }))
              }
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter address"
              value={oldvalue.address}
              onChange={(e) =>
                setoldvalue((oldvalue) => ({
                  ...oldvalue,
                  address: e.target.value,
                }))
              }
            />
          </div>
          <button type="submit" className="btn btn-primary form-control">
            save
          </button>
          <Link className="mt-3 w-100 text-center" to="/">
            or get back to contacts
          </Link>
        </form>
      </div>
    </div>
  );
};
