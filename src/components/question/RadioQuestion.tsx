import React, { useState } from "react";
import { Question } from "../../helpers/types";
import "./Question.css"
import { addResponse } from "../../store/responseSlice";
import { useDispatch } from 'react-redux';

interface ISelectQuestionProps {
  currentQuestion: Question
  setHasBeenAnswered(hasBeenAnswered: boolean): void,
  isFinalQuestion: boolean
}
const RadioQuestion: React.FC<ISelectQuestionProps> = ({
  currentQuestion,
  setHasBeenAnswered,
  isFinalQuestion
}) => {
  const dispatch = useDispatch();
  const [selectedAnswer, setSelectedAnswer] = useState<string>();

  const onAnswerChange = (e: any) => {
    setSelectedAnswer(e.target.value);
    dispatch(
      addResponse({
        question: e.target.name,
        answer: e.target.id,
        summarise: isFinalQuestion
      }))
    setHasBeenAnswered(true);
  }

  if (!currentQuestion) {
    return null
  }

  return (
    <>
      <div>
        <div className="max-w-md rounded p-6 mx-auto content-center">
          <h4 className="question-text">
            {currentQuestion.question_text}
          </h4>
        </div>
        <div className="grid grid-cols-2 gap-4 content-center mt-6" >
          {currentQuestion?.answers?.map((answerOption) => {
            return (
              <div>

                <input
                  name={currentQuestion.id}
                  key={answerOption.id}
                  type="radio"
                  id={answerOption.id}
                  value={answerOption.id}
                  onChange={onAnswerChange}
                  defaultChecked={selectedAnswer === answerOption.id}
                  
                />
                <label htmlFor={answerOption.id}>
                  {answerOption.label}
                  {/* { selectedAnswer === answerOption.score && <FontAwesomeIcon icon={faCircleCheck}/> } */}
                </label>
              </div>
            )
          })}
        </div>

      </div>
    </>
  );
}

export default RadioQuestion;