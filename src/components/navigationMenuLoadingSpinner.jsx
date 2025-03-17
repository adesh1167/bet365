import React from 'react'

const NavigationMenuLoadingSpinner = ({height = "570px"}) => {
  return (
        <div className="wc-Spinner " style={{position: "absolute", height: height }}>
           <div className="wc-Spinner_Icon " />
        </div>
  )
}

export default NavigationMenuLoadingSpinner;
