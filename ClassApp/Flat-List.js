import React from 'react';
import { StyleSheet, Text, View, FlatList, } from 'react-native';
const DATA = [
    { title: "Apple", key: '1' },
    { title: "Intex", key: '2' },
    { title: "Samsung", key: '3' },
    { title: "Lava", key: '4' },
    { title: "HCL", key: '5' },
    { title: "Xiaomi", key: '6' },
    { title: "Acer", key: '7' },
];

const Item = ({ title }) => {
    return (
        <View style={styles.item}>
            <Text>{title}</Text>
        </View>
    );
}

export default function Flat1() {


    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );
    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        paddingHorizontal: 20,
    },
    item: {
        marginTop: 24,
        padding: 30,
        backgroundColor: 'orange',
        fontSize: 24,
        marginHorizontal: 10,
        marginTop: 24
    },
});
