import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView,ScrollView, Button, Switch, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Search } from './search.js';


export class contaminationYesDetails extends React.Component{
    //Initial state false for the switch. You can change it to true just to see.
    state = {switchValue:false}
    toggleSwitch = (value) => {
        //onValueChange of the switch this function will be called
        this.setState({switchValue: value})
        //state changes according to switch
        //which will result in re-render the text
     }

     _renderNegativStatus = function () {
         isPositiv = false
     }
    
     _renderPositivStatus = function () {
        this.setState({
          isPositiv: !this.state.isPositiv
      });
     }

     _renderText = function () {
      if (this.state.isPositiv) {
        return (
            <TouchableHighlight 
                onPress={this.toggleCancel()}>
                <View>
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                </View>
            </TouchableHighlight>
        );
    } else {
        return null;
    }
     }

   render(){
     
     return (
       <View style={{ flex: 1 }}>
       <SafeAreaView style={styles.container}>
       <Search/>
         <ScrollView contentInsetAdjustmentBehavior="automatic" contentContainerStyle={{ flex: 1 }}
             style={styles.scrollView}>
               <View style={{flexDirection: 'row'}}>
               <View><Text style={styles.textTitle}>Positive to Covid-19 ?</Text></View>   
            <View style={styles.switch}>
               <Switch
                 onValueChange={this.toggleSwitch}
                 value={this.state.switchValue}
               />
             </View>
               </View>
               {this.state.switchValue &&
               <View>
               <Text style={styles.textInfos}>
               You are positive to Covid-19. You still have 2 days to change it to Negative.
               </Text>
               <Text style={styles.textInfos}>
               Attention: you need to get tested before changing your status.
               </Text>
               
             </View>
               }
               {!this.state.switchValue &&
               <View>
                  <View style={styles.imageStyle}>
               <Image  source={require('./../assets/QrCode.png')} />
              </View>
              <View>
                <Text style={styles.textInfos}>
                If you go to the hospital, show this QR Code to hospital staff. 
                They will use it to set your test result.
                </Text>
                <Text style={styles.textInfos}>
                if you made an autoTest, and you got a positive result, set the info to YES.
                </Text>
                
               </View>
               </View>
               
               }
               
          
         </ScrollView>
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
      paddingTop: 40, 
      paddingLeft:20,
      fontWeight: "900"
    },
    switch: {
      flex: 1,
      paddingLeft: 70, 
      paddingTop: 30
    }, 
    imageStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 50
    }
  });  

  export default contaminationYesDetails