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
			setUserContacts: (userContacts) => {
				setStore({userContacts: userContacts});
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
			setID: (e) => {
				setStore({ID: e.target.id});
			},
			createContact: async () => {
				try {
					let response = await fetch("https://playground.4geeks.com/contact/agendas/AlejandroGC/contacts",{
						method:"POST",
						body: JSON.stringify({
							"name": getStore().contactName,
							"phone": getStore().email,
							"email": getStore().phone,
							"address": getStore().address
						  }),
						  headers: {
							'Content-type': 'application/json'
						  }
					});
					if (response.ok) {
						console.log("Contact added");
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
					getActions().setUserContacts(data.contacts)
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
			deleteContact: async (e) => {
				try {
					await fetch("https://playground.4geeks.com/contact/agendas/AlejandroGC/contacts/" + e.target.id,{
						method:"DELETE"
					});
					console.log("User deleted");
					getActions().getUserContacts();
					return true;
				} catch (error) {
					console.log(error);
					return;
				}
			},
			updateContact: async () => {
				try {
					let response = await fetch("https://playground.4geeks.com/contact/agendas/AlejandroGC/contacts/" + getStore().ID,{
						method:"PUT",
						body: JSON.stringify({
							"name": getStore().contactName,
							"phone": getStore().email,
							"email": getStore().phone,
							"address": getStore().address
						  }),
						  headers: {
							'Content-type': 'application/json'
						  }
					});
					const data = response.json();
					console.log("User updated");
					getActions().getUserContacts();
					setStore({ID: null});
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
