import React, { Component } from 'react';
import { SafeAreaView, SectionList, StyleSheet, Text, StatusBar } from 'react-native';

export default class Sectionlist extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <SectionList
                    sections={[
                        { title: 'Fruit', data: ['Orange', 'Apple'] },
                        { title: 'Vegetable', data: ['Potato', 'Tomato'] },
                        { title: 'Cold Drink', data: ['Pepsi', 'Coke'] },]}
                    renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
                    renderSectionHeader={({ section }) => <Text style={styles.header}>{section.title}</Text>}
                    keyExtractor={(item, index) => index}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16,
        marginTop: 100
    },
    item: {
        backgroundColor: "orange",
        padding: 20,
        marginVertical: 8
    },
    header: {
        fontSize: 32,
        fontWeight: 'bold'
    },
    title: {
        fontSize: 24,
    },
});
