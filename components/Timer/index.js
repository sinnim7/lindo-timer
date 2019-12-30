import { connect } from "react-redux"; // 내 컴포넌트를 스토어에 연결하는 것을 도움.
import { bindActionCreators } from "redux";
import Timer from "./presenter";
import { actionCreators as lindoActions } from "../../reducer";

//mapStateToProps는 컴포넌트(Timer)의 현재 state를 불러옴.
//state는 provider store에서 불러옴.
//<Provider store={store}><Timer /></Provider> 이 부분임.
//provider는 자동으로 Timer의 state를 복사함.
//store에 있는 state를 복사해 타이머에 붙여넣음.
//그리고 function안에서 state를 열고 props를 리턴하는 거임.
//그리고 mapStateToPropsfmf Timer와 연결함.
//Timer는 props를 갖고 있는 프레젠테이션 컴포넌트임.
//const { isPlaying, elapsedTime, timerDuration }
//presenter에서 왜 이런 props를 갖냐면
//이는 인덱스에서 골랐기 때문. return {isPlaying,elapsedTime,timerDuration};
function mapStateToProps(state) {
  const {
    isPlaying,
    isStopping,
    isContinue,
    elapsedTime,
    timerDuration
  } = state;
  return {
    isPlaying,
    isStopping,
    isContinue,
    elapsedTime,
    timerDuration
  };
}

//디스패치는 액션을 리듀서로 보내는 function임.
function mapDispatchToProps(dispatch) {
  return {
    startTimer: bindActionCreators(lindoActions.startTimer, dispatch), //startTimer을 dispatch와 묶음.
    stopTimer: bindActionCreators(lindoActions.stopTimer, dispatch),
    continueTimer: bindActionCreators(lindoActions.continueTimer, dispatch),
    restartTimer: bindActionCreators(lindoActions.restartTimer, dispatch),
    addSecond: bindActionCreators(lindoActions.addSecond, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
// 타이머를 mapStateToProps, mapDispatchToProps 와 연결함.
