import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Stepone from './components/Stepone';
import Steptwo from './components/Steptwo';
import Stepthree from './components/Stepthree';

function App() {
  const [data, setData] = useState({});
  const [progress, setProgress] = useState({
    stepone: false,
    steptwo: false,
    stepthree: false
  });

  return (
    <main className="w-screen h-screen flex flex-col gap-8 justify-center items-center max-w-2xl mx-auto">
      {!progress.stepone &&
        (
          <Stepone data={data} setData={setData} progress={progress} setProgress={setProgress}/>
        )
      }

      {(progress.stepone && !progress.steptwo) &&
        (
          <Steptwo data={data} setData={setData} progress={progress} setProgress={setProgress}/>
        )
      }

      {(progress.steptwo && !progress.stepthree) &&
        (
          <Stepthree data={data} setData={setData} progress={progress} setProgress={setProgress}/>
        )
      }

      {(progress.stepone && progress.steptwo && progress.stepthree) &&
        (
          <h2>Form completed</h2>
        )
      }
    </main>
  );
}

export default App;
