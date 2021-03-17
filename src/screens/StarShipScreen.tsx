import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AppLayout from '../components/AppLayout';
import { useQuery } from 'react-query';
import fetchAsync from '../lib/fetch';
import { ActivityIndicator } from 'react-native-paper';

const StarshipContainer = () => {

    const { status, error, data } = useQuery('starships', () =>
        fetchAsync(`https://swapi.dev/api/starships/`));

    if (status === 'loading') {
        <View >
            <ActivityIndicator size="large" />
            <Text>Loading</Text>
        </View>
    }

    if (error) {
        <View>
            <Text>error</Text>
        </View>
    }

    if (data.results === undefined) {
        <View>
            <Text>Not Found</Text>
        </View>
    }

    console.log(data);

    return (
        data.results.map((ship) => (
            <View>
                <Text>{ship.name}</Text>
                <Text>{ship.model}</Text>
                <Text>{ship.manufacturer}</Text>
            </View>
        ))
    )
}

const StarShipScreen = () => {



    return (

        <AppLayout title="Starships">

            <StarshipContainer />

        </AppLayout>


    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#666666',
    },
    card: {
        margin: 20,
        padding: 20
    },
    safeContainer: {
        backgroundColor: '#0000',
    },
});

export default StarShipScreen;