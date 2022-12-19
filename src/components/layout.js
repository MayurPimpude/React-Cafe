import React from 'react'
import Cardo from './Cardo';
import Header from './Header';
import Menu from './Menu';
import ScrollToTop from './ScrollToTop'

function layout() {
  return (
    <>
    <ScrollToTop />
    <Header />
    <Menu />
    <Cardo />
    </>
  )
}

export default layout