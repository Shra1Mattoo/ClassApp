import React, { Component } from "react";
import { View, SafeAreaView, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from "react-native-vector-icons/AntDesign";

class Signup extends Component {

    render() {
        return (
            <SafeAreaView style={styles.container} >
                <View style={styles.TextContainer1}>
                    <Text style={styles.Textget}>
                        Let's Get Started!
                    </Text>
                    <Text style={styles.TextAccount}>Create an account to get Access to all the feature</Text>
                </View>

                <View style={styles.iconName}>
                    <Icon style={styles.User} name="user" size={20} />
                    <TextInput
                        style={styles.Name} placeholder="Enter Name" placeholderTextColor={"grey"} ></TextInput>

                </View>
                <View style={styles.iconEmail}>
                    <Icon style={styles.Mail} name="mail" size={20} />
                    <TextInput
                        style={styles.Email} placeholder="Enter Email" placeholderTextColor={"grey"} ></TextInput>

                </View>

                <View style={styles.iconPhone}>
                    <Icon style={styles.Phoneno} name="phone" size={20} />
                    <TextInput keyboardType="numeric" placeholder="Enter Phone no " placeholderTextColor={"grey"} style={styles.Phone}></TextInput>
                </View>

                <View style={styles.iconPassword}>
                    <Icon style={styles.Key} name="key" size={20}></Icon>
                    <TextInput style={styles.Password} placeholder="Enter Password" placeholderTextColor={"grey"} secureTextEntry={true}></TextInput>
                </View>
                <View style={styles.iconPassword}>
                    <Icon style={styles.Key} name="key" size={20}></Icon>
                    <TextInput placeholder="Confirm Password" placeholderTextColor={"grey"} secureTextEntry={true} style={styles.Password}></TextInput>
                </View>
                <View>
               
                    <TouchableOpacity onPress={() => { this.props.navigation.push('DrawerHome') }} style={styles.signBtn}>
                        <Text style={styles.Textsign}>CREATE</Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        );
    };
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#e5e5e5',

    },
    Name: {

        fontSize: 15,
        paddingLeft: 25,
        marginHorizontal: 20,
        height: 30,
        color: '#3a86ff',
        paddingBottom: 15

    },
    Email: {
        fontSize: 15,
        paddingLeft: 25,
        marginHorizontal: 20,
        height: 30,
        color: '#3a86ff',
        paddingBottom: 15
    },
    Password: {

        fontSize: 15,
        paddingLeft: 25,
        marginHorizontal: 20,
        height: 30,
        color: '#3a86ff',
        paddingBottom: 15,
    },
    Phone: {

        fontSize: 15,
        paddingLeft: 25,
        marginHorizontal: 20,
        height: 30,
        color: '#3a86ff',
        paddingBottom: 15,
    },
    signBtn: {

        backgroundColor: '#023e8a',
        width: 150,
        padding: 11,
        alignItems: 'center',
        height: 40,
        borderRadius: 40,
        margin: 4
    },
    Textsign: {
        color: 'white',
        fontWeight: 'bold'
    },
    //below Icons 
    iconName: {

        width: '81%',
        backgroundColor: 'white',
        borderRadius: 30,
        height: 60,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 1,
        borderColor: "#3a86ff",
        borderWidth: true,
        flex: 0.1,
    },
    iconEmail: {
        flex: 0.1,
        width: '81%',
        backgroundColor: 'white',
        borderRadius: 30,
        height: 60,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 1,
        borderColor: "#3a86ff",
        borderWidth: true,
    },
    iconPassword: {
        flex: 0.1,
        width: '81%',
        backgroundColor: 'white',
        borderRadius: 30,
        height: 60,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 1,
        borderColor: "#3a86ff",
        borderWidth: true,
    },
    iconPhone: {
        flex: 0.1,
        width: '81%',
        backgroundColor: 'white',
        borderRadius: 30,
        height: 60,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 1,
        borderColor: "#3a86ff",
        borderWidth: true,
    },
    User: {

        top: 14,
        left: 20,
        color: '#023e8a',
    },
    Mail: {

        top: 14,
        left: 20,
        color: '#023e8a',
    },
    Key: {

        top: 14,
        left: 20,
        color: '#023e8a',
    },
    Phoneno: {

        top: 14,
        left: 20,
        color: '#023e8a',

    },
    Textget: {
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center'
    },
    TextAccount: {
        margin: 4,
        color: "grey"
    },
    TextContainer1: {
        flex: 0.2,
        marginBottom: 45,
    },


});
export default Signup;