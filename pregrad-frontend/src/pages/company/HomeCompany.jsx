import React from 'react'
import HeaderCompany from '../../components/company/jsx/HeaderCompany';
import HomeBanner1 from '../../components/student/jsx/HomeBanner1';

const Home = ({theme, setTheme}) => {
  return (
    <div>
      <HeaderCompany theme={theme} setTheme={setTheme} />
      <HomeBanner1 />
    </div>
  )
}

export default Home
