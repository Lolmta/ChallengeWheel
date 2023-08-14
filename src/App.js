import { observer } from "mobx-react-lite";

import Challenge from "./views/Challenge";
import InfoScreen from "./views/InfoScreen";

import challengeStore from "./stores/challenge-store";

import "./theme/main.css";

const App = observer(() => {
  const { isStart, timeIsUp } = challengeStore;

  if (timeIsUp) {
    return <InfoScreen />;
  }

  return (
    <div>
      {!isStart && <InfoScreen />}
      {isStart && <Challenge />}
    </div>
  );
});

export default App;
