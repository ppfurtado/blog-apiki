import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0px;
  left: 0px;
  z-index: 1000;
`
const LoadingContainer = styled.div`
  margin: auto;
  width: 70px;
  height: 70px;
  display: flex;
  background: rgba(140,140,140, 0.3);
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`

const Loading = () => {
  const [step, setStep] = React.useState(0)

  React.useEffect(()=> {
    function updateStep(){
      setStep((step) => {
        if(step < 3 ) return step + 1
        else return 0
      })
    }

    const interval = setInterval(updateStep, 300)
    return () => {
      clearInterval(interval)
    }
  },[])

  function displayStep(i) {
    return {
      display: step === i? 'block' : 'none'
    }
  }

  return (
    <Wrapper>
      <LoadingContainer>
      <svg width="61" height="62.2" viewBox="0 0 386 394" fill="none" xmlns="http://www.w3.org/2000/svg">

        <g clipPath="url(#clip0)" style={displayStep(2)}>
          <path d="M97.2675 360.257C99.5748 342.066 123.442 339.259 138.28 330.009L240.342 295.491C268.842 284.531 297.522 268.879 326.234 252.411C339.798 242.827 349.765 240.867 385.169 190.846C384.79 213.37 387.908 212.596 376.96 256.363C367.243 277.033 361.007 298.716 345.835 317.344C327.354 340.109 310.922 356.735 281.278 370.79C260.997 380.424 236.054 391.966 203.766 392.91C184.542 392.524 165.133 393.118 146.427 390.012C123.567 388.285 102.615 378.327 97.2675 360.257V360.257Z" fill="#FFCF08" stroke="black" strokeWidth="0.999999"/>
        </g>

        <g style={displayStep(1)}> 
          <path d="M20.3391 260.652C21.2467 258.8 19.0447 253.019 50.2421 237.188C97.5008 217.418 163.959 195.117 236.762 158.7C286.148 133.671 315.55 97.433 331.497 62C349.541 72.1923 367.52 103.912 369.94 118.542C370.896 139.075 349.357 168.271 343.877 171.818C333.356 183.839 263.151 222.149 263.151 222.149L154.984 266.398C154.984 266.398 93.0526 288.639 74.7238 301.995C68.3103 306.599 49.8629 322.957 52.309 330.627C52.309 330.627 4.1107 286.546 20.3391 260.652V260.652Z" fill="#F7A123" stroke="black" strokeWidth="0.999999"/>
        </g>

        <g clipPath="url(#clip1)" style={displayStep(0)}>
          <path d="M1.55717 232.683C1.55717 232.683 -5.67813 162.292 14.098 123.203C34.858 70.8953 157.785 57.0297 197.42 37.6516C206.099 31.1775 214.789 26.0188 217.477 14.6765C219.635 5.98529 218.476 2.79481 222.574 0.843312C228.382 -1.58812 251.488 4.49257 251.488 4.49257C251.488 4.49257 285.176 18.0904 286.103 20.0518C293.986 23.5276 296.543 43.7092 293.471 45.342C288.194 55.4656 276.139 73.0492 276.139 73.0492C276.139 73.0492 251.523 98.9428 240.917 101.898C240.917 101.898 187.157 129.051 186.611 128.622L128.171 148.076L64.8783 171.46C54.4477 175.744 43.6294 175.319 31.1715 187.841C22.1608 189.002 -0.381261 232.375 1.55717 232.683V232.683Z" fill="#F77D24" stroke="black" strokeWidth="0.999999"/>
        </g>

        <defs>
        <clipPath id="clip0">
        <rect width="288.567" height="203.172" fill="white" transform="translate(97 190)"/>
        </clipPath>
        <clipPath id="clip1">
        <rect width="295" height="233" fill="white"/>
        </clipPath>
        </defs>
      </svg>
      </LoadingContainer>
    </Wrapper>
  )
}

export default Loading
