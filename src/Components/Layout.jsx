import React from 'react'
import classes from '../assets/css/Layout.module.css'

import Nav from './Nav'

export default function Layout({children}) {
  return (
    <div>
        <Nav/>
        <main className={classes.main}>
          {/* container */}
            <div className={classes.container}>
                {children}
            </div>
        </main>
    </div>
  )
}
