import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

import { searchSource, saveRawLyrics } from '../actions'

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const Header = ({ dispatch, classes }) => {
  
  	const handleSearchSource = () => dispatch(searchSource())
  	const handleRawSaveLyrics = () => dispatch(saveRawLyrics())

  	const renderButtonSearchSource = () => (
	  	<Button 
	  		color="inherit"
			onClick={handleSearchSource}
	  	>New</Button>
	)
  	
  	const buttonSaveRawLyrics = () => (
	  	<Button 
	  		color="inherit"
			onClick={handleRawSaveLyrics}
	  	>Save</Button>
	)  	

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>        	
        	<Typography variant="title" color="inherit" className={classes.flex}>
            	Syncop
          	</Typography>
			<Route exact={true} path="/" render={renderButtonSearchSource}/>
			<Route exact={true} path="/create/add-lyrics" render={buttonSaveRawLyrics}/>
        </Toolbar>
      </AppBar>
    </div>
  ) 
}

export default withStyles(styles)(withRouter(connect()(Header)))