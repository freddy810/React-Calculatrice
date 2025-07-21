export default function creerEvenements(valeur, setValeur, setEgale, faireCalcul) {
    return {
        ecrire0: () => { setValeur(valeur + '0'); setEgale(false) },

        ecrire1: () => { setValeur(valeur + '1'); setEgale(false) },
        ecrire2: () => { setValeur(valeur + '2'); setEgale(false) },
        ecrire3: () => { setValeur(valeur + '3'); setEgale(false) },
        ecrire4: () => { setValeur(valeur + '4'); setEgale(false) },
        ecrire5: () => { setValeur(valeur + '5'); setEgale(false) },
        ecrire6: () => { setValeur(valeur + '6'); setEgale(false) },
        ecrire7: () => { setValeur(valeur + '7'); setEgale(false) },
        ecrire8: () => { setValeur(valeur + '8'); setEgale(false) },
        ecrire9: () => { setValeur(valeur + '9'); setEgale(false) },
        ecrirePlus: () => { setValeur(valeur + '+'); setEgale(false) },
        ecrireMoins: () => { setValeur(valeur + '-'); setEgale(false) },
        ecrireFois: () => { setValeur(valeur + '*'); setEgale(false) },
        ecrireDivision: () => { setValeur(valeur + '/'); setEgale(false) },
        ecrirePourcentage: () => { setValeur(valeur + '%'); setEgale(false) },
        ecrireVirgule: () => { setValeur(valeur + '.'); setEgale(false) },
        appuieC: () => { setValeur(''); setEgale(false) },
        appuieBackSpace: () => { setValeur(valeur.slice(0, -1)); setEgale(false) },
        appuieEgale: () => { setValeur(faireCalcul(valeur)); setEgale(true) },
    };
}
