import React from 'react'
import styles from './styles.css'

const Eclipse = props => (
  <>
    <style>${`${styles}`}</style>
    <div className="lds-css ng-scope">
      <div className="lds-eclipse">
        <div></div>
      </div>
    </div>
  </>
)

export default Eclipse
