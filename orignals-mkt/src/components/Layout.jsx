
import React from 'react'
import Routers from '../../routes/Routers'
import Header from './Header/header'
import Footer from './Footer/footer'

const Layout = (props) => {
  return(
    <>
      <Header/>
      <div>{props.children}</div>
      <Footer/>
    </>
  )
}

export default Layout
