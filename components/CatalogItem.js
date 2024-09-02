import { Button, StyleSheet, Text, View, Image } from 'react-native';


export default function CatalogItem({text, src}) {
  return (
    <View style={styles.item}>
        <Text style={styles.text}>{text}</Text>
        <Image source={{uri: src}} style={styles.image}/>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    width: '32%',
    height: '500px',
    aspectRatio: 1/1,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
    // borderColor: "#EEEEEE",
    // borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    // marginBottom: 8,
  },
  image: {
    width: '80%',
    height: '80%',
    position: 'absolute',
    right: 0,
    bottom: 0
  },
  text: {
    fontSize: 12
  }
});
