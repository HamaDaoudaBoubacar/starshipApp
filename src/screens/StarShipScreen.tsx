import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import AppLayout from '../components/AppLayout';
import { useQuery } from 'react-query';
import fetchAsync from '../lib/fetch';
import { ActivityIndicator, Button, Modal, Portal, Provider } from 'react-native-paper';

const StarshipContainer = () => {
    const { status, error, data } = useQuery('starships', () =>
        fetchAsync(`https://swapi.dev/api/starships/`)
    );

    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'white', padding: 10};

    if (status === 'loading') {
        return (
            <View>
                <ActivityIndicator size="large" />
                <Text>Loading</Text>
            </View>
        );
    }

    if (status === 'error') {
        return (
            <View>
                <Text>{JSON.stringify(error)}</Text>
            </View>
        );
    }

    if (status === 'success') {

        return (
            <View>
                {data.results.map((ship) => {
                    return (
                        <View style={styles.card} key={ship.name}>
                            <Text>{ship.name}</Text>
                            <Text style={styles.model}>{ship.model}</Text>
                            <Text>{ship.manufacturer}</Text>
                            <Text>{ship.cost_in_credits} Credits</Text>

                            
                                <Portal>
                                    <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                                        <Text>Expensive ship.</Text>
                                    </Modal>
                                </Portal>
                                <Button mode="outlined" onPress={showModal}>
                                    Buy this SpaceShip
                            </Button>
                            

                        </View>
                    );
                })}
            </View>
        );
    }
};

const StarShipScreen = () => {
    return (
        <AppLayout title="Starships">
            <ScrollView>
                <StarshipContainer />
            </ScrollView>
        </AppLayout>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#666666',
    },
    card: {
        margin: 20,
        padding: 20,
        backgroundColor: '#E5E7EB', /*aqua*/
    },
    safeContainer: {
        backgroundColor: '#0000',
    },
    model: {
        opacity: 0.1
    },
    button: {
        color: 'green'
    }
});

export default StarShipScreen;
