import React, { useContext } from 'react'
import Quizz from './components/Quizz'
import Quizplay from './components/Quizplay'
import "./components/Quizz.css"
import questions from "./question"
// import  AppContext  from './components/Context'
import Result from './components/Result'
import { AppContext  } from './components/Context'


export default function App() {
  const{click} = useContext(AppContext)
  const{dark} = useContext(AppContext)
  const renderPage = ()=>{
    {switch(click){
      case "quizz":
      return <Quizz/>
      case "quizPlay":
      return <Quizplay questions={questions} />
      case "result":
      return<Result/>
    }}
  }
  return (
    <div className='main-div' style={{background:`${
      dark ? "linear-gradient(180deg, #04213B 0%, rgba(19, 45, 68, 0.94) 56.67%, rgba(24, 49, 71, 0.93) 99.95%, rgba(31, 55, 75, 0.90) 99.96%, rgba(60, 78, 93, 0.80) 99.97%, rgba(110, 119, 123, 0.62) 99.98%, rgba(191, 184, 172, 0.32) 99.99%, rgba(249, 231, 207, 0.11) 100%)":"linear-gradient(180deg, rgb(247,206,150,1) 0%, rgb(249,231,207,1) 100% )"
    }`}}>
    {renderPage()}
    </div>
  )
}
