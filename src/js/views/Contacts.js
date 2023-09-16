import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";
import { Context } from "../store/appContext.js";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export const Contacts = () => {
  const [state, setState] = useState({
    showModal: false,
  });
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.loadSomeData();
  }, []);
  const navigate = useNavigate();
  return (
    <div className="container">
      <div>
        <p className="text-right my-3">
          <Link className="btn btn-success" to="/add">
            Add new contact
          </Link>
        </p>
        <div
          id="contacts"
          className="panel-collapse collapse show"
          aria-expanded="true"
        >
          <ul className="list-group pull-down" id="contact-list">
            {store.allcontacts.map((element, index) => {
              return (
                <ContactCard
                  key={element.id}
                  contact={element}
                  onEdit={() => navigate(`/add/${element.id}`)}
                  onDelete={() => setState({ showModal: true })}
                  fullname={element.full_name}
                  address={element.address}
                  phonenumber={element.phone}
                  emailid={element.email}
                />
              );
            })}
          </ul>
        </div>
      </div>
      <Modal
        show={state.showModal}
        onClose={() => setState({ showModal: false })}
      />
    </div>
  );
};
