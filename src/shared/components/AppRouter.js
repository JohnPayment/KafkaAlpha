
import React from "react";
import {RouteHandler} from "react-router";

export default class AppHandler extends React.Component {

	render() {

		return	<RouteHandler 	urlData={this.props.urlData}
								loginData={this.props.loginData}
								errorData={this.props.errorData} />;
	}
}
