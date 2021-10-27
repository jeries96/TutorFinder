import React, { useEffect, useState } from "react";
import './survey.css'
import { Link, useHistory } from 'react-router-dom';
const serverSurvey = {
  firstRating: null,
  secondRating: null,
  thirdRating: null,
}

const Survey = () => {
  const [thankYou, setThankYou] = useState(false)
  const history = useHistory()

  function handlefirstClick(event) {
    serverSurvey.firstRating = event
  }
  function handlesecondClick(event) {
    serverSurvey.secondRating = event
  }
  function handlethirdClick(event) {
    serverSurvey.thirdRating = event
  }
  function HandleSurvey(event) {
    event.preventDefault();
    setThankYou(true)
  }
  return (
    <div>
      {!thankYou &&
        <form dir='rtl' className='form' onSubmit={HandleSurvey}>
          <h1> משוב לשיעור העזר</h1>
          <p class="question">כמה עזר לך השיעור להבין את החומר?</p>
          <div class="question-answer">
            <label><input type="radio" name="visited" value="1" onClick={() => handlefirstClick(1)} /> 1</label>
            <label><input type="radio" name="visited" value="2" onClick={() => handlefirstClick(2)} /> 2</label>
            <label><input type="radio" name="visited" value="3" onClick={() => handlefirstClick(3)} required /> 3</label>
            <label><input type="radio" name="visited" value="4" onClick={() => handlefirstClick(4)} /> 4</label>
            <label><input type="radio" name="visited" value="5" onClick={() => handlefirstClick(5)} /> 5</label>
          </div>
          <p class="question">איך הייתה ההוראה של המורה ?</p>
          <div class="question-answer">
            <label><input type="radio" name="needed" onClick={() => handlesecondClick(1)} /> 1</label>
            <label><input type="radio" name="needed" onClick={() => handlesecondClick(2)} /> 2</label>
            <label><input type="radio" name="needed" onClick={() => handlesecondClick(3)} /> 3</label>
            <label><input type="radio" name="needed" onClick={() => handlesecondClick(4)} required /> 4</label>
            <label><input type="radio" name="needed" onClick={() => handlesecondClick(5)} /> 5</label>
          </div>
          <p class="question">האם אתה ממליץ על מורה העזר?</p>
          <div class="question-answer">
            <label><input type="radio" name="easy" onClick={() => handlethirdClick(1)} /> 1</label>
            <label><input type="radio" name="easy" onClick={() => handlethirdClick(2)} /> 2</label>
            <label><input type="radio" name="easy" onClick={() => handlethirdClick(3)} /> 3</label>
            <label><input type="radio" name="easy" onClick={() => handlethirdClick(4)} /> 4</label>
            <label><input type="radio" name="easy" onClick={() => handlethirdClick(5)} required /> 5</label>
          </div>
          <div className="btn-block">
            <button type="submit" className='button'>שלח</button>
          </div>
        </form>
      }
      {thankYou && <div dir="rtl" id="thankyou-message">
        <p>תודה שמלאית את המשוב!</p>
        
        <p>אנחנו מעריכים את הזמן שלך מאוד!</p>
        </div>}
    </div>
  );

}

export default Survey;
