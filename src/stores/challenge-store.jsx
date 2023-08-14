import { makeAutoObservable } from "mobx";

class ChallengeStore {
  isStart = false;
  points = 0;
  timeIsUp = false;

  constructor() {
    makeAutoObservable(this);
  }

  setStart = () => {
    this.isStart = true;
  };

  setTimeIsUp = () => {
    this.timeIsUp = true;
  };

  increasePoints = () => {
    this.points += 1;
  };

  resetChallenge = () => {
    this.isStart = true;
    this.points = 0;
    this.timeIsUp = false;
  };
}

const challengeStore = new ChallengeStore();
export default challengeStore;
