import React from 'react'
import Search from './search'
import Body from './body'

const HomePage = () => {
  return (
    <div className="wcl-CommonElementStyle_NavContentContainer">
        <div className="wc-ResponsiveHomePage_VerticalContainer">
            <div className="wcl-PageContainer wcl-PageContainer_State1">
                <Search/>
                <Body/>
            </div>
        </div>
    </div>
  )
}

export default HomePage
