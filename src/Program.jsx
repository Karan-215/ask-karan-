import React from "react";
import Input from "./Input";
import Button from "./Buttons";

function Program(props) {
  const fixedMessage = "Hi Karan , please answer my question ";
  const [petition, setPetition] = React.useState("");

  let [answer, setAnswer] = React.useState("");

  const [magicMode, setMagicMode] = React.useState(false);

  const [bracket, setBracket] = React.useState(false);

  const onPetitionChange = (event) => {
    const newPetition = event.target.value;
    const newLength = newPetition.length;
    const oldLength = petition.length;

    if (newPetition.includes("[")) {
      setBracket(true);
    }

    if (newPetition.includes("[")) {
      setMagicMode(!magicMode);

      setPetition(fixedMessage.substring(0, newLength));
    } else if (magicMode) {
      setPetition(fixedMessage.substring(0, newLength));

      if (newLength < oldLength) {
        setAnswer(answer.substring(0, answer.length - 1));
      } else {
        setAnswer(answer + newPetition.substring(newPetition.length - 1));
      }
    } else {
      setPetition(newPetition);
    }
  };

  const [question, setQuestion] = React.useState("");

  const [popUp, setPopUp] = React.useState(false);

  const onQuestionChange = (event) => {
    const newQuestion = event.target.value;
    setQuestion(newQuestion);

    if (newQuestion.includes("?")) {
      setPopUp(true);
    }
  };
  const Reset = () => {
		setPopUp(false);
    setPetition('');
    setQuestion('');
    setAnswer('');
    setBracket(false);
    
  };
	  if (bracket === false) {
    answer = "Aisa b koi poochta hai kya bhai ";
  }
  return (
    <div className=" px-4 py-2  w-2/5 flex flex-col bg-gray-800 items-start space-y-2">
      <h3 className="text-xl font-semibold">Type Your Petition</h3>
      <Input
        value={petition}
        placeholder="Petition"
        onChange={onPetitionChange}
      />

      <h3 className="text-xl font-semibold"> Type Your Question</h3>
      <Input
        value={question}
        onChange={onQuestionChange}
        placeholder="Question"
      />

      {popUp && (
        <div className=" fixed items-center justify-center flex   top-0 left-0 h-screen w-screen">l
          <div className="  bg-gray-900  text-white  w-[50vw] h-60">
            <Button
              className="shadow-md shadow-pink-400 rounded-md"
              onClick={Reset}
            >
              Try once more buuddy?
            </Button>
            <div className="mt-10 flex flex-col items-center justify-center">
              
              <div>
                Karan Answers <div>______________</div>{""}
              </div>
              "{answer}"
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Program;
