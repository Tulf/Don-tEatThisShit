/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import ScoreDial from './components/ScoreDial';
import Camera from './components/Camera1';

type Props = {};
export default class App extends Component<Props> {
	state = {
		matches: {
			Obesogenic: ['Corn', 'Soybean', 'Canola'],
			Atherogenic: ['Corn', 'Cereal grains', 'Pecans'],
			Carinogenic: ['Corn', 'Almonds'],
		},
		score: Math.floor(Math.random() * 100),
	};
	render() {
		return (
			// <View style={styles.container}>
			<Camera />
			// </View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
});
