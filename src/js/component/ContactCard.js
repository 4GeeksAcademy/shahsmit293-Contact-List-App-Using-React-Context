import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import propTypes from "prop-types";
import { Context } from "../store/appContext";

export const ContactCard = ({ ...props }) => {
  const { store, actions } = useContext(Context);
  return (
    <li className="list-group-item">
      <div className="row w-100">
        <div className="col-12 col-sm-6 col-md-3 px-0">
          <img
            src={
              "https://raw.githubusercontent.com/breatheco-de/exercise-contact-list-context/master/src/img/m101.jpg"
            }
            alt="Mike Anamendolla"
            className="rounded-circle mx-auto d-block img-fluid"
          />
        </div>
        <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
          <div className=" float-right">
            <button className="btn" onClick={props.onEdit}>
              <i className="fas fa-pencil-alt mr-3" />
            </button>
            <button
              className="btn"
              onClick={() => {
                props.onDelete();
                actions.updateIdForModal(props.contact.id);
              }}
            >
              <i className="fas fa-trash-alt" />
            </button>
          </div>
          <label className="name lead">{props.fullname}</label>
          <br />
          <i className="fas fa-map-marker-alt text-muted mr-3" />
          <span className="text-muted">{props.address}</span>
          <br />
          <span
            className="fa fa-phone fa-fw text-muted mr-3"
            data-toggle="tooltip"
            title=""
            data-original-title="(870) 288-4149"
          />
          <span className="text-muted small">{props.phonenumber}</span>
          <br />
          <span
            className="fa fa-envelope fa-fw text-muted mr-3"
            data-toggle="tooltip"
            data-original-title=""
            title=""
          />
          <span className="text-muted small text-truncate">
            {props.emailid}
          </span>
        </div>
      </div>
    </li>
  );
};

/**
 * Define the data-types for
 * your component's properties
 **/
ContactCard.propTypes = {
  history: propTypes.object,
  onDelete: propTypes.func,
  onEdit: propTypes.func,
  fullname: propTypes.string,
  address: propTypes.string,
  phonenumber: propTypes.string,
  emailid: propTypes.string,
  contact: propTypes.object,
};

/**
 * Define the default values for
 * your component's properties
 **/
ContactCard.defaultProps = {
  onDelete: null,
  onEdit: null,
  contact: null,
};
