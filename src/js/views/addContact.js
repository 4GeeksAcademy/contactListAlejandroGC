import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const AddContact = () => {
	const {store,actions} = useContext(Context);

	return (
		<div className="container mt-5">
			<h1 className="mb-3 text-center">{store.ID !== null ? "Update your contact" : "Add a new contact"}</h1>
			<form>
				<div className="d-flex flex-column align-items-center">
					<div className="row mb-3 col-11 col-md-8">
						<label htmlFor="inputName">Full Name</label>
						<input type="text" className="form-control" id="inputName" placeholder="Full Name" onChange={e => actions.setContactName(e.target.value)}/>
					</div>
					<div className="row mb-3 col-11 col-md-8">
						<label htmlFor="inputEmail">Email</label>
						<input type="text" className="form-control" id="inputEmail" placeholder="Enter Email" onChange={e => actions.setEmail(e.target.value)}/>
					</div>
					<div className="row mb-3 col-11 col-md-8">
						<label htmlFor="inputPhone">Phone</label>
						<input type="text" className="form-control" id="inputPhone" placeholder="Enter phone" onChange={e => actions.setPhone(e.target.value)}/>
					</div>
					<div className="row mb-3 col-11 col-md-8">
						<label htmlFor="inputAddress">Address</label>
						<input type="text" className="form-control" id="inputAddress" placeholder="Enter address" onChange={e => actions.setAddress(e.target.value)}/>
					</div>
					<div className="col-11 col-md-8">
						<Link to="/">
							<button className="btn btn-primary w-100" onClick={store.ID !== null ? actions.updateContact : actions.createContact}>save</button>
						</Link>
						<Link to="/">
							or get back to contacts
						</Link>
					</div>
				</div>
			</form>
		</div>
	);
};