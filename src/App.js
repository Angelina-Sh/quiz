import React, {useState} from "react";
import Layout from "./hoc/Layout/Layout";
import Quiz from "./containers/Quiz";
import StartScreen from "./hoc/StartScreen/StartScreen";

function App() {
  const [showQuiz, setShowQuiz] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        <Layout>
          {showQuiz ? <Quiz /> : <StartScreen onStartQuiz={() => setShowQuiz(true)} />}
        </Layout>
      </header>
    </div>
  );
}


export default App;
