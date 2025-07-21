import { StyleSheet } from "react-native";

const conteneurBouton = StyleSheet.create({
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
    }
})

export default conteneurBouton