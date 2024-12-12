import React, { useEffect, useState, useContext } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import CardContact from "../component/cardContact";
import { Context } from "../store/appContext";

export const Home = () => {
	const {store, actions} = useContext(Context);
	
	useEffect(() => {actions.getAllContacts()},[])

	return (
		<>
			<div className="container d-flex justify-content-end mb-3 p-0 col-11">
				<Link to="/add-contact">
					<button className="btn btn-success">Add new contact</button>
				</Link>
			</div>
			{
				store.userContacts.length === 0 ? <h1 className="text-center mt-4">No contacts added</h1>
				: <div className="container d-flex flex-column align-items-center pb-5">
					<CardContact/>
				</div>
			}
		</>
	)
};