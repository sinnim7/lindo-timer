// Import

// Actions

const START_TIMER = "START_TIMER";
const STOP_TIMER = "STOP_TIMER";
const CONTINUE_TIMER = "CONTINUE_TIMER";
const RESTART_TIMER = "RESTART_TIMER";
const ADD_SECOND = "ADD_SECOND";

// Actions Creators

function startTimer() {
  return {
    type: START_TIMER
  };
}

function stopTimer() {
  return {
    type: STOP_TIMER
  };
}

function continueTimer() {
  return {
    type: CONTINUE_TIMER
  };
}

function restartTimer() {
  return {
    type: RESTART_TIMER
  };
}

function addSecond() {
  return {
    type: ADD_SECOND
  };
}

// Reducer

const TIMER_DURATION = 600;

const initialState = {
  isPlaying: false,
  isStopping: false,
  isContinue: false,
  elapsedTime: 0,
  timerDuration: TIMER_DURATION
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case START_TIMER:
      return applyStartTimer(state, action);
    case STOP_TIMER:
      return applyStopTimer(state, action);
    case CONTINUE_TIMER:
      return applyContinueTimer(state, action);
    case RESTART_TIMER:
      return applyRestartTimer(state, action);
    case ADD_SECOND:
      return applyAddSecond(state, action);
    default:
      return state;
  }
}

// Reducer Functions

function applyStartTimer(state) {
  return {
    ...state, //현재 상태에서 다음 몇개를 변환(transformation)한다는 얘기
    isPlaying: true
  };
}

function applyStopTimer(state) {
  return {
    ...state,
    isPlaying: false,
    isStopping: true,
    isContinue: true,
    elapsedTime: state.elapsedTime
  };
}

function applyContinueTimer(state) {
  return {
    ...state,
    isPlaying: true,
    isStopping: false,
    isContinue: true,
    elapsedTime: state.elapsedTime
  };
}

function applyRestartTimer(state) {
  return {
    ...state,
    isPlaying: false,
    isStopping: false,
    isContinue: false,
    elapsedTime: 0
  };
}

function applyAddSecond(state) {
  if (state.elapsedTime < TIMER_DURATION) {
    return {
      ...state,
      elapsedTime: state.elapsedTime + 1
    };
  } else {
    return {
      ...state,
      isPlaying: false
    };
  }
}

// Export Action Creators

const actionCreators = {
  startTimer,
  stopTimer,
  continueTimer,
  restartTimer,
  addSecond
};

export { actionCreators };

// Export Reducer

export default reducer;
