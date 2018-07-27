// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const dotNet = 'https://vcustomers-api.azurewebsites.net/api';
const nodejs = 'http://localhost:3000/api';

export const environment = {
	production: false,
	dotNet,
	nodejs,
	selectEnv: function (url: string): string {
		if (url.indexOf('dotnet') > 0) return dotNet;
		else if (url.indexOf('nodejs') > 0) return nodejs;
		else return dotNet;
	}
};
