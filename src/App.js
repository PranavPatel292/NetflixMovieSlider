import { useState } from "react";
import "./App.css";

import {
  makeLinkList,
  getBackNNode,
  getShowNNode,
  getNextNNode,
} from "./D_LinkList";

const movieLists = [
  "Interstellar (2014)",
  "The Strangers (2008)",
  "Spider-Man (2002)",
  "Spider-Man 2 (2004)",
  "The Fantastic Four",
  "The Day After Tomorrow (2004)",
  "I, Robot (2004)",
  "Spider-Man 3 (2007)",
  "Iron Man (2008)",
  "Bridget Jones's Diary (2001)",
  "Turbo (2013)",
  "Ocean's Eleven (2001)",
  "Jurassic Park (1993)",
  "Pleasantville (1998)",
  "The Mummy (1999)",
  "Pulp Fiction (1994)",
  "Ferris Bueller's Day Off (1986)",
  "Primal Fear (1996)",
  "Hotel Transylvania (2012)",
  "Intermission (2003)",
  "2012 (2009)",
  "Little Miss Sunshine (2006)",
  "The Purge (2013)",
  "The Aviator (2004)",
  "Hancock (2008)",
  "The Usual Suspects (1995)",
  "Calamity Jane (1953)",
  "My Dog Skip (2000)",
  "Frozen (2013)",
  "Good Will Hunting (1997)",
  "The Batman (2022)",
  "Top Gun: Maverick (2022)",
];

let isFirstClick = true;
let startNodeForBackN = null;
let startNodeForNextN = null;

const head = makeLinkList(movieLists);

let [currentFour, startNodeForBackNCurrent, startNodeForNextNCurrent] =
  getShowNNode(head, "NEXT", 4, startNodeForBackN, startNodeForNextN);
startNodeForBackN = startNodeForBackNCurrent;
startNodeForNextN = startNodeForNextNCurrent;

let prevFour = getBackNNode(head.prev, 4);

let nextFour = getNextNNode(startNodeForNextN, 4);

