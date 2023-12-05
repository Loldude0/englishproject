import React, { useEffect } from 'react';
import './App.css';
import { FullPage, Slide } from 'react-full-page';

function App() {
  return (
    <div className="App">
      <FullPage>
        <Slide>
          <div className="centered-content">
            <h1>Artificial Intelligence and the Future of Work</h1>
            <p>(I'm working on 3d text, effects, transitions, images, and more cool features you won't see on a normal website)</p>
          </div>
        </Slide>
        <Slide>
          <div className="centered-content">
            <h1>But wait, what even is Artificial Intelligence?</h1>
          </div>
        </Slide>
        <Slide>
          <div className="centered-content">
            <h1>Artificial Intelligence is a technology capable of performing non-routine, cognitive tasks that typically requires human intelligence</h1>
          </div>
        </Slide>
        <Slide>
          <div className="centered-content">
            <h1>//TODO: insert embeds of current AI models that the user of the website can try out</h1>
          </div>
        </Slide>
        <Slide>
          <div className="centered-content">
            <h1>Soo...does that mean our jobs are in danger because AI will be able to perform all the tasks we can?</h1>
          </div>
        </Slide>
        <Slide>
          <div className="centered-content">
            <h1>No! AI will complement human capabilities and push society further ahead. Furthermore, Artificial Intelligence will create new jobs with a different set of skills in creativity, problem-solving, and emotional intelligence that are yet to be discovered.</h1>
          </div>
        </Slide>
        <Slide>
          <div className="centered-content">
            <h1>//TODO: give proof and stuff that AI isn't actually a danger in the next 2-3 slides</h1>
          </div>
        </Slide>
      </FullPage>
    </div>
  );
}

export default App;