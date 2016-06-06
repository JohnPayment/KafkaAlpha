module.exports = function(app, Router, routes, React)
{
	//----------------------------------------------------------------------------------------------------------------------
	// Kitchen
	//----------------------------------------------------------------------------------------------------------------------
	app.get('/level-0/kitchen', function (req, res)
	{
		var urlData = req.query;
		var session = req.session;
		var userData = {};

		Router.run(routes, req.url, Handler => {

			// Client-side variables.
			var props = {userData: userData};

			let content = React.renderToString(<Handler userData={userData}/>);
			res.render('index', {	content: content,
									props: JSON.stringify(props),
									title: "Kafka Alpha - Kitchen"});
		});
	});
}
