const dotNet = 'https://vcustomers-api.azurewebsites.net/api';
const nodejs = 'https://sleepy-beach-50895.herokuapp.com/api';

export const environment = {
  production: true,
  dotNet,
  nodejs,
  selectEnv: function (url: string) {
		if (url.indexOf('dotnet') > 0) return dotNet;
		else if (url.indexOf('nodejs') > 0) return nodejs;
		else return dotNet;
	}
};
