import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Animated, StyleSheet } from 'react-native';
import SearchModule from './SearchModule';

const App = () => {
  const [filteredItems, setFilteredItems] = useState([]);
  const [fadeAnim] = useState(new Animated.Value(0)); // Initial opacity 0

  useEffect(() => {
    const fetchFilteredItems = async () => {
      try {
        const items = ['Apple', 'Banana', 'Orange', 'Grapes'];
        const result = await SearchModule.searchItems(items, 'ap');
        setFilteredItems(result);

        // Start fade-in animation after items are fetched
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchFilteredItems();
  }, [fadeAnim]);

  const renderItem = ({ item }: { item: string }) => (
    <Animated.View style={{ ...styles.itemContainer, opacity: fadeAnim }}>
      <Text style={styles.itemText}>{item}</Text>
    </Animated.View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filtered Items:</Text>

      <FlatList
        data={filteredItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  listContainer: {
    paddingBottom: 20,
  },
  itemContainer: {
    padding: 12,
    marginVertical: 6,
    backgroundColor: '#e0f7fa',
    borderRadius: 8,
  },
  itemText: {
    fontSize: 18,
    color: '#00796b',
  },
});

export default App;
