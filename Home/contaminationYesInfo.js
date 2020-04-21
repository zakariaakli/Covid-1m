import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView,ScrollView, Button, NativeModules, NativeEventEmitter, Alert } from 'react-native';
import { Search } from './search.js';
import { Divider } from 'react-native-elements';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import BleManager from 'react-native-ble-manager';
import NotificationService from '../Tools/notifications.js';
const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);


export class contaminationYesInfo extends React.Component{
  
  constructor(props){
    super(props);
    this.notification = new NotificationService(this.onNotification);
    this.devices = [];
    this.state = {
        dataSource: this.devices
    };
}
    //Gets called when the notification comes in
    onNotification = (notif) => {
      Alert.alert(notif.title, notif.message);
    }

       //Permissions to use notifications
       handlePerm(perms) {
        Alert.alert("Permissions", JSON.stringify(perms));
      }

  componentDidMount() { 
    this.interval = setInterval(() => this.startScanning(), 100000);
    
    bleManagerEmitter.addListener('BleManagerDiscoverPeripheral',(data) => 
    {
        let device = 'device found ziko: ' + data.name + '(' + data.id + ')' + '....' + JSON.stringify(data.advertising);
        
        this.devices.indexOf(device) === -1 ? this.devices.push(device) : console.log('element deja existant');
        
        let newState = this.state;
        newState.dataSource = this.devices;
        this.setState(newState);
        
    });
    
    BleManager.start({showAlert: false})
    .then(() => {
    // Success code
    console.log('Module initialized by zak');
});
}

componentWillUnmount() {
  clearInterval(this.interval);
}

startScanning() {
  //this.notification.localNotification();
  console.log('start scanning');
  //BleManager.checkState();
  BleManager.scan([], 120).then((data)=>{
   console.log('---------------------------scan started');
   console.log(this.state.dataSource);
   console.log('---------------------------taille')
   console.log(this.state.dataSource.length);
   console.log('---------------------------scan finished');
  
  })
}


  render(){
    //test
    return (
      <View style={{ flex: 1, position:"relative" }}>
        <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Search/>
        <Button onPress={() => this.startScanning()} title="Start scanning"/>
        <ScrollView style={styles.scrollViewStyle}
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

            { this.state.dataSource.map((item, key)=>(
         <Text key={key}> { item } </Text>)
         )}
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
  }, 
  scrollViewStyle: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: 60
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