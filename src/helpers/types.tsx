type Answer = {
  id: string,
  label: string
}

export type NextAction= {
  outcome?: string,
  next_question?: string,
  answered?: string
}

export type Question = {
  id: string,
  question_text: string,
  answers: Answer[],
  next: NextAction[],
  selectedAnswer?: string
}

export type Outcome = {
  id: string,
  text: string,
}

export type Response = {
  question: string,
  answer: string,
}

export type Summary = {
  summaryHeader: string,
  summaryText: string,
  summaryActionText: string
}
