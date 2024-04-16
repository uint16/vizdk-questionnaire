import React from "react";

interface IFormQuestionnaireContext {
  userResponses:{[key: string]: any}
  hasErrors: boolean;
  isSuccessful: boolean;
  isActionable: boolean;
  getStepIndex?(stepId: string): number;
  setUserResponses?(responses: {[key: string]: any}): void
}

const FormQuestionnaireContext = React.createContext<IFormQuestionnaireContext>({
  userResponses: {},
  hasErrors: false,
  isSuccessful: false,
  isActionable: false,
  getStepIndex: undefined,
  setUserResponses: undefined
})

export const FormQuestionnaireProvider = FormQuestionnaireContext.Provider;
export const useFormQuestionnaireContext = () => React.useContext(FormQuestionnaireContext);