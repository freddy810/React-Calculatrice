import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

//Importation de fichier 'faireCalcul.js'
import faireCalcul from './components/faireCalcul';

//Importation de fichier 'evenement.js'
import creerEvenements from './components/evenement';

//Importation des styles
import conteneur from './styles/conteneur';
import racineConvertisseur from './styles/racineConvertisseur';
import conteneurBouton from './styles/conteneurBouton';

export default function App() {

  //pour les evenements 
  const [valeur, setValeur] = useState('');
  const [egale, setEgale] = useState(false);

  // Importation des fonctions événements
  const { ecrire0, ecrire1, ecrire2, ecrire3, ecrire4, ecrire5, ecrire6, ecrire7, ecrire8, ecrire9, ecrirePlus, ecrireMoins, ecrireFois, ecrireDivision,
    ecrirePourcentage, ecrireVirgule, appuieC, appuieBackSpace, appuieEgale
  } = creerEvenements(valeur, setValeur, setEgale, faireCalcul);

  return (
    <View style={conteneur.container}>

      {/*--------------Racine et convertisseur en haut ------------------------------------------------------*/}
      <View style={racineConvertisseur.racineEtConvertisseur}>
        <TouchableOpacity><Text style={racineConvertisseur.textRacineCarree}>√x</Text></TouchableOpacity>
        <TouchableOpacity><Text style={racineConvertisseur.textConvertisseur}>($)</Text></TouchableOpacity>
      </View>

      {/*--------------le tiret ------------------------------------------------------*/}
      <TouchableOpacity><Text style={conteneurBouton.tiret}>—</Text></TouchableOpacity>

      {/*--------------Le conteneur de tous les boutons ------------------------------------------------------*/}
      <View style={conteneurBouton.conteneurBoutons}>

        {/*------1ere etage ------*/}
        <View style={conteneurBouton.etage1}>
          <TouchableOpacity onLongPress={appuieC} delayLongPress={10}><Text style={conteneurBouton.leC}>C</Text></TouchableOpacity>
          <TouchableOpacity onLongPress={ecrireDivision} delayLongPress={10}><Text style={conteneurBouton.leDivision}>÷</Text></TouchableOpacity>
          <TouchableOpacity onLongPress={ecrireFois} delayLongPress={10}><Text style={conteneurBouton.leFois}>×</Text></TouchableOpacity>
          <TouchableOpacity onLongPress={appuieBackSpace} delayLongPress={10}><Text style={conteneurBouton.leBackSpace}>⌫</Text></TouchableOpacity>
        </View>

        {/*------2e etage ------*/}
        <View style={conteneurBouton.etage2}>
          <TouchableOpacity onLongPress={ecrire7} delayLongPress={10}><Text style={conteneurBouton.le7}>7</Text></TouchableOpacity>
          <TouchableOpacity onLongPress={ecrire8} delayLongPress={10}><Text style={conteneurBouton.le8}>8</Text></TouchableOpacity>
          <TouchableOpacity onLongPress={ecrire9} delayLongPress={10}><Text style={conteneurBouton.le9}>9</Text></TouchableOpacity>
          <TouchableOpacity onLongPress={ecrireMoins} delayLongPress={10}><Text style={conteneurBouton.leMoins}>–</Text></TouchableOpacity>
        </View>

        {/*------3e etage ------*/}
        <View style={conteneurBouton.etage3}>
          <TouchableOpacity onLongPress={ecrire4} delayLongPress={10} ><Text style={conteneurBouton.le4}>4</Text></TouchableOpacity>
          <TouchableOpacity onLongPress={ecrire5} delayLongPress={10}><Text style={conteneurBouton.le5}>5</Text></TouchableOpacity>
          <TouchableOpacity onLongPress={ecrire6} delayLongPress={10}><Text style={conteneurBouton.le6}>6</Text></TouchableOpacity>
          <TouchableOpacity onLongPress={ecrirePlus} delayLongPress={10}><Text style={conteneurBouton.lePlus}>+</Text></TouchableOpacity>
        </View>

        {/*------4e etage ------*/}
        <View style={conteneurBouton.etage4}>
          <TouchableOpacity onLongPress={ecrire1} delayLongPress={10}><Text style={conteneurBouton.le1}>1</Text></TouchableOpacity>
          <TouchableOpacity onLongPress={ecrire2} delayLongPress={10}><Text style={conteneurBouton.le2}>2</Text></TouchableOpacity>
          <TouchableOpacity onLongPress={ecrire3} delayLongPress={10}><Text style={conteneurBouton.le3}>3</Text></TouchableOpacity>
          <TouchableOpacity><Text style={conteneurBouton.lePlus2}>+</Text></TouchableOpacity> {/*------ Permet de reserver de la place ------*/}
        </View>

        {/*------5e etage ------*/}
        <View style={conteneurBouton.etage5}>
          <TouchableOpacity onLongPress={ecrirePourcentage} delayLongPress={10}><Text style={conteneurBouton.lePourcentage}>%</Text></TouchableOpacity>
          <TouchableOpacity onLongPress={ecrire0} delayLongPress={10}><Text style={conteneurBouton.le0}>0</Text></TouchableOpacity>
          <TouchableOpacity onLongPress={ecrireVirgule} delayLongPress={10}><Text style={conteneurBouton.leVirgule}>{'\u002C'}</Text></TouchableOpacity>
          <TouchableOpacity><Text style={conteneurBouton.lePlus2}>+</Text></TouchableOpacity>  {/*------ Permet de reserver de la place ------*/}
        </View>

        {/*------le bouton égale ------*/}
        <TouchableOpacity onLongPress={appuieEgale} delayLongPress={10}><Text style={conteneurBouton.leEgal}>＝</Text></TouchableOpacity>

        {/*------le champ pour saisir ------*/}
        <TextInput style={conteneurBouton.champSaisi} editable={false} value={valeur}></TextInput>

        {/*------le champ pour le resultat ------*/}
        <TextInput style={[conteneurBouton.champResultat, { display: egale ? 'none' : '' }]} editable={false} value={faireCalcul(valeur)}></TextInput>

      </View>

      <StatusBar style="auto" />
    </View>
  );
}
