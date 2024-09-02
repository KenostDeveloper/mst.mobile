import { FlatList, StyleSheet, Text, View, ScrollView } from 'react-native';
import CatalogItem from '../components/CatalogItem';
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function Catalog() {

  const [catalog, setCatalog] = useState([])

  useEffect(() => {
    const data = {
      "action": "get/catalog",
      "id": "48"
    }
    axios.post('https://a.dev.mst.tools/rest/front_opt', data).then((value) => setCatalog(value.data.data))
  }, [])

  return (
    <View style={styles.content}>
      <View style={styles.container}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={catalog}
          numColumns={3}
          contentContainerStyle={{ gap: 8, padding: 12 }}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          renderItem={({item}) => <CatalogItem key={item.id} text={item.pagetitle} src={item.menu_image}/>}
        />
        {/* {catalog.map((item) => <CatalogItem key={item.id} text={item.pagetitle} src={item.menu_image}/>)} */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingRight: 12,
    // paddingLeft: 12,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // flexWrap: 'wrap',
    // marginTop: 30,
  },
  content: {
    backgroundColor: '#fff',
    flex: 1
  }
});
