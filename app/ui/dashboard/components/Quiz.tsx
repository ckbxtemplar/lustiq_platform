"use client";

import { useState } from "react";
import { Container, Card } from "react-bootstrap";
import { Button } from '@/app/ui/button';

type QuizData = {
  question: string;
  options: string[];
  correct: string;
};

type QuizProps = {
  quizData: QuizData[];
};

export default function Quiz({ quizData }: QuizProps) {
	if (!Array.isArray(quizData) || quizData.length == 0) return false;
	console.log('____');
	console.log(quizData);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<{ question: string; selected: string; correct: string }[]>([]);
  const [animationClass, setAnimationClass] = useState("fade-in");

  const handleAnswer = (answer: string) => {
    setUserAnswers([...userAnswers, { 
      question: quizData[currentQuestion].question, 
      selected: answer, 
      correct: quizData[currentQuestion].correct
    }]);

    setAnimationClass("fade-out");

    setTimeout(() => {
      setCurrentQuestion((prev) => prev + 1);
      setAnimationClass("reset-position");

      setTimeout(() => {
        setAnimationClass("fade-in");
      }, 50);
    }, 300);
  };

  if (currentQuestion >= quizData.length) {
		const correctCount = userAnswers.filter(ans => ans.selected === ans.correct).length;
  
		return (
			<Container className="text-center mt-3">
				<h2>{`${quizData.length}/${correctCount} helyes válasz`}</h2>
				<ul className="list-unstyled mt-4">
					{userAnswers.map((answer, index) => (
						<li key={index} className="mb-2">
							<strong>{answer.question}</strong> - 
							<span className={answer.selected === answer.correct ? "text-success" : "text-danger"}>
								{` ${answer.selected}`}
							</span>
							{answer.selected !== answer.correct && (
								<span className="text-muted">{` (Helyes: ${answer.correct})`}</span>
							)}
						</li>
					))}
				</ul>
			</Container>
		);
  }

  return (
    <Container className="mt-4 p-0" style={{ overflow: 'hidden' }}>
			<div className="w-100 px-1 px-lg-5">
				<div className="progress w-100 progress-bar-striped" style={{height: '24px'}}>
					{quizData.map((_, index) => (
						<div
							key={index}
							className={`text-center d-flex flex-column justify-content-center ${index < currentQuestion ? "progress-bar bg-warning" : ""} 
												${index === currentQuestion ? "progress-bar bg-warning progress-bar-striped progress-bar-animated" : ""}`}
							style={{ width: `${100 / quizData.length}%` }}
						>
								<span>{index + 1}.</span>
						</div>
					))}
				</div>
			</div>
			<div className="w-100 d-flex justify-content-center">
				<Card className={`mt-4 p-0 border-0 quiz-card ${animationClass}`} style={{ width: "100%" }}>
					<h4 className="mb-4">{quizData[currentQuestion].question}</h4>
					<div className="px-0 px-lg-5 mt-0 mb-3 quiz-card-answers">
						{quizData[currentQuestion].options.map((option, index) => (
							<Button key={index} className="btn_small mb-2 w-100 w-lg-75" onClick={() => handleAnswer(option)}>
								<span>
									<small>{option}</small>
									<small>{option}</small>
								</span>
							</Button>
						))}
					</div>
				</Card>
			</div>				
    </Container>
  );
}
