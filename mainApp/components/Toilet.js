import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import Svg, { Circle, Rect } from 'react-native-svg';

class Toilet extends React.Component {
	componentDidMount() {
		// const { currentValue, totalValue } = this.props;
		this.animate(20, 70);
	}
	animate = (current, total) =>
		Animated.timing(this.state.width, {
			toValue: current / total,
			duration: 4000,
			useNativeDriver: true,
		}).start();
	render() {
		return (
			<Svg height='50%' width='50%' viewBox='0 0 100 100'>
				<Rect
					x='15'
					y='15'
					width='70'
					height='70'
					stroke='#ffafff'
					strokeWidth='10'
					fill='#afffff'
				/>
			</Svg>
		);
	}
}

export default Toilet;
