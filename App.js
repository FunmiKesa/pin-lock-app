import * as React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showPinLock: false,
      PINCodeStatus: "choose",
    };
  }

  _showChoosePinLock = () => {
    
  };

  _showEnterPinLock = async () => {
    
  };

  _clearPin = async () => {
   
  };

  

  _finishProcess = async () => {
   
  };

  render() {
    return (
      <View style={styles.container}>
        {!this.state.showPinLock && (
          <View>
            <View>
              <Text style={styles.title}><Text style={styles.bold}>Welcome to React Native Tutorial!</Text>{
                `\n\nIn this tutorial, we will use buttons to show how to use the\n`}
                <Text style={styles.bold}>@haskkor/react-native-pincode</Text>
                {`\npackage.`}
              </Text>
            </View>
            <View style={styles.button}>
              <Text style={styles.title}>
                Click on this button to set your PIN.
              </Text>
              <Button
                onPress={() => this._showChoosePinLock()}
                title="Set Pin"
              />
            </View>
            <View style={styles.seperator} />
            <View style={styles.button}>
            <Text style={styles.title}>
                Click on this button to enter your PIN.
              </Text>
              <Button
                onPress={() => this._showEnterPinLock()}
                title="Enter Pin"
              />
            </View>
            <View style={styles.seperator} />
            <View style={styles.button}>
            <Text style={styles.title}>
                Click on this button to clear your PIN.
              </Text>
              <Button onPress={() => this._clearPin()} title="Clear Pin" />
            </View>
          </View>
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    marginTop: 20,
  },
  button: {
    marginBottom: 10,
    padding: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  seperator: {
    margin: 10,
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;
