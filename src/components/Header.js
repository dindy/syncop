import React from 'react'
import PropTypes from 'prop-types'
import { searchSource } from '../actions'
import { connect } from 'react-redux'


const Header = ({ dispatch }) => {
  
  const handleSearchSource = () => dispatch(searchSource())
  
  return (
    <div>
      <button
        onClick={handleSearchSource}
      >New
      </button>
    </div>
  ) 
}


export default connect()(Header)