import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Toilet from './Toilet';

const ScoreDial = (props) => {
	return (
		<>
			{/* <Toilet /> */}
			<Text style={styles.header}>{props.score}</Text>
		</>
	);
};
const styles = StyleSheet.create({
	header: {
		fontSize: 120,
	},
});
export default ScoreDial;
