"use client";

import { useState } from "react";
import { Container, Card } from "react-bootstrap";
import { Button } from '@/app/ui/button';

const quizData = [
  {
    question: "Mit jelent az asszertív kommunikáció?",
    options: [
			"A saját érzéseink és szükségleteink erőteljes és hangos érvényesítése.",
			"A saját érzéseink és szükségleteink figyelmen kívül hagyása a másik fél érdekében.", 
			"Őszinte, tiszteletteljes és határozott kommunikáció, amely figyelembe veszi másik fél érzéseit és jogait.", 
			"Mindig kedvesnek és engedékenynek lenni, hogy elkerüljük a konfliktusokat."
		],
    correct: "Őszinte, tiszteletteljes és határozott kommunikáció, amely figyelembe veszi másik fél érzéseit és jogait.",
  },	
  {
    question: "Melyik állítás jellemző az asszertív kommunikációra?",
    options: [
			"Mindig nyugodtnak és érzelmileg semlegesnek kell maradnunk.",
			"Képesek vagyunk világosan és határozottan kifejezni érzéseinket és szükségleteinket, miközben figyelünk a másik fél érzéseire is.",
			"Csak akkor kommunikálunk, ha biztosak vagyunk benne, hogy igazunk van.",
			"Az asszertív kommunikáció lényege, hogy megpróbálunk minden helyzetben a másik fél elvárásainak megfelelni."],
    correct: "Képesek vagyunk világosan és határozottan kifejezni érzéseinket és szükségleteinket, miközben figyelünk a másik fél érzéseire is.",
  },
  {
    question: "Melyik mondat példázza az asszertív kommunikációt?",
    options: [
			"„Az a baj veled, hogy érzéketlen vagy. Ha nem lennél érzéketlen, nem fogdosnád a zsírpárnáimat!”",
			"„Tudom, hogy nem akartál megbántani, de jelenleg bizonytalan vagyok a testemmel kapcsolatban, mert az utóbbi időben felszaladt rám néhány kiló, ezért bánt, amikor a zsírpárnáimat megfogod. Kérlek, ne csinálj ilyet többet.”", 
			"„Nem számít mit érzek, miközben fogdosod a zsírpárnáimat, csinálhatod, ha neked jól esik.”", 
			"„Semmi baj, nem számít, én vagyok túlérzékeny.”"
		],
    correct: "„Tudom, hogy nem akartál megbántani, de jelenleg bizonytalan vagyok a testemmel kapcsolatban, mert az utóbbi időben felszaladt rám néhány kiló, ezért bánt, amikor a zsírpárnáimat megfogod. Kérlek, ne csinálj ilyet többet.”",
  },
  {
    question: "Miért fontos az asszertív kommunikáció a szexuális életben?",
    options: [
			"Mert segít egyértelműen kifejezni a vágyakat és határokat anélkül, hogy a másik fél megbántva érezné magát.",
			"Mert így mindig a mi akaratunk érvényesül, és nem kell semmiről lemondanunk.", 
			"Mert elkerülhetjük vele a nehéz beszélgetéseket.", 
			"Mert így biztosan nem lesz konfliktus a párkapcsolatban."
		],
    correct: "Mert segít egyértelműen kifejezni a vágyakat és határokat anélkül, hogy a másik fél megbántva érezné magát.",
  },
  {
    question: "Melyik helyzet mutatja az asszertív kommunikáció alkalmazását egy szexuális szituációban?",
    options: [
			"Ha valami nem esik jól, inkább elhallgatjuk, hogy ne rontsuk el a hangulatot.",
			"Ha a partner valamit javasol, amit nem szeretnénk, határozottan és tiszteletteljesen jelezzük, hogy nekünk ez nem komfortos.", 
			"Ha nem tetszik valami, dühösen és sértődötten közöljük, hogy soha többet ne próbálkozzon ilyesmivel.", 
			"Mindig belemegyünk mindenbe, hogy a másik elégedett legyen."
		],
    correct: "Ha a partner valamit javasol, amit nem szeretnénk, határozottan és tiszteletteljesen jelezzük, hogy nekünk ez nem komfortos."
  }	
];

export default function Quiz() {
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
			<div className="w-100 px-5">
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
					<div className="px-5 mt-0 mb-3 quiz-card-answers">
						{quizData[currentQuestion].options.map((option, index) => (
							<Button key={index} className="btn_small mb-2 w-75" onClick={() => handleAnswer(option)}>
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
