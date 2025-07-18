import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

function faireCalcul(phrase) {

  //Pour / et *
  let nbrOperaterFoisOuDivision = 0;
  let nombre1 = '';
  let nombre2 = '';
  let nombre1EnSensNormal = '';
  let resultatFoisOuDivision = 0;
  let i = 0; let j = 0; let k = 0; let l = 0;

  //Pour + et -
  let nouveauPhrase = '';
  let nbrOperaterPlusouMoins = 0;
  let nombre3 = '';
  let nombre4 = '';
  let nombre3EnSensNormal = '';
  let resultatPlusouMoins = 0;
  let m = 0; let n = 0; let o = 0; let p = 0; let q = 0;


  //connaitre le nombre des operateurs * ou / en premier
  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i] == '*' || phrase[i] == '/') {
      nbrOperaterFoisOuDivision += 1;
    }
  }

  //faire le calcul de * et / en priorité
  while (nbrOperaterFoisOuDivision > 0) {

    //Réperer le premier operateur * ou /
    for (j = 0; j < phrase.length; j++) {
      if (phrase[j] == '*' || phrase[j] == '/') {

        //recuperer le premier nombre
        for (k = j - 1; k >= 0; k--) {
          if (phrase[k] == '*' || phrase[k] == '/' || phrase[k] == '+' || phrase[k] == '-') {
            break;
          }
          nombre1 = nombre1 + phrase[k];
        }

        //recuperer le deuxieme nombre
        for (l = j + 1; l < phrase.length; l++) {
          if (phrase[l] == '*' || phrase[l] == '/' || phrase[l] == '+' || phrase[l] == '-') {
            break;
          }
          nombre2 = nombre2 + phrase[l];
        }

        //pour permettre de recuperer l'indice de premier Operateur * ou / en bas ('j') 
        break;
      }
    }

    //renverser le nombre1 car on l'a fait de sens inverse
    nombre1EnSensNormal = nombre1.split('').reverse().join('');

    //faire l'operation
    if (phrase[j] == '*') {
      resultatFoisOuDivision = parseFloat(nombre1EnSensNormal) * parseFloat(nombre2);
    }
    else if (phrase[j] == '/') {
      resultatFoisOuDivision = parseFloat(nombre1EnSensNormal) / parseFloat(nombre2);
    }

    //changement dans la phrase
    phrase = phrase.replace(nombre1EnSensNormal + phrase[j] + nombre2, String(resultatFoisOuDivision));

    //reinitialiser les variables
    j = 0; k = 0; l = 0; nombre1 = ''; nombre2 = ''; resultatFoisOuDivision = 0;

    nbrOperaterFoisOuDivision--;
  }

  //-------------Pour le + et - ---------------------------------------------------------------------------------------------
  // assigner un nouveauPhrase qui contient que des + et -
  nouveauPhrase = phrase;

  //connaitre le nombre des operateurs * ou / en premier
  for (let m = 0; m < nouveauPhrase.length; m++) {
    if (nouveauPhrase[m] == '+' || nouveauPhrase[m] == '-') {
      nbrOperaterPlusouMoins += 1;
    }
  }


  //faire le calcul de * et / en priorité
  while (nbrOperaterPlusouMoins > 0) {

    for (n = 1; n < nouveauPhrase.length; n++) {
      if (nouveauPhrase[n] == '+' || nouveauPhrase[n] == '-') {

        //recuperer le premier nombre
        for (o = n - 1; o >= 0; o--) {
          nombre3 = nombre3 + nouveauPhrase[o];
        }

        //recuperer le deuxieme nombre
        for (p = n + 1; p < nouveauPhrase.length; p++) {
          if (nouveauPhrase[p] == '*' || nouveauPhrase[p] == '/' || nouveauPhrase[p] == '+' || nouveauPhrase[p] == '-') {
            break;
          }
          nombre4 = nombre4 + nouveauPhrase[p];
        }

        //pour permettre de recuperer l'indice de premier Operateur * ou / en bas ('n') 
        break;
      }
    }


    //tester si il y a - au debut du premier nombre pour le renversement
    if (nombre3[nombre3.length - 1] == '-') {
      //effacer le '-' dans le nombre1
      nombre3 = nombre3.replace("-", "");
      //renverser le nombre1 car on l'a fait de sens inverse
      nombre3EnSensNormal = nombre3.split('').reverse().join('');
      //remettre le '-' dans le nombre1
      nombre3EnSensNormal = "-" + nombre3EnSensNormal;
    }
    else {
      //renverser le nombre1 car on l'a fait de sens inverse
      nombre3EnSensNormal = nombre3.split('').reverse().join('');
    }


    //faire l'operation
    if (nouveauPhrase[n] == '+') {
      resultatPlusouMoins = parseFloat(nombre3EnSensNormal) + parseFloat(nombre4);
    }
    else if (nouveauPhrase[n] == '-') {
      resultatPlusouMoins = parseFloat(nombre3EnSensNormal) - parseFloat(nombre4);
    }

    //changement dans la nouveauPhrase
    nouveauPhrase = nouveauPhrase.replace(nombre3EnSensNormal + nouveauPhrase[n] + nombre4, String(resultatPlusouMoins));

    //reinitialiser les variables
    n = 0; p = 0; o = 0; nombre3 = ''; nombre4 = ''; resultatPlusouMoins = 0;


    nbrOperaterPlusouMoins--;

  }

  return nouveauPhrase;

}


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
