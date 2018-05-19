import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'

import Line from './Line'
import Paragraph from './Paragraph'

const styles = theme => ({
	card: {
		margin: 10
	}
});

class MarkLyrics extends Component {

	componentWillMount() {
		this.refs = []
		window.addEventListener('scroll', this.handleScroll.bind(this));
	}

	componentWillUnmount() {
	    window.removeEventListener('scroll', this.handleScroll.bind(this));
	}

	handleScroll(event) {
		this.props.updateScrollY(window.scrollY)
	}

	renderParagraphs(optimizedLyrics) {
		return optimizedLyrics.map((paragraph, index) => (
			<Paragraph 
				paragraph={ paragraph }
				selectLyricsChar={ this.props.selectLyricsChar }
				paragraphIndex={ index }
				key={ 'paragraph' + index }
			/>
		))
	} 

	renderLyricsBlock(optimizedLyrics) {
		if (optimizedLyrics) {
			return (
				<div className={ 'lyrics-block' }>
					{ this.renderParagraphs(optimizedLyrics) }
				</div> 
			)
		}
	}	

	getDocScrollOffsetTop() {
		var doc = document.documentElement;
		return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
	}

	handleTouch(e) {
		const clickCoords = {x: e.clientX, y: e.clientY}
    	this.props.updateLastClickPosition(clickCoords)
    }	
    
    shouldComponentUpdate(newProps, newState) {
        return false
    }

	render() { 
		return (
		    <div>
			    <Card className={this.props.classes.card}>
				    <CardContent onClick={ this.handleTouch.bind(this) }>
				    	{ this.renderLyricsBlock(this.props.optimizedLyrics) }
				    </CardContent>
				    <CardActions>
					    <Button 
					    	size="small" 
					    	color="primary" 
					    	onClick={ this.props.markLyricsCharSelection }
					    >Mark</Button>					    
					    <Button 
					    	size="small" 
					    	color="primary" 
					    	onClick={ this.props.expandRightLyricsCharSelection }
					    >Expand to right</Button>
					    <Button 
					    	size="small" 
					    	color="primary" 
					    	onClick={ this.props.expandLeftLyricsCharSelection }
					    >Expand to left</Button>					    
				    </CardActions>
			    </Card>	    
		    </div>
		)
	}
}

export default withStyles(styles)(MarkLyrics)	