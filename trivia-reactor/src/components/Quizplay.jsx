import React, { useState } from "react";
import "./Quizz.css";
import { useContext } from "react";
import { AppContext } from "./Context";

export default function Quizplay(props) {
  const ques = props.questions;
  console.log(ques)
  const [count, setcount] = useState(0);
  const {setClick} = useContext(AppContext)
  const {score,setScore} = useContext(AppContext)
  const{setDark,dark} = useContext(AppContext)
  const[highlight,setHighlight] = useState(false)
  const optionSelected =(e)=>{
    if(count<ques.length-1){
        setcount(count+1)
    }else if(count==ques.length-1){
        setClick("result")
    }
    if(e==true){
        setScore(score+5)
    }
  }
  return (
    <>
     <div className="nav-div">
     <div className="user" style={{color:dark?"white":"#04213B"}}>
          <p>Trivia-Reactor</p>
        </div>
        <div style={{border:`3px solid ${dark?"#FCE6C9":"#04213B"}`}}
          className="theme-button"
          
        >
          {dark?(
            <div className="dark" onClick={() => {
            setDark(!dark);
          }}>
            <svg
              width="35px"
              height="64px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18 2.75C17.5858 2.75 17.25 2.41421 17.25 2C17.25 1.58579 17.5858 1.25 18 1.25H22C22.3034 1.25 22.5768 1.43273 22.6929 1.71299C22.809 1.99324 22.7449 2.31583 22.5304 2.53033L19.8107 5.25H22C22.4142 5.25 22.75 5.58579 22.75 6C22.75 6.41421 22.4142 6.75 22 6.75H18C17.6967 6.75 17.4232 6.56727 17.3071 6.28701C17.191 6.00676 17.2552 5.68417 17.4697 5.46967L20.1894 2.75H18ZM13.5 8.75C13.0858 8.75 12.75 8.41421 12.75 8C12.75 7.58579 13.0858 7.25 13.5 7.25H16.5C16.8034 7.25 17.0768 7.43273 17.1929 7.71299C17.309 7.99324 17.2449 8.31583 17.0304 8.53033L15.3107 10.25H16.5C16.9142 10.25 17.25 10.5858 17.25 11C17.25 11.4142 16.9142 11.75 16.5 11.75H13.5C13.1967 11.75 12.9232 11.5673 12.8071 11.287C12.691 11.0068 12.7552 10.6842 12.9697 10.4697L14.6894 8.75H13.5Z"
                  fill="white"
                ></path>{" "}
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  fill="white"
                ></path>{" "}
              </g>
            </svg>
          </div>):(
            <div className="light" onClick={() => {
            setDark(!dark);
          }}>
            <svg
              width="40px"
              height="64px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
                  stroke="#04213B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </div>
          )
          }
        </div>
      </div>
      <div className="game-div">
        <div className="game-box">
          <div className="top-div">
            <div className="top-box">
              <div className="ques-number">Ques {count+1} / {ques.length}</div>
              <div className="highlight" onClick={()=>{
                setHighlight(!highlight)
              }}>H</div>
            </div>
          </div>
          <div className="ques-div">
            <div className="ques-box" style={{color: highlight?"red":"#04213B"}}>
              <p className="ques">{ques[count].text}</p>
            </div>
          </div>
          <div className="option-div">
          {ques[count].options.map((e)=>{
            return <div className="option" onClick={()=>{
                optionSelected(e.isCorrect)
            }}>{e.text}</div>
          })}

          </div>
        </div>
      </div>
    </>
  );
}
