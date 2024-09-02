import { Button, StyleSheet, Text, View } from 'react-native';


export default function Home({ navigation }) {
  return (
    <View>
        <Text>Главная страница</Text>
        <Button onPress={() => navigation.navigate('Catalog')} title='В каталог'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
