import React, { useEffect, useState } from "react";
import { NextAction, Outcome, Response } from "../../helpers/types";
import { useSelector } from 'react-redux';
import "../../helpers/Workflow.css"
import "./Summary.css"

interface SummaryProps {
  actions: NextAction[]
  outcomes: Outcome[]
}

const QuestionnaireSummary: React.FC<SummaryProps> = ({ actions, outcomes }) => {

  const [summary, setSummary] = useState<Outcome>()
  const results = useSelector((state: any) => {
    return {
      score: state.userResponses.responses.reduce((sum: number, current: { score: number }) => sum + current.score, 0)
    }
  })

  useEffect(() => {
    actions.forEach((action) => {
      const currentActionScore =  0;
      if (results.score <= currentActionScore || currentActionScore === 0) {
        const correspondingOutcome = outcomes?.find((outcome) => outcome.id === action.outcome);
        setSummary(correspondingOutcome)
        return;
      }
    })
  }, [results])
  
  return (<>
    <div className="max-w-md rounded p-6 mx-auto content-center">

      <p className="summary-text">{summary?.text}</p>
      
        <button className="action-button flex text-center justify-between py-2 px-4 rounded" id="book-meeting" >
          See Documentation
        </button>)
    </div>
  </>);
}

export default QuestionnaireSummary;