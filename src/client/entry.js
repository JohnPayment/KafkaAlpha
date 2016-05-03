import React from "react";
import Router from "react-router";
import routes from "../shared/routes";

Router.run(routes, Router.HistoryLocation, (Handler, state) => {

	React.render(<Handler	urlData =        {window.INITIAL_PROPS.urlData}
							userData =       {window.INITIAL_PROPS.userData}
							errorData =      {window.INITIAL_PROPS.errorData} />, document.getElementById('app'));
});
