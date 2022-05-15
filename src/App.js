import React from 'react'
import './app.css'

import { Header, Footer, Blog, Posibilities, Feature, WhatGPT3 } from './containers'
import { CTA, Brand, Navbar } from './components'

const App = () => {
  return (
    <div className='App'>
      <div className='gradiant__bg'>
        <Navbar />
        <Header />
      </div>

      <Brand />
      <WhatGPT3 />
      <Feature />
      <Posibilities />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App