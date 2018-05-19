import React, { Component } from 'react'
import { connect } from 'react-redux'

import { store } from '../store'
import Line from './Line'

class Paragraph extends Component {

	renderLines(paragraph, paragraphIndex) {
		return paragraph.map((line, index) => (
			<Line 
				className={ 'lyrics-line' }
				key={ 'line' + index }
				selectLyricsChar= { this.props.selectLyricsChar }
				line={ line }
				lineIndex={ index }
				paragraphIndex={ paragraphIndex }
			/>			
		))
	}

    shouldComponentUpdate(newProps, newState) {
    	return false
    }

    render() {
    	const { paragraph, selectLyricsChar, paragraphIndex } = this.props
    	return (
			<div className={ 'lyrics-paragraph' }>
				{ this.renderLines(paragraph, paragraphIndex) }
			</div>
    	)
    }    
}

export default Paragraph