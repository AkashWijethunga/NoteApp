import { View, Text,StyleSheet,TouchableOpacity,FlatList,SafeAreaView} from 'react-native'
import React from 'react'

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '586940f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '586940f-3da1-471f-bd96-45571e29d72',
    title: 'Third Item',
  }
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex:2}}>
        <Text style={styles.headertxt}>NOTES</Text>
        <TouchableOpacity style={styles.button} >
        <Text style={styles.btxt}>+</Text>
      </TouchableOpacity>
      </View>
      <View style={{flex:11}}>
        <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
      </View>
      
    </SafeAreaView>
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1
  },
  headertxt:{
    fontSize:50,
    fontFamily:'IrishGrover-Regular',
    position:'relative',
    top:45,
    left:115,
    color:'black'
  },
  btxt:{
    fontSize:70,
    fontFamily:'IrishGrover-Regular',
    color:'white',
    position:'relative',
    bottom:15
  },
  button:{
    backgroundColor:'#AE90AA',
    position:'relative',
    left:320,
    bottom:50,
    width:60,
    height:60,
    borderRadius:10,
    alignItems:'center',
    

  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 55,
    marginVertical:   15,
    marginHorizontal: 16,
    borderWidth:2,
    borderRadius:20
  },
})