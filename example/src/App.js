import React, { Component } from 'react'

import AlignmentGuides from 'react-alignment-guides';

// Dummy position data to generate the boxes
const POS_DATA = [
	{ x: 0, y: 0, width: 200, height: 100, top: 0, left: 0, aspectRatio: true },
	{ x: 400, y: 80, width: 200, height: 200, top: 80, left: 400, aspectRatio: 1 },
	{ x: 150, y: 125, width: 75, height: 175, top: 125, left: 150 },
	{ x: 300, y: 250, width: 75, height: 175, top: 250, left: 300 },
	{ x: 450, y: 375, width: 75, height: 175, top: 375, left: 450 },
	{ x: 700, y: 500, width: 75, height: 175, top: 500, left: 700 }
	// { x: 150, y: 125, width: 400, height: 175, top: 125, left: 150, zIndex: 11, type: 'group', id: 'group1' }
];

export default class App extends Component {
	render () {
		return (
			<AlignmentGuides
				boxes={POS_DATA}
				boxStyle={{ backgroundColor: '#A8EEED' }}
				style={{ backgroundColor: '#333', width: '1280px', height: '720px', top: '150px', left: '150px' }}
			/>
		)
	}
}
