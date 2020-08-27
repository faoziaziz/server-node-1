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

/* import reactstrap */

import { Jumbotron, Button } from 'reactstrap';

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
		 
		{/* ini bagian home page jumbotron*/}

		<Jumbotron>
		    <h1 className="display-3">Hello, world!</h1>
		    <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
		    <hr className="my-2" />
		    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
		    <p className="lead">
			<Button color="primary">Learn More</Button>
		    </p>
		</Jumbotron>

		{/* ini bagian content*/}
		

		

		<LeftSidebar/>
		<Footer/>
	    </div>
	);
    }
}

export default App;
