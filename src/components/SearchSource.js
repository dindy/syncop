import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Input from 'material-ui/Input';

import { searchSource } from '../actions'

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  input: {
    width: '100%',
  }
})

const SearchSource = ({ 
	classes, 
	searchResults, 
	selectResult,
	changeQuerySearch
}) => {

	// Creates ListItems
  	const listItems = () => searchResults.map((result, index) => {

		const { thumbnails, title } = result.snippet 

		return (
			<ListItem 
				button
				onClick={ () => selectResult(result) }
			>
				<img 
					width={ thumbnails.default.width } 
					height={ thumbnails.default.height } 
					src={ thumbnails.default.url }
				/>
	          	<ListItemText inset primary={ title } />
	    	</ListItem>
		)
	})
	
	return (
	    <div className={classes.root}>
			<Input className={classes.input} onChange={changeQuerySearch} />
	    	<List component="nav">
	    		{ listItems() }
	    	</List>
	    </div>
  	) 
}

SearchSource.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchSource);
