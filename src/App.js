import React, { useState, useEffect } from "react";
import { ReactComponent as Loading } from "./assets/loading-bubbles.svg";
import { FadeInSection, Header, Hero, Step } from "./components";

import "./App.css";

const App = () => {
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    fetch(
      "https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge"
    )
      .then((response) => response.json())
      .then((response) => {
        setSteps(response.sort((a, b) => a.stepNumber - b.stepNumber));
      })
      .catch((e) => {
        console.log("There was an error grabbing the data ", e);
      });
  }, []);
  console.log("steps ", steps);
  return (
    <div>
      <Header />
      <Hero />
      <FadeInSection>
        <div className="content-container">
          <h2 className="fade-in">How It Works</h2>
          <div className="steps-container">
            {steps.length ? (
              steps.map((step) => (
                <Step
                  {...step.versionContent[0]}
                  stepNumber={step.stepNumber}
                />
              ))
            ) : (
              <Loading />
            )}
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default App;
