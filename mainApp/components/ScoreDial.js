import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Toilet from './Toilet';

const ScoreDial = (props) => {
	return (
		<>
			<Toilet />
			<Text>{props.score}</Text>
		</>
	);
};

export default ScoreDial;
