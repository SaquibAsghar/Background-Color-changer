import React,{useState} from 'react';

import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Pressable
} from 'react-native';


const App = () => {

  const [bgdColor, setBgdColor] = useState('rgb(25, 100, 50)')

  const onColorChangeHandler = ()=>{
    let red = Math.floor( Math.random()*255)
    let green = Math.floor( Math.random()*255)
    let blue = Math.floor( Math.random()*255)

    setBgdColor(`rgb(${red},${green},${blue})`)
  }
  const onResetHandler = ()=>{
    setBgdColor('rgb(0,0,0)')
  }
  return (
    <>
   

    <StatusBar backgroundColor = {bgdColor}/>
    <View style= {[styles.headerContainer, {backgroundColor: bgdColor}]} >
      <Text style = {[styles.textHeader]}>Background color changer</Text>
    </View>
    <View style = {[styles.container, {backgroundColor: bgdColor},]}>
      
      <Pressable style={styles.tapButton} onPress= {onColorChangeHandler}>
        <Text style= {styles.text}>Tap me</Text>
        <Text style= {styles.text} onPress = {onResetHandler}>Reset</Text>
      </Pressable>
      
    </View>

    </>
  );
};


const styles = StyleSheet.create({
  headerContainer:{
    flex:0.4,
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  textHeader:{
    
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff'
    // textAlign: 'center'
  
  },

  container:{
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
    
    
  },
  tapButton:{
    marginBottom: '-50%' 
  },
  text:{
    fontSize: 30,
    fontWeight: 'bold',
    paddingVertical: 20,
    paddingHorizontal: 40,
    backgroundColor: '#bb2dc9',
    borderRadius: 15,
    textTransform: 'uppercase',
    marginBottom: 10,
    color: '#fff'
    
  }
})


export default App;
