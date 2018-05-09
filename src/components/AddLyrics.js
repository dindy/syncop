import React from 'react'
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
  },
});

const AddLyrics = ({ 
	classes,
	changeRawLyrics
}) => {
	return (
	    <form className={classes.container} noValidate autoComplete="off">		
	        <TextField
	          id="multiline-flexible"
	          label="Multiline"
	          multiline
	          className={ classes.textField }
	          margin="normal"
	          onChange={ changeRawLyrics }
	        />
	    </form>
	)
}

export default withStyles(styles)(AddLyrics)