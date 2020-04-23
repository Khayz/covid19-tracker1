import React, { useState, useEffect } from 'react';
import { fetchData } from './api/';

import styles from './App.module.css';
import covidLogo from './assets/images/image.png';

import { Cards, Chart, CountryPicker } from './components/';

function App() {
	const [data, setData] = useState({});
	const [country, setCountry] = useState('');

	useEffect(() => {
		(async () => {
			const fetchedData = await fetchData(country);
			setData(fetchedData);
		})();
	}, [country]);

	return (
		<div className={styles.container}>
			<img className={styles.logo} src={covidLogo} alt='Covid-19' />
			<Cards data={data} />
			<CountryPicker changeCountry={setCountry} />
			<Chart data={data} country={country} />
		</div>
	);
}

export default App;
