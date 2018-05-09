import React from 'react'
import { connect } from 'react-redux'
import { ListSyncActions } from '../actions'

const ListSync = ({ dispatch }) => {

  return (
    <div>No synchro to display.
    </div>
  )
}

export default connect()(ListSync)