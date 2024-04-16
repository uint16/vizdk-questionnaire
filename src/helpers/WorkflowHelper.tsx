import { useEffect, useState } from "react";
import { useQuestionnaire } from "../hooks/useQuestionnaires";
import RadioQuestion from "../components/question/RadioQuestion";
import "./Workflow.css"
import QuestionnaireSummary from "../components/summary/Summary";

const WorkflowHelper = () => {

  const { questionnaire, isLoading, isSuccess, isError } = useQuestionnaire();
  const [formStep, setFormStep] = useState(0);
  const [canMoveNext, setCanMoveNext] = useState(false);
  const [isNextStepSummary, setIsNextStepSummary] = useState(false);
  const [showSummary, setShowSummary] = useState<boolean>(false);

  const nextQuestion = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (formStep < questionnaire?.questions.length - 1) {
      setFormStep(formStep + 1);
    } else {
      setShowSummary(true);
    }
  }

  useEffect(() => {

    setCanMoveNext(false);

    if (formStep === questionnaire?.questions.length - 1) {
      setIsNextStepSummary(true);
    }

  }, [formStep])

  if (isError) {
    return <p>Error loading content</p>
  }

  return (
    <>
      {/* {isLoading && <Loading />} */}
      {isSuccess && (<div>
        {!showSummary && (
          <RadioQuestion currentQuestion={questionnaire?.questions[formStep]} setHasBeenAnswered={setCanMoveNext} isFinalQuestion={isNextStepSummary} />
        )}
        {showSummary && (
          <QuestionnaireSummary actions={questionnaire?.questions[questionnaire?.questions.length - 1]?.next} outcomes={questionnaire?.outcomes} />
        )}
        <div className="grid grid-cols-1 gap-4  content-center mt-6 ">
          {!showSummary && <button className="action-button flex text-center justify-between py-2 px-4 rounded" id="next-question" onClick={nextQuestion} disabled={!canMoveNext}>
            Next
            <svg
              className="ml-2"
              width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="chevron/right">
                <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M7.29317 2.29262C7.68384 1.90225 8.317 1.90249 8.70738 2.29317L17.7074 11.3001C18.0975 11.6905 18.0975 12.3233 17.7074 12.7138L8.72121 21.7068C8.33084 22.0975 7.69767 22.0978 7.307 21.7074C6.91632 21.317 6.91608 20.6838 7.30645 20.2932L15.5863 12.0069L7.29262 3.70683C6.90225 3.31616 6.90249 2.683 7.29317 2.29262Z" fill="currentColor" />
              </g>
            </svg>
          </button>}
        </div>
      </div>)}
    </>
  );
}

export default WorkflowHelper;