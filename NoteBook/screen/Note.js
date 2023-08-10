import { View, Text,StyleSheet,SafeAreaView,ScrollView,FlatList,Image } from 'react-native'
import React from 'react'

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    image:require('../assets/fonts/Screenshot 2023-06-24 210536.png')
  },
  
];

const Item = ({image}) => (
  <View style={styles.item}>
    <Image
        style={styles.img}
        source={image}
      />
  </View>
);
export default function Note() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex:4,justifyContent:'center',alignItems:'center'}}>
        <Text style={styles.head}>How to make game</Text>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.notetxt} >A good example of a paragraph  contains a topic
sentence, details and a conclusion. 'There are many 
different kinds of animals that live in China. Tigers 
and leopards are animals that

Below are a series of poorly constructed paragraphs
and possible solutions. Put yourself in the place
of a teacher. Criticise the structure of each 
paragraph and suggest how it might be improved.
Be very critical about how the paragraph is 
constructed and how well the ideas flow. There are 
quite a few examples to have a go at because being 
critical of the work of others is difficult low are a series of poorly constructed paragraphs
and possible solutions. Put yourself in the place
of a teacher. Criticise the structure of each 
paragraph and suggest how it might be improved.
Be very critical about how the paragraph is 
constructed and how well the ideas flow. There are 
quite a few examples to have a go at because being 
critical of the work of others is difficullow are a series of poorly constructed paragraphs
and possible solutions. Put yourself in the place
of a teacher. Criticise the structure of each 
paragraph and suggest how it might be improved.
Be very critical about how the paragraph is 
constructed and how well the ideas flow. There are 
quite a few examples to have a go at because being 
critical of the work of others is difficullow are a series of poorly constructed paragraphs
and possible solutions. Put yourself in the place
of a teacher. Criticise the structure of each 
paragraph and suggest how it might be improved.
Be very critical about how the paragraph is 
constructed and how well the ideas flow. There are 
quite a few examples to have a go at because being 
critical of the work of others is difficullow are a series of poorly constructed paragraphs
and possible solutions. Put yourself in the place
of a teacher. Criticise the structure of each 
paragraph and suggest how it might be improved.
Be very critical about how the paragraph is 
constructed and how well the ideas flow. There are 
quite a few examples to have a go at because being 
critical of the work of others is difficulbut gets 
easier the more you practice.

Bali is predominantly a Hindu country. Bali is known for its elaborate, traditional dancing. The dancing is inspired by its Hindi beliefs. Most of the dancing portrays tales of good versus evil. To watch the dancing is a breathtaking experience. Lombok has some impressive points of interest – the majestic Gunung Rinjani is an active volcano. It is the second highest peak in Indonesia. Art is a Balinese passion. Batik paintings and carved statues make popular souvenirs. Artists can be seen whittling and painting on the streets, particularly in Ubud. It is easy to appreciate each island as an attractive tourist destination. Majestic scenery; rich culture; white sands and warm, azure waters draw visitors like magnets every year. Snorkelling and diving around the nearby Gili Islands is magnificent. Marine fish, starfish, turtles and coral reef are present in abundanc.</Text>
</ScrollView>
      </View>
      <View style={{flex:2}}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item image={item.image} />}
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
  notetxt:{
   fontSize:18,
   marginLeft:10,
   marginRight:10
  },
  scrollView: {
    backgroundColor: '#F0EAEF',
    marginHorizontal: 20,
    marginVertical:10,
    position:'relative',
    top:10,
    borderWidth:2,
    borderRadius:16
    
  },
  head:{
    fontSize:35,
    fontFamily:'IrishGrover-Regular',
    color:'black',
    position:'relative',
    top:20
  },
  img:{
  height:220,
  width:305
    
   
  },
  item: {
    backgroundColor: '#f9c2ff',
    marginVertical: 8,
    marginHorizontal: 20,
    borderRadius:16,
    marginTop:20,
    alignItems:'center',
    padding:0
  }
})