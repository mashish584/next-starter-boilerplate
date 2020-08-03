import React from "react";
import App from "next/app";

import Layout from "../components/Layout";

import "react-toastify/dist/ReactToastify.css";
import "../assets/scss/main.scss";

class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;

		return (
			<Layout>
				<Component {...pageProps} />
			</Layout>
		);
	}
}

export default MyApp;
