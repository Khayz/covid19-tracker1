import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Cards = ({ data }) => {
	return (
		<div className={styles.container}>
			<Grid container spacing={3} justify='center'>
				{data &&
					Object.keys(data).map(
						(info) =>
							info !== 'lastUpdate' && (
								<Grid
									key={info}
									xs={12}
									md={3}
									className={cx(styles.card, styles[info])}
									item
									component={Card}>
									<CardContent>
										<Typography
											style={{ textTransform: 'capitalize' }}
											color='textSecondary'
											gutterBottom>
											{info === 'confirmed' ? 'Infected' : info}
										</Typography>
										<Typography variant='h5'>
											<CountUp
												start={0}
												end={data[info].value}
												duration={2.5}
												separator=','
											/>
										</Typography>
										<Typography color='textSecondary'>
											{new Date(data['lastUpdate']).toDateString()}
										</Typography>
										<Typography variant='body2'>
											Number of {info} from COVID-19
										</Typography>
									</CardContent>
								</Grid>
							)
					)}
			</Grid>
		</div>
	);
};

export default Cards;
