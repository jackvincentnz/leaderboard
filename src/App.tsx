import * as React from 'react';
import './App.css';

import Timer from './components/timer';
import Leaderboard from './components/leaderboard';
import Result from './components/leaderboard/Result';

class App extends React.Component {
  
  public render() {

    let results: Array<Result> = [];
    
    let result = new Result();
    result.id = "1";
    result.name = "Jack";
    result.time = "8ms";

    results.push(result);

    return (
      <div className="App">
        <Timer />
        <Leaderboard results={results} />
      </div>
    );
  }
}

export default App;
