import React, { useContext, useLayoutEffect, useState } from 'react';
import { Text, View, StyleSheet, Button, Modal } from 'react-native';
import { ColorModeContext } from '../ColorMode/ColorMode';

export default function BasketScreen({ navigation }) {
    const [visible, setVisible] = useState(false);
    const { isDarkMode } = useContext(ColorModeContext);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Panier',
            headerTitleStyle: {
                color: isDarkMode ? 'white' : 'black',
            },
        });
    }, [isDarkMode, navigation]);

    closeModal = () => {
        setVisible(false);
        navigation.navigate('Accueil');
    }

    return (
        <View style={isDarkMode ? styles.darkContainer : styles.lightContainer}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
                onRequestClose={closeModal}
            >
                <View style={styles.modal}>
                    <View style={isDarkMode ? styles.darkBackgroundModal : styles.lightBackgroundModal}>
                        <Text style={isDarkMode ? styles.darkTitlePage : styles.lightTitlePage}>Commande</Text>
                        <View style={styles.modalContent}>
                            <Text style={isDarkMode ? { color: '#fff' } : { color: '#000' }}>Votre commande a bien été prise en compte</Text>
                        </View>
                        <Button title="Fermer" onPress={closeModal} />
                    </View>
                </View>
            </Modal>
            <Text style={isDarkMode ? styles.darkTitlePage : styles.lightTitlePage}>Votre Panier</Text>
            <Button title="Commander" onPress={() => setVisible(true)} />
        </View>
    );
}

const styles = StyleSheet.create({
    darkContainer: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    lightContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    darkTitlePage: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    lightTitlePage: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    darkBackgroundModal: {
        backgroundColor: '#000',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    lightBackgroundModal: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    darkTitlePage: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    lightTitlePage: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});