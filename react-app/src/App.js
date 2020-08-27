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
		    <h1 className="display-3">AlexSiDragon</h1>
		    <p className="lead">Singkatan dari All Experiment Si Dragon.</p>
		    <hr className="my-2" />
		    <p>Merupakan draft dari beragam api walaupun belum semuanya.</p>
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
