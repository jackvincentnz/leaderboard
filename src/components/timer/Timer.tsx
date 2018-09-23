// src/components/timer/Timer.tsx

import * as React from 'react';
import './Timer.css';

import * as prettyMs from 'pretty-ms';

interface State {
    startTimeMS: number;
    currentTimeMS: number;
    isRunning: boolean;
}

const tickInterval = 100;

class Timer extends React.Component<{}, State> {

    // TODO: move to props
    urlToLoad = "https://m.bestbuy.ca";
    
    timerID: NodeJS.Timer;
    
    urlLoaded: boolean;
    
    constructor(state: State) {
        super(state);
        this.state = { 
            startTimeMS: 0,
            currentTimeMS: 0,
            isRunning: false
        };
    }

    startTimer = () => {
        this.setState({ 
            startTimeMS: Date.now() - this.state.currentTimeMS,
            isRunning: true 
        });
        
        clearInterval(this.timerID);
        this.timerID = setInterval(() => {
            this.setState({ currentTimeMS: Date.now() - this.state.startTimeMS });
        }, tickInterval);

        if (!this.urlLoaded) {
            this.openInNewTab(this.urlToLoad);
            this.urlLoaded = true;
        }
        console.log("Started timer");
    }

    stopTimer = () => {
        clearInterval(this.timerID);
        this.setState({ isRunning: false });
        console.log("Stopped timer");
    }

    resetTimer = () => {
        this.stopTimer();
        this.setState({ currentTimeMS: 0 });
        this.urlLoaded = false;
        console.log("Reset timer");
    }

    render() {
        let start = (this.state.currentTimeMS == 0) ? 
        <button onClick={this.startTimer}>Start</button> : null

        let stop = (this.state.isRunning) ? 
        <button onClick={this.stopTimer}>Stop</button> : null

        let reset = (this.state.currentTimeMS != 0 && !this.state.isRunning) ? 
        <button onClick={this.resetTimer}>Reset</button> : null

        let resume = (this.state.currentTimeMS != 0 && !this.state.isRunning) ?
        <button onClick={this.startTimer}>Resume</button> : null

      return (
        <div className="timer">
          <div className="time-display">
            {(prettyMs(this.state.currentTimeMS, {keepDecimalsOnWholeSeconds: true}))}
          </div>
          {start}
          {stop}
          {resume}
          {reset}
        </div>
      );
    }

    // TODO: move this function to another component
    openInNewTab(url: string) {
        var win = window.open(url, '_blank');
        if (win != null) {
            win.focus();
        }
      }
  }

export default Timer;
