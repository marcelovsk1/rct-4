
import React from 'react'
import Routers from '../../routes/router'
import Header from '../Header/header'
import Footer from '../Footer/footer'

const Layout = () => {
  return(
    <>
      <Header/>
      <div>
        <Routers/>
      </div>
      <Footer/>
    </>
  )
}

export default Layout
