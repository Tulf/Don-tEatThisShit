import React, { Component } from 'react';
import { View, Animated, Easing } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

AnimatedPath = Animated.createAnimatedComponent(Path);

class Toilet extends Component {
	constructor() {
		super();
		this.state = {
			progress: new Animated.Value(0),
		};
	}
	componentDidMount() {
		Animated.timing(this.state.progress, {
			toValue: 1,
			duration: 1000,
		}).start();
	}

	render() {
		function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
			var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

			return {
				x: centerX + radius * Math.cos(angleInRadians),
				y: centerY + radius * Math.sin(angleInRadians),
			};
		}

		function describeArc(x, y, radius, startAngle, endAngle) {
			var start = polarToCartesian(x, y, radius, endAngle);
			var end = polarToCartesian(x, y, radius, startAngle);

			var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

			var d = [
				'M',
				start.x,
				start.y,
				'A',
				radius,
				radius,
				0,
				largeArcFlag,
				0,
				end.x,
				end.y,
			].join(' ');

			return d;
		}

		let R = 160;
		let dRange = [];
		let iRange = [];
		let steps = 359;
		for (var i = 0; i < steps; i++) {
			dRange.push(describeArc(160, 160, 160, 0, i));
			iRange.push(i / (steps - 1));
		}

		var _d = this.state.progress.interpolate({
			inputRange: iRange,
			outputRange: dRange,
		});

		return (
			<Svg style={{ flex: 1 }}>
				<Circle
					cx={R}
					cy={R}
					r={R}
					stroke='green'
					strokeWidth='2.5'
					fill='green'
				/>
				{/*       X0  Y0               X1   Y1*/}
				<AnimatedPath d={_d} stroke='red' strokeWidth={5} fill='none' />
			</Svg>
		);
	}
}

export default Toilet;
