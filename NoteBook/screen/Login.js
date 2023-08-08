import {StyleSheet, Text,View,Image,TextInput,TouchableOpacity,KeyboardAvoidingView} from 'react-native';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';



export default function Login() {
  return (
    <KeyboardAvoidingView style={{flex:1}}>
    <SafeAreaView style={styles.container}>
       <View style={{flex:1.5,alignItems:'center'}}>
          <Text style={styles.headertxt}>NOTE BOOK</Text>
       </View>
       <View style={{flex:7,alignItems:'center'}}>
          <Image
        style={styles.img}
        source={require('../assets/fonts/imgbin-note-taking-writing-cornell-notes-sticky-notes-10k3KAMSfgeh5LbBx2LEYsujr-removebg-preview.png')}
      />
       </View>
       <View style={{flex:6.5, alignItems:'center'}}>
         <TextInput 
        style={styles.input}
        placeholder="  User name"
        
      />

      <TextInput 
        style={styles.input}
        placeholder="  Password"
        
      />

      <TouchableOpacity style={styles.button} >
        <Text style={styles.btxt}>LOGIN</Text>
      </TouchableOpacity>
       </View>
      
   
    </SafeAreaView>
    </KeyboardAvoidingView>
  )
}
const styles=StyleSheet.create({
  container:{
     flex:1,
 
     
  },
  headertxt:{
    fontSize:50,
    fontFamily:'IrishGrover-Regular',
    color:'black',
    marginTop:20
    
  },
  img:{
    height:280,
    width:380,
    position:'relative',
    left:2,
    top:70
    
  },
  input:{
    position:'relative',
    marginTop:40,
    width:310,
    borderWidth:2.5,
    borderRadius:16,
    fontSize:30,
    
  },
  button:{
    backgroundColor:'#AE90AA',
    position:'relative',
    top:45,
    
    padding:10,
    width:180,
    borderRadius:20,
    alignItems:'center'

  },
  btxt:{
    fontSize:40,
    fontFamily:'IrishGrover-Regular',
    color:'white'
  }

});