import React, { Fragment } from 'react'
import { connect } from 'react-redux'


const ErrorMessage = ({ error }) => {
  return (
    <Fragment>
      {error.message ?
        <div className="error" onClick={e=>console.log(e.target.remove())}>
          {error.message} <br/> нажмите чтобы закрыть 
        </div> : null
      }
    </Fragment>

  )

}



export default connect(store => ({ error: store.error }))(ErrorMessage);