// App.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import contaminationYesInfo from './Home/contaminationYesInfo';
import contaminationYesDetails from './Home/contaminationYesDetails';


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  ContaminationRisk: {
    screen: contaminationYesInfo
  },
  About: {
    screen: contaminationYesDetails
  }
  },{
    initialRouteName: "ContaminationRisk"
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});