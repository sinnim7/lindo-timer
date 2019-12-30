import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import Button from "../Button";

// 초 -> 분 변환
function formatTime(time) {
  let min = Math.floor(time / 60);
  let sec = Math.floor(time % 60);
  if (min < 10) {
    min = `0` + min;
  }
  if (sec < 10) {
    sec = `0` + sec;
  }
  return `${min}:${sec}`;
}

class Timer extends Component {
  //componentWillReceiveProps는 컴포넌트가 새로운 props를 얻을 때마다 호출됨.
  componentWillReceiveProps(nextPorps) {
    const currentProps = this.props;
    // console.log(
    //   `The current isPlaying is: ${currentProps.isPlaying} and the new isPlaying is: ${nextPorps.isPlaying}`
    // );
    if (!currentProps.isPlaying && nextPorps.isPlaying) {
      //다음과 같음. if (currentProps.isPlaying === false && nextPorps.isPlaying === true) {
      const timerInterval = setInterval(() => {
        currentProps.addSecond();
      }, 1000);
      this.setState({
        timerInterval
      }); // timerInterval을 state에 저장. 그래야 clearInterval이 가능.
    } else if (currentProps.isPlaying && !nextPorps.isPlaying) {
      clearInterval(this.state.timerInterval);
    }
  }

  render() {
    // console.log(this.props);
    // console.log(this.props.elapsedTime);
    const {
      // Timer index에서 받아온 props임
      isPlaying,
      elapsedTime,
      timerDuration,
      startTimer,
      restartTimer,
      addSecond
    } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar barStyle={"light-content"} />
        <View style={styles.upper}>
          <Text style={styles.time}>
            {formatTime(timerDuration - elapsedTime)}
          </Text>
        </View>
        <View style={styles.lower}>
          {!isPlaying && (
            <Button iconName="play-circle-o" onPress={startTimer} />
          )}
          {isPlaying && (
            <Button iconName="stop-circle-o" onPress={restartTimer} />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red"
  },
  upper: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  lower: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  time: {
    color: "white",
    fontSize: 120,
    fontWeight: "100"
  }
});

export default Timer;
