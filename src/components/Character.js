import React, { Component } from 'react'
import { connect } from 'react-redux'

import { store } from '../store'

class Character extends Component {

    constructor(...args) {
        super(...args);
        this.state = {
            char: this.props.char,
            // char: store.getState().synchronizer.lyrics.processed[this.props.charIndex],
            node: null,
            lastClickCoords: null
        };
    
        this.unsubscribe = store.subscribe(() => {

        	const storeLyrics = store.getState().synchronizer.lyrics
            const newChar = storeLyrics.processed[this.props.charIndex]
            const newClick = storeLyrics.lastClickCoords
            
            if (newClick !== this.state.lastClickCoords) {

            	// Update last click coords in component state
            	this.state.lastClickCoords = newClick
            	
            	// Get current <span> position
				const refXA = this.state.coords.left
				const refXB = this.state.coords.left + this.state.coords.width
				const refYA = this.state.coords.top
				const refYB = this.state.coords.top + this.state.coords.height				    		
	    		
	    		// Element has been clicked ?
	    		if (newClick.x > refXA && newClick.x < refXB && newClick.y > refYA && newClick.y < refYB) {
            		this.props.selectLyricsChar(this.props.char.id)
	    		}	            	
            }
        });
    }

    shouldComponentUpdate(newProps, newState) {

        const newChar = newProps.char
        const curChar = this.state.char
        const render = newChar.isSelected !== curChar.isSelected || newChar.mark !== curChar.mark
        if (render) this.state.char = newChar
        return render
    }
	
    componentWillUnmount() {
    	this.unsubscribe();
    }

    updateCoords(node) {
        if (node) {
            this.setState({
                coords: node.getBoundingClientRect()
            });
        }
    }

	render() {
	
		const { char } = this.state
		return (
			<span 
				ref={(node) => this.updateCoords(node)}
				id={ char.id }
				key={ char.id }
				className={ char.isSelected ? 'char-selected' : char.mark != null ? 'char-marked' : '' }
			>{ char.value }</span>
		)		
	}
}



export default Character