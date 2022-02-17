import React from 'react'

import { Helmet } from 'react-helmet'

import AppComponent from '../components/component'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>New Project29</title>
        <meta property="og:title" content="New Project29" />
      </Helmet>
      <div className={styles['container1']}>
        <h1>Hello! :) !!!</h1>
      </div>
      <AppComponent
        image_src="https://images.unsplash.com/photo-1644965193287-8f7d1c5dd3c8?ixid=Mnw5MTMyMXwwfDF8YWxsfDEzfHx8fHx8Mnx8MTY0NTA4NzE5NQ&amp;ixlib=rb-1.2.1&amp;h=200"
        heading="Hello"
        text="Lorem Ipsum"
      ></AppComponent>
    </div>
  )
}

export default Home
