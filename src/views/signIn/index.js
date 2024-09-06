import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Card } from "react-native-paper";
import CardContent from "react-native-paper/src/components/Card/CardContent";

const SignIn = (props) => {
  return (
    <View style={styles.container}>
      <Card >
        <CardContent>
          <View style={{ flexDirection: 'column', gap: 10 }}>
            <Text style={styles.label}>Email</Text>
            <View style={styles.text}>
              <TextInput placeholder="Enter Email" name="email" type="text" />
            </View>

            <Text style={styles.label} >Password</Text>
            <View style={styles.text}>
              <TextInput placeholder="Enter Password" name="password" type="text" />
            </View>

            <Button title="Login" />

            <Text style={styles.label}>Do not have account signup</Text>
          </View>

        </CardContent>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "col",
    justifyContent: "center",
    padding: "2%"
  },
  text: {
    padding: 12,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,

  },
  label: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  signup: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  }
});

export default SignIn;
