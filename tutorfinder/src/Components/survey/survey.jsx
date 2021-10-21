import React, { useEffect, useState } from "react";
import './survey.css'
import { Link, useHistory } from 'react-router-dom';
const serverSurvey = {
    firstRating: null,
    secondRating: null,
    thirdRating: null,
  }

const Survey = () => {
    const history = useHistory()

    function handlefirstClick(event){
        serverSurvey.firstRating = event
    }
    function handlesecondClick(event){
        serverSurvey.secondRating = event
    }
    function handlethirdClick(event){
        serverSurvey.thirdRating = event
    }
    function HandleSurvey(event) {
        console.log("HI", serverSurvey)
        event.preventDefault();

        fetch('/api/users/survey', {
            method: "POST",
            body: JSON.stringify({ serverSurvey}),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data.success) {
                    history.push('/')
                    window.location.reload(false)

                }
                else {
                    alert('wrong password / username')
                }
            });
    }
    return (
        <form dir='rtl' className='form' onSubmit={HandleSurvey}>
        <h1> משוב לשיעור העזר</h1>
        <p class="question">כמה עזר לך השיעור להבין את החומר?</p>
        <div class="question-answer">
          <label><input type="radio" name="visited" value="1" onClick={() => handlefirstClick(1)} /> 1</label>
          <label><input type="radio" name="visited" value="2" onClick={() => handlefirstClick(2)} /> 2</label>
          <label><input type="radio" name="visited" value="3" onClick={() => handlefirstClick(3)} /> 3</label>
          <label><input type="radio" name="visited" value="4" onClick={() => handlefirstClick(4)} /> 4</label>
          <label><input type="radio" name="visited" value="5" onClick={() => handlefirstClick(5)} /> 5</label>
        </div>
        <p class="question">איך הייתה ההוראה של המורה ?</p>
        <div class="question-answer">
          <label><input type="radio" name="needed" onClick={() => handlesecondClick(1)}/> 1</label>
          <label><input type="radio" name="needed" onClick={() => handlesecondClick(2)}/> 2</label>
          <label><input type="radio" name="needed" onClick={() => handlesecondClick(3)}/> 3</label>
          <label><input type="radio" name="needed" onClick={() => handlesecondClick(4)}/> 4</label>
          <label><input type="radio" name="needed" onClick={() => handlesecondClick(5)}/> 5</label>
        </div>
        <p class="question">האם אתה ממליץ על מורה העזר?</p>
        <div class="question-answer">
          <label><input type="radio" name="easy" onClick={() => handlethirdClick(1)} /> 1</label>
          <label><input type="radio" name="easy" onClick={() => handlethirdClick(2)} /> 2</label>
          <label><input type="radio" name="easy" onClick={() => handlethirdClick(3)} /> 3</label>
          <label><input type="radio" name="easy" onClick={() => handlethirdClick(4)} /> 4</label>
          <label><input type="radio" name="easy" onClick={() => handlethirdClick(5)} /> 5</label>
        </div>
        <div className="btn-block">
          <button type="submit" className='button'>שלח</button>
        </div>
      </form>
    );

}

export default Survey;
