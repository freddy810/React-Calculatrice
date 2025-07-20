import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

//Importation de fichier 'faireCalcul.js'
import faireCalcul from './components/faireCalcul';

export default function App() {
  return (
    <View style={styles.container}>

      {/*--------------Racine et convertisseur en haut ------------------------------------------------------*/}
      <View style={styles.racineEtConvertisseur}>
        <TouchableOpacity><Text style={styles.textRacineCarree}>√x</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.textConvertisseur}>($)</Text></TouchableOpacity>
      </View>

      {/*--------------le tiret ------------------------------------------------------*/}
      <TouchableOpacity><Text style={styles.tiret}>—</Text></TouchableOpacity>

      {/*--------------Le conteneur de tous les boutons ------------------------------------------------------*/}
      <View style={styles.conteneurBoutons}>

        {/*------1ere etage ------*/}
        <View style={styles.etage1}>
          <TouchableOpacity><Text style={styles.leC}>C</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.leDivision}>÷</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.leFois}>×</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.leBackSpace}>⌫</Text></TouchableOpacity>
        </View>

        {/*------2e etage ------*/}
        <View style={styles.etage2}>
          <TouchableOpacity><Text style={styles.le7}>7</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.le8}>8</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.le9}>9</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.leMoins}>–</Text></TouchableOpacity>
        </View>

        {/*------3e etage ------*/}
        <View style={styles.etage3}>
          <TouchableOpacity><Text style={styles.le4}>4</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.le5}>5</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.le6}>6</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.lePlus}>+</Text></TouchableOpacity>
        </View>

        {/*------4e etage ------*/}
        <View style={styles.etage4}>
          <TouchableOpacity><Text style={styles.le1}>1</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.le2}>2</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.le3}>3</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.lePlus2}>+</Text></TouchableOpacity> {/*------ Permet de reserver de la place ------*/}
        </View>

        {/*------5e etage ------*/}
        <View style={styles.etage5}>
          <TouchableOpacity><Text style={styles.lePourcentage}>%</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.le0}>0</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.leVirgule}>,</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.lePlus2}>+</Text></TouchableOpacity>  {/*------ Permet de reserver de la place ------*/}
        </View>

        {/*------le bouton égale ------*/}
        <TouchableOpacity><Text style={styles.leEgal}>＝</Text></TouchableOpacity>

        {/*------le champ pour saisir ------*/}
        <TextInput style={styles.champSaisi}></TextInput>

        {/*------le champ pour le resultat ------*/}
        <TextInput style={styles.champResultat} editable={false}></TextInput>

      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(250, 250, 250)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  //--------------Racine et convertisseur en haut ------------------------------------------------------
  racineEtConvertisseur: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    position: 'absolute', top: 50,
  },

  textRacineCarree: {
    marginRight: 15,
    fontSize: 16,
  },

  textConvertisseur: {
    marginRight: 15,
    fontSize: 15,
  },

  /*--------------Le conteneur de tous les boutons ------------------------------------------------------*/
  conteneurBoutons: {
    position: 'absolute',
    top: 360,
    backgroundColor: 'white',
    width: '100%',
    height: '70%',
    flexDirection: 'column',
  },

  //-------etage1-------------------------------
  etage1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 25,
  },

  leC: {
    color: '#2474fb',
    fontSize: 22,
    marginTop: -2,
  },

  leDivision: {
    color: '#2474fb',
    fontSize: 30,
  },

  leFois: {
    color: '#2474fb',
    fontSize: 30,
  },

  leBackSpace: {
    color: '#2474fb',
    fontSize: 20,
    marginTop: 5,
  },

  tiret: {
    color: '#949494',
    fontSize: 40,
    position: 'absolute',
    top: -90, left: -23,
  },

  //-------------etage2--------------------------
  etage2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 25,
  },

  le7: {
    fontSize: 22,
    marginTop: -2,
  },

  le8: {
    fontSize: 22,
    marginTop: -2,
  },

  le9: {
    fontSize: 22,
    marginTop: -2,
  },

  leMoins: {
    color: '#2474fb',
    fontSize: 30,
    marginTop: -2,
  },

  //-------------etage3--------------------------
  etage3: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 25,
  },

  le4: {
    marginTop: -2,
    fontSize: 22,
  },

  le5: {
    fontSize: 22,
  },

  le6: {
    fontSize: 22,
  },

  lePlus: {
    color: '#2474fb',
    fontSize: 30,
    marginRight: 2,
  },

  //-------------etage4--------------------------
  etage4: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 25,
  },

  le1: {
    fontSize: 22,
  },

  le2: {
    fontSize: 22,
  },

  le3: {
    fontSize: 22,
    marginLeft: -4,
  },

  lePlus2: {
    color: 'white',
    fontSize: 30,
    marginRight: 2,
  },

  //-------------etage5--------------------------
  etage5: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 25,
  },

  lePourcentage: {
    fontSize: 22,
    marginTop: -5,
  },

  le0: {
    fontSize: 22,
    marginLeft: -4,
  },

  leVirgule: {
    fontSize: 26,
    marginTop: -20,
    marginLeft: -4,

  },

  lePlus2: {
    color: 'white',
    fontSize: 30,
    marginRight: 2,
  },

  //-------------le bouton egal--------------------------
  leEgal: {
    color: 'white',
    backgroundColor: '#2474fb',
    width: '17%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute', right: 19, top: -135,
    paddingLeft: 12, paddingTop: 40, paddingBottom: 40, paddingRight: 10,
    borderRadius: 10,
    fontSize: 30,
  },

  //------le champ pour saisir ------
  champSaisi: {
    fontSize: 40,
    backgroundColor: 'rgb(250, 250, 250)',
    width: '97%',
    position: 'absolute', top: -175,
    //permet de placer le curseur à droite
    textAlign: 'right',
  },

  //------le champ pour le resulta ------
  champResultat: {
    fontSize: 25,
    backgroundColor: 'rgb(250, 250, 250)',
    width: '97%',
    height: '15%',
    position: 'absolute', top: -109,
    //permet de placer le curseur à droite
    textAlign: 'right',
    color: 'rgb(30, 29, 29)',
    //pour ne pas l'afficher
    display: 'none',
  }

});
