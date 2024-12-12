import React, {useContext} from "react";
import { Context } from "../store/appContext";

const Modal = function ({ID}) {
    const {store, actions} = useContext(Context)
    return (
        <>
             {/* <!-- Button trigger modal --> */}
            <button type="button" className="border-0 py-2" data-bs-toggle="modal" onClick={actions.setAllContactData} data-bs-target="#staticBackdrop">
                <i id={ID} className="fa-solid fa-trash-can"></i>
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Delete {store.contactName}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={actions.resetAllData}></button>
                        </div>
                        <div className="modal-body">
                            Are you sure you want to delete {store.contactName} as contact?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={actions.resetAllData}>Cancel</button>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={actions.deleteContact}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;