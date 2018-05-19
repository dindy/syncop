import React, { Component } from 'react'
import { connect } from 'react-redux'

import { store } from '../store'
import Character from './Character'

class Line extends Component {

    constructor(...args) {
    
        super(...args);
    
        this.state = {
            lastUpdate: store.getState().synchronizer.lyrics.lastUpdate,
            node: null,
            lastClickCoords: null,
            line: this.props.line,
            lineIndex: this.props.lineIndex,
            paragraphIndex: this.props.paragraphIndex
        };
    
        this.unsubscribe = store.subscribe(() => {

            const { paragraphIndex, lineIndex, line, lastUpdate } = this.state
            const storeLyrics = store.getState().synchronizer.lyrics
            const newLine = storeLyrics.optimized[paragraphIndex][lineIndex]
            const storeLastUpdates = storeLyrics.lastUpdates

            const matchingUpdates = storeLastUpdates.filter(update => {
                return update.lineIndex == lineIndex && update.paragraphIndex == paragraphIndex
            })

            if (matchingUpdates.length > 0) {
                this.setState({
                    line: newLine
                });
            }
            
        })

        //  const storeLyrics = store.getState().synchronizer
        // })
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    shouldComponentUpdate(newProps, newState) {
        const newLine = newState.line
        const curLine = this.state.line
        return newLine != curLine
    }

	renderChar(char, index, selectLyricsChar) {
		return (
			<Character 
				selectLyricsChar={ this.props.selectLyricsChar }
				charIndex={ char.index }			
				char={ char }
				key={ 'W' + char.id }
			/>
		)
	} 

    render() {
    	const { index, selectLyricsChar } = this.props
        const { line } = this.state
    	return (
			<p 
				className={ 'lyrics-line' }
				key={ 'line' + index }
			>{ line.map((char, cIndex) => this.renderChar.call(this, char, cIndex, selectLyricsChar)) }
			</p>	
    	)
    }    
}

export default Line