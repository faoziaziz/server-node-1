/*
  Nama : Aziz Amerul Faozi
  Description : this code will use for homepage
*/

import React from "react";
import axios from "axios";
import "./styles.css";

/* component for header sidebar and leftsidebar */
import Header from "./component/Header.js";
import Sidebar from "./component/Sidebar.js"
import LeftSidebar from "./component/LeftSidebar"
import Footer from "./component/Footer"
import {Button} from "reactstrap"


/*
  applikasi
*/
class App extends React.Component {
    state = {
	users: [],
    };
    componentDidMount() {
	axios.get("/users.json").then((response) => {
	    this.setState({ users: response.data });
	});
    }

    render() {
	const { users } = this.state;
	return (
	    <div>
		<Header />
		<Sidebar />
		<Button color="primary">primary</Button>{' '}
		<Button color="secondary">secondary</Button>{' '}
		<Button color="success">success</Button>{' '}
		<Button color="info">info</Button>{' '}
		<Button color="warning">warning</Button>{' '}
		<Button color="danger">danger</Button>{' '}
		<Button color="link">link</Button>
		
		<ul className="users">
		    {users.map((user) => (
			<li className="user">
			    <p>
				<strong>Name:</strong> {user.name}
			    </p>
			    <p>
				<strong>Email:</strong> {user.email}
			    </p>
			    <p>
				<strong>City:</strong> {user.address.city}
			    </p>
			</li>
		    ))}
		</ul>
		<LeftSidebar/>
		<Footer/>
	    </div>
	);
    }
}

export default App;