function App() {
  const [animation, setAnimation] = useState(false);
  const [backButton, setBackButton] = useState(false);

  // need to create prevFour, currentFour, and nextFour

  // console.log(currentFour, prevFour, nextFour);

  // state varibale for all the divs
  const [first, setFirst] = useState(currentFour[0]);
  const [second, setSecond] = useState(currentFour[1]);
  const [third, setThird] = useState(currentFour[2]);
  const [fourth, setFourth] = useState(currentFour[3]);
  const [fifth, setFifth] = useState(nextFour[0]);
  const [six, setSix] = useState(nextFour[1]);
  const [seven, setSeven] = useState(nextFour[0]);
  const [eight, setEight] = useState(nextFour[1]);
  const [nine, setNine] = useState(nextFour[2]);
  const [ten, setTen] = useState(nextFour[3]);
  const [eleven, setEleven] = useState(prevFour[2]);
  const [twelve, setTwelve] = useState(prevFour[3]);

  const handleForwardClick = () => {
    setAnimation(true);

    [currentFour, startNodeForBackNCurrent, startNodeForNextNCurrent] =
      getShowNNode(
        startNodeForNextN,
        "NEXT",
        4,
        startNodeForBackN,
        startNodeForNextN
      );

    startNodeForBackN = startNodeForBackNCurrent;
    startNodeForNextN = startNodeForNextNCurrent;

    prevFour = getBackNNode(startNodeForBackN.prev, 4);
    nextFour = getNextNNode(startNodeForNextN, 4);

    setTimeout(() => {
      if (isFirstClick) isFirstClick = false;
      setAnimation(false);
      setFirst(prevFour[0]);
      setSecond(prevFour[1]);
      setThird(prevFour[2]);
      setFourth(prevFour[3]);

      setFifth(currentFour[0]);
      setSix(currentFour[1]);
      setSeven(currentFour[2]);
      setEight(currentFour[3]);

      setNine(nextFour[0]);
      setTen(nextFour[1]);
      setEleven(nextFour[2]);
      setTwelve(nextFour[3]);
    }, 1000);

    // make the first six -> current six
    // current next=> 14
  };

  const handleBackClick = () => {
    setAnimation(true);
    setBackButton(true);

    [currentFour, startNodeForBackNCurrent, startNodeForNextNCurrent] =
      getShowNNode(
        startNodeForBackN,
        "BACK",
        4,
        startNodeForBackN,
        startNodeForNextN
      );

    startNodeForBackN = startNodeForBackNCurrent;
    startNodeForNextN = startNodeForNextNCurrent;

    prevFour = getBackNNode(startNodeForBackN.prev, 4);
    nextFour = getNextNNode(startNodeForNextN, 4);

    setTimeout(() => {
      setAnimation(false);
      setBackButton(false);
      setFirst(prevFour[0]);
      setSecond(prevFour[1]);
      setThird(prevFour[2]);
      setFourth(prevFour[3]);

      setFifth(currentFour[3]);
      setSix(currentFour[2]);
      setSeven(currentFour[1]);
      setEight(currentFour[0]);

      setNine(nextFour[0]);
      setTen(nextFour[1]);
      setEleven(nextFour[2]);
      setTwelve(nextFour[3]);
    }, 1000);
  };

  return (
    <div className="w-full overflow-hidden ">
      <div className="">
        {/* silder container */}
        <div className={`flex overflow-x-scroll `}>
          {/* slider */}
          <div
            className={`flex items-center text-white ${
              animation
                ? `${
                    !isFirstClick
                      ? `${
                          !backButton
                            ? "transition-all ease-in duration-75 translate-x-[-66.5%] "
                            : "transition-all ease-in duration-75 translate-x-[ 0%]"
                        }`
                      : "transition-all ease-in duration-75 translate-x-[-50%]"
                  }`
                : `${
                    isFirstClick && !animation
                      ? "translate-x-0"
                      : "translate-x-[-33.3%]"
                  }`
            } `}
          >
            {/* prev movie silder */}
            <div className="w-[300px] h-[200px]  m-9 bg-green-400 text-center font-bold relative flex justify-center items-center rounded-2xl hover:scale-110">
              <h1 id="movie-1">{first}</h1>
            </div>

            <div className="w-[300px] h-[200px] m-9 bg-green-400 text-center font-bold relative flex justify-center items-center rounded-2xl">
              <h1 id="movie-2">{second}</h1>
            </div>

            <div className="w-[300px] h-[200px] m-9 bg-green-400 text-center font-bold relative flex justify-center items-center rounded-2xl">
              <h1 id="movie-3 ">{third}</h1>
            </div>

            <div className="w-[300px] h-[200px] m-9 bg-green-400 text-center font-bold relative flex justify-center items-center rounded-2xl">
              <h1 id="movie-4 ">{fourth}</h1>
            </div>

            {/* current movie slider */}

            <div className="w-[300px] h-[200px] m-9 bg-green-400 text-center font-bold relative flex justify-center items-center rounded-2xl">
              <h1 id="movie-5 ">{fifth}</h1>
            </div>

            <div className="w-[300px] h-[200px] m-9 bg-green-400 text-center font-bold relative flex justify-center items-center rounded-2xl">
              <h1 id="movie-6 ">{six}</h1>
            </div>

            <div className="w-[300px] h-[200px] m-9 bg-green-400 text-center font-bold relative flex justify-center items-center rounded-2xl">
              <h1 id="movie-7">{seven}</h1>
            </div>

            <div className="w-[300px] h-[200px] m-9 bg-green-400 text-center font-bold relative flex justify-center items-center rounded-2xl">
              <h1 id="movie-8 ">{eight}</h1>
            </div>

            {/* next movie slider */}

            <div className="w-[300px] h-[200px] m-9 bg-green-400 text-center font-bold relative flex justify-center items-center rounded-2xl">
              <h1 id="movie-9 ">{nine}</h1>
            </div>

            <div className="w-[300px] h-[200px] m-9 bg-green-400 text-center font-bold relative flex justify-center items-center rounded-2xl">
              <h1 id="movie-10 ">{ten}</h1>
            </div>

            <div className="w-[300px] h-[200px] m-9 bg-green-400 text-center font-bold relative flex justify-center items-center rounded-2xl">
              <h1 id="movie-11 ">{eleven}</h1>
            </div>

            <div className="w-[300px] h-[200px] m-9 bg-green-400 text-center font-bold relative flex justify-center items-center rounded-2xl">
              <h1 id="movie-12 ">{twelve}</h1>
            </div>
          </div>
        </div>

        {/* button */}
        <button
          className="border-2 p-3 mt-10 ml-10 absolute rounded-2xl text-white"
          onClick={handleForwardClick}
        >
          Next
        </button>

        {!isFirstClick && (
          <button
            className="border-2 p-3 mt-10  absolute rounded-2xl ml-36 text-white"
            onClick={handleBackClick}
          >
            Back
          </button>
        )}

        <div className="mt-64 w-full flex justify-center items-center">
          <h1 className="text-white text-5xl font-mono">
            No resposive design yet
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
