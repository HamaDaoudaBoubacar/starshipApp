import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import AppLayout from '../components/AppLayout';
import { useQuery } from 'react-query';
import fetchAsync from '../lib/fetch';
import { ActivityIndicator } from 'react-native-paper';

const StarshipContainer = () => {
  const { status, error, data } = useQuery('starships', () =>
    fetchAsync(`https://swapi.dev/api/starships/`)
  );

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
              <Text>{ship.model}</Text>
              <Text>{ship.manufacturer}</Text>
            </View>
          );
        })}
      </View>
    );
  }

  return;
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
    backgroundColor: 'aqua',
  },
  safeContainer: {
    backgroundColor: '#0000',
  },
});

export default StarShipScreen;
