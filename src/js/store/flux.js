const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			userContacts: [],
			contactName: "",
			email: "",
			phone: "",
			address: "",
			ID: null
		},
		actions: {
			setID: (ID) => {
				setStore({ID: ID});
			},
			setContactName: (name) => {
				setStore({contactName: name});
			},
			setEmail: (email) => {
				setStore({email: email});
			},
			setPhone: (phone) => {
				setStore({phone: phone});
			},
			setAddress: (address) => {
				setStore({address: address});
			},
			resetAllData: () => {
				setStore({contactName: "",
					email: "",
					phone: "",
					address: "",
					ID: null});
			},
			createContact: async () => {
				try {
					let response = await fetch("https://playground.4geeks.com/contact/agendas/AlejandroGC/contacts",{
						method:"POST",
						body: JSON.stringify({
							"name": getStore().contactName,
							"phone": getStore().phone,
							"email": getStore().email,
							"address": getStore().address
						  }),
						  headers: {
							'Content-type': 'application/json'
						  }
					});
					if (response.ok) {
						console.log("Contact added");
						getActions().resetAllData();
						return true;
					} else {
						console.log("Contact can't be created");
					}
				} catch (error) {
					console.log(error);
					return;
				}
			},
			getAllContacts: async ()=> {
				try {
					let response = await fetch("https://playground.4geeks.com/contact/agendas?offset=0&limit=100",{
						method:"GET"
					});
					let data = await response.json();
					data.agendas.some((contact)=> contact.slug === "AlejandroGC") ? getActions().getUserContacts() : getActions().createAgenda();
					return true;
				} catch (error) {
					console.log(error);
					return;
				}
			},
			getUserContacts: async () => {
				try {
					let response = await fetch("https://playground.4geeks.com/contact/agendas/AlejandroGC/contacts",{
						method:"GET"
					});
					let data = await response.json();
					console.log("User loaded");
					console.log(data.contacts);
					setStore({userContacts: data.contacts});
					return true;
				} catch (error) {
					console.log(error);
					return;
				}
			},
			createAgenda: async () => {
				try {
					let response = await fetch("https://playground.4geeks.com/contact/agendas/AlejandroGC",{
						method:"POST"
					});
					if (response.ok) {
						console.log("User created");
						return true;
					} else {
						console.log("User can't be created");
					}
				} catch (error) {
					console.log(error);
					return;
				}
			},
			deleteContact: async () => {
				try {
					await fetch("https://playground.4geeks.com/contact/agendas/AlejandroGC/contacts/" + getStore().ID,{
						method:"DELETE"
					});
					console.log("User deleted");
					getActions().getUserContacts();
					getActions().resetAllData();
					return true;
				} catch (error) {
					console.log(error);
					return;
				}
			},
			updateContact: async () => {
				try {
					await fetch("https://playground.4geeks.com/contact/agendas/AlejandroGC/contacts/" + getStore().ID,{
						method:"PUT",
						body: JSON.stringify({
							"name": getStore().contactName,
							"email": getStore().email,
							"phone": getStore().phone,
							"address": getStore().address
						  }),
						  headers: {
							'Content-type': 'application/json'
						  }
					});
					console.log("User updated");
					getActions().getUserContacts();
					getActions().resetAllData();
					return true;
				} catch (error) {
					console.log(error);
					return;
				}
			}
		}
	};
};

export default getState;
