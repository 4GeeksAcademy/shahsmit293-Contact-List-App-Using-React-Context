import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
export const AddContact = () => {
  const navigate = useNavigate();
  let { contactid } = useParams();
  const [bio, setbio] = useState({ agenda_slug: "smit1" });
  const [sentences, setsentences] = useState([]);

  /*add new contcat */
  const addAlldata = () => {
    setsentences([...sentences, bio]);
    fetch("https://playground.4geeks.com/apis/fake/contact/", {
      method: "POST",
      body: JSON.stringify(bio),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        console.log(resp.ok);
        console.log(resp.status);
        console.log(resp.text());
        navigate("/contacts");
        return resp.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <div>
        <h1 className="text-center mt-5">Add a new contact</h1>
        <form>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
              onChange={(e) =>
                setbio((bio) => ({ ...bio, full_name: e.target.value }))
              }
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) =>
                setbio((bio) => ({ ...bio, email: e.target.value }))
              }
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="phone"
              className="form-control"
              placeholder="Enter phone"
              onChange={(e) =>
                setbio((bio) => ({ ...bio, phone: e.target.value }))
              }
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter address"
              onChange={(e) =>
                setbio((bio) => ({ ...bio, address: e.target.value }))
              }
            />
          </div>
          <button
            type="button"
            className="btn btn-primary form-control"
            onClick={addAlldata}
          >
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
