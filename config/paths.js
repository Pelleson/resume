const fs = require('fs');
const path = require("path");

const appDir = fs.realpathSync(process.cwd());

const resolveApp = relativePath => path.resolve(appDir, relativePath);


module.exports = {
	appHtml: resolveApp("public/index.html"),
	appBuild: resolveApp('dist'),
	appPublic: resolveApp('public'),
	appIndex: resolveApp('src/index'),
	appDir: resolveApp('src/'),
	servedPath: "/"
}