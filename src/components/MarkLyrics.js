import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';

const styles = theme => ({
	card: {
		margin: 10
	}
});

const groupBy = (items, key) => items.reduce(
	(result, item) => ({
		...result,
		[item[key]]: [
			...(result[item[key]] || []),
			item,
		],
	}), 
	{},
);

const Character = React.forwardRef((props, ref) => {
	const char = props.char
	return (
		<span 
			ref={ ref }
			id={ char.id }
			key={ char.id }
			className={ char.isSelected ? 'char-selected' : char.mark != null ? 'char-marked' : '' }
		>{ char.value }</span>
	)		
})

class MarkLyrics extends Component {

	componentWillMount() {
		this.refs = []
		window.addEventListener('scroll', this.handleScroll.bind(this));
	}


	componentWillUnmount() {
	    window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll(event) {
	    this.setState({
	      transform: Math.random().toString(10).substr(2, 4)
	    });
	}
	
	addRef(ref) {
		// const clearRefs = this.refs.filter( oldRef => ref.id != oldRef.id) 
		// this.refs = [...clearRefs, ref]
		this.refs.push(ref)
	}

	renderChar(char, index) {
		return (
			<Character 
				ref={ el => {
					if (el != null) this.addRef(Object.assign(el.getBoundingClientRect(), char))
				}}
				char={ char }
				key={ 'W' + char.id }
			/>
		)
	} 

	renderLine(line, index) {
		return (
			<p 
				className={ 'lyrics-line' }
				key={ 'line' + index }
			>{ line.map((char, cIndex) => this.renderChar.call(this, char, cIndex)) }
			</p>			
		)
	}

	renderParagraph(paragraph, index) {
		const lines = Object.values(groupBy(paragraph, 'line'))
			.map((line, lIndex) => this.renderLine.call(this, line, lIndex))
		return (
			<div 
				className={ 'lyrics-paragraph' }
				key= { 'paragraph' + index }
			>{ lines }</div>
		)
	}

	renderLyricsBlock(processedlyrics) {
		if (processedlyrics.length < 1) return null
		const paragraphs = Object.values(groupBy(processedlyrics, 'paragraph'))
			.map((paragraph, index) => this.renderParagraph.call(this, paragraph, index))
		return (
			<div className={ 'lyrics-block' }>{ paragraphs }</div>
		)
	}	

	getDocScrollOffsetTop() {
		var doc = document.documentElement;
		return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
	}

	handleTouch(e) {
		// console.log('click')
		const touchX = e.clientX
		// console.log('offset', this.getDocScrollOffsetTop())
		const touchY = e.clientY
		// console.log('touchX', touchX)
		// console.log('touchY', touchY)
		// console.log('refs length', this.refs)
		const refs = this.refs
		for (let ref in refs) {
			const refXA = refs[ref].left
			const refXB = refs[ref].left + refs[ref].width
			const refYA = refs[ref].top
			const refYB = refs[ref].top + refs[ref].height				    		
    		if (touchX > refXA && touchX < refXB && touchY > refYA && touchY < refYB) {
    			this.props.selectLyricsChar(refs[ref].id)
    			break
    		}			
		}
    	// const matching = this.refs.filter(ref => {
    	// })
    	this.refs = []
    }	

	render() { 
		return (
		    <div>
			    <Card className={this.props.classes.card}>
				    <CardContent onClick={ this.handleTouch.bind(this) }>
				    	{ this.renderLyricsBlock(this.props.processedlyrics) }
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