# JavaScript snippets

Afficher des données dans une `FlatList`

```javascript
const renderItem = ({ item }) => {
  return (
    <View style={styles.card}>
      <Text>{item.name}</Text>
      <Text>{item.manufacturer}</Text>
      <Text>{item.model}</Text>
    </View>
  );
};

return (
  <SafeAreaView style={styles.safeContainer}>
    <View style={styles.container}>
      <FlatList data={data.results} renderItem={renderItem} />
    </View>
  </SafeAreaView>
);
```
