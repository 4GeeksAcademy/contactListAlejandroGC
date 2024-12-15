import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Modal from "./modal";

const CardContact = () => {
    const {store,actions} = useContext(Context);
    
    return (
        <>
            {store.userContacts.map((contact)=>{
                return (
                    <div key={contact.id} className="row d-flex justify-content-center border border-secondary-subtle w-100">
                        <div className="d-flex align-items-center col-4 col-md-2">
                            <img src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png" className="card-img-top rounded-circle" alt={"img" + contact.id}/>
                        </div>
                        <div className="data d-flex flex-column justify-content-around col-8 ps-4 py-1">
                            <div className="name fs-4">{contact.name}</div>
                            <div className="address color-grey d-flex align-items-center py-1"><i className="fa-solid fa-location-dot"></i><span className="ellipsis ps-2 fs-5">{contact.address}</span></div>
                            <div className="phone color-grey d-flex align-items-center py-1"><i className="fa-solid fa-phone-flip"></i><span className="ellipsis ps-2">{contact.phone}</span></div>
                            <div className="email color-grey d-flex align-items-center py-1"><i className="fa-solid fa-envelope"></i><span className="ellipsis ps-2">{contact.email}</span></div>
                        </div>
                        <div className="col-12 col-md-2 p-0">
                            <div className="d-flex justify-content-around col-4 col-md-12 p-0">
                                <Link to="/add-contact" state={{id: contact.id}}>
                                    <button className="border-0 py-2"><i className="fa-solid fa-pencil"></i></button>
                                </Link>
                                <Modal ID={contact.id}/>
                            </div>
                        </div>
                    </div>
                    )
                })
            }
        </>
    )
}

export default CardContact;