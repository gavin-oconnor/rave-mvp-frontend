import React from 'react';
import { FlatList, RefreshControl, Text } from 'react-native';

export default function NearYou() {
  // wire your data here
  const data = [{ id: '1' }, { id: '2' }];
  return (
    <FlatList
      style={{ backgroundColor: 'rgb(10,10,10)' }}
      data={data}
      keyExtractor={(i) => i.id}
      renderItem={
        ({ item, index }) => (
          <Text style={{ color: 'white' }}>fkdjgkdjgkfdj</Text>
        ) /* your feed row */
      }
      refreshControl={
        <RefreshControl
          refreshing={false}
          onRefresh={() => {}}
          tintColor="white" // iOS
          colors={['white']} // Android
        />
      }
    />
  );
}
