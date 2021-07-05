import React from 'react'
import { connect } from 'react-redux'


const ErrorMessage = ({ error }) => (<div>{error.message}</div>);

export default connect(store => ({ error: store.error }))(ErrorMessage);