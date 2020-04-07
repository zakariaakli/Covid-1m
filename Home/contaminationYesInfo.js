import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView,ScrollView, Button, Switch } from 'react-native';
import { Search } from './search.js';
import { Divider } from 'react-native-elements';
import { createStackNavigator, createAppContainer } from 'react-navigation';


export class contaminationYesInfo extends React.Component{
 
   //Initial state false for the switch. You can change it to true just to see.
   state = {switchValue:false}
   toggleSwitch = (value) => {
       //onValueChange of the switch this function will be called
       this.setState({switchValue: value})
       //state changes according to switch
       //which will result in re-render the text
    }
    
  render(){
    
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Search/>
        <ScrollView contentInsetAdjustmentBehavior="automatic" contentContainerStyle={{ flex: 1 }}
            style={styles.scrollView}>
        <View style={styles.viewInfos}>
            <Text style={styles.textTitle}>What is contamination risk ?</Text>
            <Text style={styles.textInfos}>On the basis of the people crossed and the places visited, H calculates a percentage of risk of contamination. You will receive a notification when this percentage is important. Don't worry, H is here to warn you. Try to go to the nearest hospital for screening.</Text>
          </View>
          <Divider style={styles.divider} />
          <View style={styles.viewInfos}>
            <Text style={styles.textTitle}>What is contamination risk ?</Text>
            <Text style={styles.textInfos}>On the basis of the people crossed and the places visited, H calculates a percentage of risk of contamination. You will receive a notification when this percentage is important. Don't worry, H is here to warn you. Try to go to the nearest hospital for screening.</Text>
          </View>
          <Divider style={styles.divider} />
          <View style={styles.viewInfos}>
            <Text style={styles.textTitle}>Can i prevent contamination ?</Text>
            </View>
        </ScrollView>
        <Button
          title="Change your Covid19 status"
          onPress={() => this.props.navigation.navigate('Details')}/>       
      </SafeAreaView>
      </View>
    );
      
  } 
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'snow'
  }, 
  container: {
    flex: 1,
  }, 
  divider:{
    backgroundColor: 'orange',
    height: 3
  }, 
  viewInfos:{
    paddingTop: 10,
    paddingBottom:10
  }, 
  textInfos:{
    paddingTop: 10,
    paddingLeft:10, 
    paddingRight: 10,
    /*"auto", "left", "right", "center", "justify"*/
    textAlign: 'justify',
    fontWeight: "500"
  },
  textTitle:{
    fontWeight: 'bold', 
    paddingLeft:5,
    fontWeight: "900"
  },
  switch: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }

  // engine: {
  //   position: 'absolute',
  //   right: 0,
  // },
  // body: {
  //   backgroundColor: Colors.white

  // },
  // sectionContainer: {
  //   marginTop: 32,
  //   paddingHorizontal: 24,
  // },
  // sectionTitle: {
  //   fontSize: 24,
  //   fontWeight: '600',
  //   color: Colors.black,
  // },
  // sectionDescription: {
  //   marginTop: 8,
  //   fontSize: 18,
  //   fontWeight: '400',
  //   color: Colors.dark,
  // },
  // highlight: {
  //   fontWeight: '700',
  // },
  // footer: {
  //   color: Colors.dark,
  //   fontSize: 12,
  //   fontWeight: '600',
  //   padding: 4,
  //   paddingRight: 12,
  //   textAlign: 'right',
  // },
  // TextLabel: {
  //   fontSize: 35,
  //   color: 'darkorchid',
  //   fontWeight: 'bold',
  //   textAlign: 'justify',
  //   left: 15

  // }
});              


export default contaminationYesInfo