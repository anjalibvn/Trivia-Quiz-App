import './index.css';
import React, { useEffect, useMemo, useState } from 'react';
import Trivia from './trivia';
import Timer from './Timer';
function App() {
  const [questionNumber,setQuestionNumber] = useState(1)
 // const [timeOut,setTimeout] = useState(false)
  //const [selectedAnswer,setSelectedAnswer]=useState(null);
  const [stop,setStop]=useState(false);
  const [earned,setEarned]=useState("$ 0");
  const data = [
    {
      id:1,
      question : "Which is India's national animal ?",
      answers : [{
        text: "Tiger",
        correct : true,
      },
      {
        text: "Deer",
        correct : false,
      },
      {
        text: "Rhino",
        correct : false,
      }, 
      {
        text: "Leopard",
        correct : false,
      },
    ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Who played the character of Kapil Dev in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Varun",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: "Who designed Mickey Mouse?",
      answers: [
        {
          text: "Hangry",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Walt Disney",
          correct: true,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(()=>
  [
      {id:1,amount:"$ 100"},
      {id:2,amount:"$ 200"},
      {id:3,amount:"$ 300"},
      {id:4,amount:"$ 500"},
      {id:5,amount:"$ 1000"},
      {id:6,amount:"$ 1500"},
      {id:7,amount:"$ 2000"},
      {id:8,amount:"$ 2500"},
      {id:9,amount:"$ 3000"},
      {id:10,amount:"$ 4000"},
      {id:11,amount:"$ 5000"},
      {id:12,amount:"$ 8000"},
      {id:13,amount:"$ 10000"},
      {id:14,amount:"$ 140000"},
      {id:15,amount:"$ 150000"},
  ].reverse(),
 []);
  useEffect(()=>{
    questionNumber>1&& setEarned(moneyPyramid.find(m=>m.id===questionNumber-1).amount);
  },[moneyPyramid,questionNumber]
  );
  return (
    <div className="App">
        <div className="main">
         
          {stop?( <h1 className="endText">You Earned:{earned}</h1>):(
          <>  <div className="top">
            <div className="timer"><Timer setStop={setStop} questionNumber={questionNumber} ></Timer></div>
          </div>
          <div className="bottom">
            <Trivia data ={data}
            setStop={setStop}
            questionNumber={questionNumber}
            setQuestionNumber={setQuestionNumber}
            ></Trivia>
          </div>
      </>
          )}
         </div> 
        <div className="pyramid">
        <ul className='moneylist'>
        {moneyPyramid.map((m)=>(
          <li className= {m.id===questionNumber ? "moneyListItem active" :"moneyListItem"}>
  <span className='moneyListItemNumber'>{m.id}</span>
  <span className='moneyListItemAmount'>{m.amount}</span>
</li>
        ))}

        </ul></div>
    </div>
  );
}

export default App;
