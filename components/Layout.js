import React, { Component } from "react";
import Meta from "./Meta";

class Layout extends Component {
	render() {
		return (
			<>
				<Meta />
				{this.props.children}
			</>
		);
	}
}

export default Layout;
