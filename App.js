import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, View } from "react-native";
import { Slider } from "react-native-awesome-slider";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

const choices = [
  { label: "Strongly Disagree", value: 0 },
  { label: "Disagree", value: 1 },
  { label: "Agree", value: 2 },
  { label: "Strongly Agree", value: 3 },
];

export default function App() {
  const progress = useSharedValue(0);
  const min = useSharedValue(0);
  const max = useSharedValue(3);

  const choice0AnimatedStyle = useAnimatedStyle(() => {
    const isSelected = progress.value === 0;
    return {
      color: isSelected ? "red" : "grey",
      fontWeight: isSelected ? "700" : "400",
    };
  }, [progress.value]);
  const choice1AnimatedStyle = useAnimatedStyle(() => {
    const isSelected = progress.value === 1;
    return {
      color: isSelected ? "red" : "grey",
      fontWeight: isSelected ? "700" : "400",
    };
  }, [progress.value]);
  const choice2AnimatedStyle = useAnimatedStyle(() => {
    const isSelected = progress.value === 2;
    return {
      color: isSelected ? "red" : "grey",
      fontWeight: isSelected ? "700" : "400",
    };
  }, [progress.value]);
  const choice3AnimatedStyle = useAnimatedStyle(() => {
    const isSelected = progress.value === 3;
    return {
      color: isSelected ? "red" : "grey",
      fontWeight: isSelected ? "700" : "400",
    };
  }, [progress.value]);

  function onValueChange(value) {
    progress.value = value;
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <View style={[styles.choicesContainer, { marginTop: 300 }]}>
          <Pressable onPress={() => onValueChange(0)}>
            <Animated.Text style={[styles.choice, choice0AnimatedStyle]}>
              {choices[0].label}
            </Animated.Text>
          </Pressable>
          <Pressable onPress={() => onValueChange(1)}>
            <Animated.Text style={[styles.choice, choice1AnimatedStyle]}>
              {choices[1].label}
            </Animated.Text>
          </Pressable>
          <Pressable onPress={() => onValueChange(2)}>
            <Animated.Text style={[styles.choice, choice2AnimatedStyle]}>
              {choices[2].label}
            </Animated.Text>
          </Pressable>
          <Pressable onPress={() => onValueChange(3)}>
            <Animated.Text style={[styles.choice, choice3AnimatedStyle]}>
              {choices[3].label}
            </Animated.Text>
          </Pressable>
        </View>
        <Slider
          style={[styles.slider, { height: 100 }]}
          theme={{
            disableMinTrackTintColor: "#fff",
            maximumTrackTintColor: "red",
            minimumTrackTintColor: "#000",
            bubbleBackgroundColor: "red",
          }}
          //   containerStyle={styles.sliderContainer}
          progress={progress}
          minimumValue={min}
          maximumValue={max}
          step={3}
          renderBubble={() => <></>}
          renderMark={() => <></>}
          renderThumb={() => <></>}
          onValueChange={onValueChange}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  answerContainer: {
    marginVertical: 20,
  },
  choicesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  slider: {
    marginVertical: 20,
    marginHorizontal: 17,
  },
  sliderContainer: {
    borderRadius: 10,
  },
  choice: {
    fontSize: 10,
    marginLeft: 5,
  },
});
