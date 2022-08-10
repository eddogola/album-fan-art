const proxy = require("http-proxy-middleware").createProxyMiddleware;

module.exports = function (app) {
	app.use(proxy("/auth/**", { target: process.env.REACT_APP_HOST }));
};