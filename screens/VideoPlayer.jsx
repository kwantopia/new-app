import * as React from "react";
import { View, Button, StyleSheet, TextInput } from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";

export default function VideoPlayer() {
  const video = React.useRef(null);

  const videoUri = "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4";
  const [text, setText] = React.useState(videoUri)
  const [status, setStatus] = React.useState({});

  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        style={{ fontSize: 12, color: "steelblue" }}
        placeholder="Type here..."
        onChangeText={(text) => {
          setText(text);
        }}
      />
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: text,
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? "Pause" : "Play"}
          onPress={() =>
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  video: {
    alignSelf: "center",
    width: 320,
    height: 200,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
