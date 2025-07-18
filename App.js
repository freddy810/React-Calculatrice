import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

//Importation de fichier 'faireCalcul.js'
import faireCalcul from './components/faireCalcul';

export default function App() {
  const [phrase, setPhrase] = useState('');
  const [affichePhrase, setAffichePhrase] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput style={{ backgroundColor: 'red', width: '100%', color: 'white' }} value={phrase} onChangeText={(phrase) => setPhrase(phrase)} />

      <TouchableOpacity onPress={() => setAffichePhrase(true)}>
        <Text style={{ color: 'blue', marginTop: 10 }}>Afficher Le résultat</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setAffichePhrase(false)}>
        <Text style={{ color: 'red', marginTop: 10 }}>Effacer</Text>
      </TouchableOpacity>

      {affichePhrase && (<Text style={{ fontSize: 20, color: 'blue' }}>{faireCalcul(phrase)}</Text>)}

      <StatusBar style="auto" />
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
