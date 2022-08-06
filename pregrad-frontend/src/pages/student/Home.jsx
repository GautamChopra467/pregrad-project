import React from 'react'
import Header from '../../components/student/jsx/Header';
import HomeBanner1 from '../../components/student/jsx/HomeBanner1';

const Home = ({theme, setTheme}) => {
  return (
    <div>
      <Header theme={theme} setTheme={setTheme} />
      <HomeBanner1 />
    </div>
  )
}

export default Home
