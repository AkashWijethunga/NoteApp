import { View, Text,StyleSheet,TouchableOpacity,FlatList,SafeAreaView,Image} from 'react-native'
import React from 'react'

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53ab28ba',
    date:'2024/07/03',
    title: 'How to make game',
    note:'A good example of a paragraph contains a topic sentence, details and a conclusion',
    image:require('../assets/fonts/Screenshot_2023-08-09_140115-removebg-preview.png')
    
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3a53abb28ba',
    date:'2024/07/03',
    title: 'How to make game',
    note:'A good example of a paragraph contains a topic sentence, details and a conclusion',
    image:require('../assets/fonts/Screenshot_2023-08-09_140115-removebg-preview.png')
    
  },
  {
    id: 'bd7acbea-cb1-46c2-aed5-3ad53abb28ba',
    date:'2024/07/03',
    title: 'How to make game',
    note:'A good example of a paragraph contains a topic sentence, details and a conclusion',
    image:require('../assets/fonts/Screenshot_2023-08-09_140115-removebg-preview.png')
    
  },
  {
    id: 'bd7acbea-c1b1-46c2aed5-3ad53abb28ba',
    date:'2024/07/03',
    title: 'How to make game',
    note:'A good example of a paragraph contains a topic sentence, details and a conclusion',
    image:require('../assets/fonts/Screenshot_2023-08-09_140115-removebg-preview.png')
    
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed-3ad53abb28ba',
    date:'2024/07/03',
    title: 'How to make game',
    note:'A good example of a paragraph contains a topic sentence, details and a conclusion',
    image:require('../assets/fonts/Screenshot_2023-08-09_140115-removebg-preview.png')
    
  },
  {
    id: 'bd7acbe-c1b1-46c2-aed5-3ad53abb28ba',
    date:'2024/07/03',
    title: 'How to make game',
    note:'A good example of a paragraph contains a topic sentence, details and a conclusion',
    image:require('../assets/fonts/Screenshot_2023-08-09_140115-removebg-preview.png')
    
  }
];

const Item = ({title,image,date,note}) => (
  <View style={styles.item}>
    <Text style={styles.da}>{date}</Text>
    <Text style={styles.tit}>{title}</Text>
    <Text style={styles.no}>{note}</Text>
    <Image
        style={styles.img}
        source={image}
      />
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
        renderItem={({item}) => <Item date={item.date} title={item.title} note={item.note} image={item.image}/> }
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // For Android
    

  },
  item: {
    marginVertical:   15,
    marginHorizontal: 16,
    borderWidth:2,
    borderRadius:20,
    height:130,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // For Android
    backgroundColor: 'white', // Adjust this based on your design
    margin: 10, // Adjust margins as needed
    borderRadius: 10, // Apply border radius for rounded corners
  
    
  },
  img:{
    width:100,
    height:100,
    position:'relative',
    left:250,
    bottom:90
  },
  da:{
    marginLeft:10
  },
  tit:{
    fontSize:20,
    fontWeight:'bold',
    color:'black',
    position:'relative',
    left:35,
    top:0
    
  },
  no:{
    width:240,
    height:55,
    marginLeft:10,
    marginTop:10
  }
})