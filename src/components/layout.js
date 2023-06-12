import React from 'react'
import Cardo from './Cardo';
import Header from './Header';
import Menu from './Menu';
import ScrollToTop from './ScrollToTop'
import Like from './Like';
import Section from './Sec';
import About from './About'

function layout() {
  return (
    <>
    <ScrollToTop />
    <Header />
    <Section />
    <About />
    <Like />
    <Menu />
    <Cardo />
    </>
  )
}

export default layout