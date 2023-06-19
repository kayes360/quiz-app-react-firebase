import React from 'react'

import Answers from '../Components/Answers.jsx' 
import Progressbar from '../Components/Progressbar.jsx'
import Miniplayer from '../Components/Miniplayer.jsx'

export default function Quiz() {
  return (
    <>
    <h1>Pick three of your favorite Star Wars Flims</h1>
    <h4>Question can have multiple answers</h4>
    <Answers/>
    <Progressbar/>
   
    <Miniplayer/>  
    </>
  )
}
