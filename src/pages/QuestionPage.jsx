import { supabase } from "../services/supabase.js";
import { useEffect, useReducer } from "react";
import toast from "react-hot-toast";

const SECS_PER_QUESTION = 150;

const initialState = {
  questions: [],
  status: "loading", // loading, error, ready, active, finished
  index: 0,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: SECS_PER_QUESTION,
      };
    case "nextQuestion": {
      state.index++;
      if (state.index === state.questions.length) {
        return {
          ...state,
          status: "finished",
          highscore:
            state.points > state.highscore ? state.points : state.highscore,
        };
      }
      return {
        ...state,
        index: state.index,
        secondsRemaining: SECS_PER_QUESTION,
      };
    }
    // case "finish":
    //     return {
    //         ...state,
    //         status: "finished",
    //         highscore: state.points > state.highscore ? state.points : state.highscore
    //     }
    case "restart":
      return { ...initialState, questions: state.questions, status: "ready" };
    case "tick": {
      state.secondsRemaining--;
      if (state.secondsRemaining === 0)
        return {
          ...state,
          secondsRemaining: SECS_PER_QUESTION,
          index: state.index++,
        };
      return {
        ...state,
      };
    }

    default:
      throw new Error("Action unknown");
  }
}
export default function QuestionPage() {
  const [
    { questions, status, index, points, highscore, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);
  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (prev, curr) => prev + curr.points,
    0
  );

  useEffect(() => {
    const getQuestions = async () => {
      try {
        let { data: react } = await supabase.from("react").select("*");
        const arr = react.map((row) => {
          return row.questions;
        });
        dispatch({ type: "dataReceived", payload: arr });
      } catch (error) {
        toast.error(error);
      }
    };
    getQuestions();
  }, []);

  return (
    <>
      <div
        className={
          "my-16 mx-auto text-center text-5xl font-medium font-poppins"
        }
      >
        <span className={"flex gap-5 items-center  justify-center"}>
          <img
            className={"w-16 h-16 rounded-full items-center"}
            src={"/images/Javascript.png"}
          />
          THE JAVASCRIPT SHOWDOWN!
        </span>
      </div>
      <div className={"text-center text-3xl font-poppins font-medium mb-4"}>
        Welcome to Javascript interview Question!
      </div>
      <div
        className={"text-center font-roboto font-normal text-lg m-auto mb-10"}
      >
        Challenging Javascript Interview Questions to test your Javascript
        mastery.
      </div>
      <div className={"text-center"}>
        <button className={"btn btn-primary rounded-full "}>Let's Start</button>
      </div>
    </>
  );
}
