import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './CountryPicker.module.css';

import { fetchCountries } from '../../api/';

const CountryPicker = ({ changeCountry }) => {
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		(async () => {
			setCountries(await fetchCountries());
		})();
	}, []);

	return (
		<FormControl className={styles.formControl}>
			<NativeSelect
				defaultValue=''
				onChange={(event) => changeCountry(event.target.value)}>
				{countries.map((country) => (
					<option key={country} value={country}>
						{country}
					</option>
				))}
			</NativeSelect>
		</FormControl>
	);
};

export default CountryPicker;
