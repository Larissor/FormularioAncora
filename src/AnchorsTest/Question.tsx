import { Question as QuestionType } from "../questions";

export const Question = ({ question }: { question: QuestionType }) => {
  return (
    <div key={question.id}>
      <span class="id">{question.id}</span> -{" "}
      <span class="question">{question.text}</span>
    </div>
  );
};
