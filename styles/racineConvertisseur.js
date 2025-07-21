import { StyleSheet } from "react-native";

const racineConvertisseur = StyleSheet.create({
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
})

export default racineConvertisseur