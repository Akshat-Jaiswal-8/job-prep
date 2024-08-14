import {PiMicrophone} from "react-icons/pi";
import {useState, useEffect} from "react";
import "regenerator-runtime/runtime";
import SpeechRecognition, {useSpeechRecognition} from "react-speech-recognition";
import checkAnswer from "../services/TextToGpt.js";
import axios from "axios";

export const Questions = ({question, answers, dispatch}) => {
    const [answerText, setAnswerText] = useState("");
    const [start, setStart] = useState(false);
    const [finish, setFinish] = useState(false);
    const [audio, setAudio] = useState(null);

    const {transcript, browserSupportsSpeechRecognition, resetTranscript} = useSpeechRecognition();

    useEffect(() => {
        setAnswerText(transcript);
    }, [transcript]);

    if (!browserSupportsSpeechRecognition) {
        return null;
    }

    const handleStop = () => {
        setStart(false);
        SpeechRecognition.stopListening();
    };

    const handleStart = () => {
        SpeechRecognition.startListening({continuous: true, language: "en-IN"});
        setStart(true);
    };

    const handleNext = () => {
        setFinish(false);
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }
        dispatch({type: "nextQuestion"});
        setAnswerText("");
        resetTranscript();
    };

    const handleFinish = async () => {
        setFinish(true);
        await checkAnswer({question, answers});
        try {
            const response = await axios({
                method: 'post',
                url: 'https://job-prep.onrender.com:8000/synthesize',
                data: {text: answers},
                responseType: 'blob',
            });

            const audioBlob = response.data;
            const audioUrl = URL.createObjectURL(audioBlob);
            const newAudio = new Audio(audioUrl);
            setAudio(newAudio);
            newAudio.play();
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <h4 className="border-b-2 border-dashed border-gray-600 mx-40 text-3xl p-3 text-center mb-16">
                {question}
            </h4>

            <div className="text-center mb-16">
                {start ? (
                    <button onClick={handleStop} className="btn btn-primary text-center">
                        Stop <PiMicrophone/>
                    </button>
                ) : (
                    <button onClick={handleStart} className="btn btn-primary text-center">
                        Start <PiMicrophone/>
                    </button>
                )}

                <button
                    className="btn btn-primary btn-outline m-4"
                    onClick={handleNext}
                    disabled={!finish}
                >
                    Next
                </button>
            </div>
            <div className="textarea textarea-bordered h-[20rem] mt-20 mb-10 mx-20 text-2xl">
                <p className="mb-2">Your Answer - </p>
                <p className="font-poppins">{answerText}</p>
            </div>
            <div className="text-center">
                <button onClick={handleFinish} className="btn btn-primary text-center mb-20">
                    Finish
                </button>

                {finish && (
                    <div className="textarea textarea-bordered h-[20rem] mb-10 mx-20 text-2xl">
                        <p className="mb-2">Correct Answer - </p>
                        <p className="font-poppins">{answers}</p>
                    </div>
                )}
            </div>
        </>
    );
};
