import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const AddContact = () => {
	const {store,actions} = useContext(Context);

	const data = useLocation();

	const loadData = (id) => {
		if (store.userContacts.length !== 0) {
			let index = store.userContacts.findIndex((item)=>item.id == id);
			return store.userContacts[index];
		} else {
			return "";
		}
	}

	useEffect(()=>{
		if (data.state){
			let info = loadData(data.state.id);
			actions.setID(data.state.id);
			actions.setContactName(info.name);
			actions.setAddress(info.address);
			actions.setEmail(info.email);
			actions.setPhone(info.phone);
		} 
	},[])


	return (
		<div className="container mt-5">
			<h1 className="mb-3 text-center">{data.state !== null && store.userContacts.length !== 0 ? "Update your contact" : "Add a new contact"}</h1>
			<form>
				<div className="d-flex flex-column align-items-center">
					<div className="row mb-3 col-11 col-md-8">
						<label htmlFor="inputName">Full Name</label>
						<input type="text" className="form-control" id="inputName" placeholder="Full Name" value={store.contactName} onChange={e => actions.setContactName(e.target.value)}/>
					</div>
					<div className="row mb-3 col-11 col-md-8">
						<label htmlFor="inputEmail">Email</label>
						<input type="email" className="form-control" id="inputEmail" placeholder="Enter email" value={store.email} onChange={e => actions.setEmail(e.target.value)}/>
					</div>
					<div className="row mb-3 col-11 col-md-8">
						<label htmlFor="inputPhone">Phone</label>
						<input type="text" className="form-control" id="inputPhone" placeholder="Enter phone" value={store.phone} onChange={e => actions.setPhone(e.target.value)}/>
					</div>
					<div className="row mb-3 col-11 col-md-8">
						<label htmlFor="inputAddress">Address</label>
						<input type="text" className="form-control" id="inputAddress" placeholder="Enter address" value={store.address} onChange={e => actions.setAddress(e.target.value)}/>
					</div>
					<div className="col-11 col-md-8">
						<Link to="/" onClick={data.state !== null && store.userContacts.length !== 0 ? actions.updateContact : actions.createContact}>
							<button className="btn btn-primary w-100">save</button>
						</Link>
						<Link to="/" onClick={actions.resetAllData}>
							or get back to contacts
						</Link>
					</div>
				</div>
			</form>
		</div>
	);
};