import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
	let changeableUrl = url;

	if (country && country !== 'Global') {
		console.log(country);
		changeableUrl = `${url}/countries/${country}`;
	}

	try {
		const {
			data: { confirmed, recovered, deaths, lastUpdate },
		} = await axios.get(changeableUrl);

		return {
			confirmed,
			recovered,
			deaths,
			lastUpdate,
		};
	} catch (error) {
		return error;
	}
};

export const fetchDailyData = async () => {
	try {
		const { data } = await axios.get(`${url}/daily`);
		return data.map(({ confirmed, deaths, recovered, reportDate }) => ({
			confirmed: confirmed.total,
			deaths: deaths.total,
			recovered: recovered.total,
			date: reportDate,
		}));
	} catch (error) {
		return error;
	}
};

export const fetchCountries = async () => {
	try {
		const {
			data: { countries },
		} = await axios.get(`${url}/countries`);
		return ['Global', ...countries.map(({ name }) => name)];
	} catch (error) {
		return error;
	}
};
