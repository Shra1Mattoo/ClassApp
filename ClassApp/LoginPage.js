import React, { Component } from "react";
import { View, SafeAreaView, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";


class LoginPage extends Component {

  constructor() {
    super()
    this.state = {
      name: '',
      nameValidate: true,
      error: '',
      error2: '',
      password: '',
      passwordValidate: true,
    }
  }
  validate(text, type) {
    alpha = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/
    num = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
    if (type == 'EnterEmail') {
      if (alpha.test(text)) {
        this.setState({
          error: ''
        })

        this.setState({

          nameValidate: true,
        })
      } else {
        this.setState({
          error: 'Invalid email'
        })
        this.setState({

          nameValidate: false,
        });
      };
    }
    if (type == 'EnterPassword') {
      if (num.test(text)) {
        {
          this.setState({
            error2: ''
          })
          this.setState({

            passwordValidate: true,
          })
        }
      }
      else {
        {
          this.setState({
            error2: 'Minimum eight characters, at least one capital letter, one number and one special character:'
          })

          this.setState({
            passwordValidate: false,
          })
        }
      }
    }
  }
  render() {

    return (

      <SafeAreaView style={styles.container}>

        <View style={styles.Viewmain}>
          <Text style={styles.Textmain}>Login App</Text>
        </View>

        <View style={styles.iconEmail}>

          <Icon style={styles.Mail} name='mail' size={20} />
          <TextInput style={[styles.TextEmail, !this.state.nameValidate ? styles.error : null]}
            onChangeText={(text) => this.validate(text, 'EnterEmail')}
            placeholder="Enter Email " placeholderTextColor={'grey'} />
        </View>

        <View style={styles.iconPassword}>
          <Icon style={styles.Key} name='key' size={20} />
          <TextInput style={[styles.TextPass, !this.state.passwordValidate ? styles.error : null]}
            secureTextEntry={true} placeholder="Enter Password " placeholderTextColor={'grey'}
            onChangeText={(text) => this.validate(text, 'EnterPassword')} />
        </View>
        <View style={styles.errorMsg}>
          {this.state.error.length > 0 && <Text style={styles.errorMsg}>{this.state.error}</Text>}</View>

        <View style={styles.errorMsg2}>
          {this.state.error2.length > 0 && <Text style={styles.errorMsg2}>{this.state.error2}</Text>}</View>
        <View>
          <TouchableOpacity onPress={() => { this.props.navigation.push("DrawerHome") }} style={styles.Lbtn}>

            <Text style={styles.Ltext}>Login</Text>

          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => { this.props.navigation.push("Signup") }} style={styles.Sbtn}>
            <Text style={styles.Stext}>Signup</Text>

          </TouchableOpacity>
        </View>

      </SafeAreaView >

    );

  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#e5e5e5',

  },
  TextEmail: {

    fontSize: 15,
    paddingLeft: 25,
    height: 70,
    width: 335,
    borderRadius: 30,
    marginBottom: 18,

    color: '#3a86ff',
  },
  TextPass: {

    fontSize: 15,
    paddingLeft: 25,
    height: 70,
    width: 335,
    borderRadius: 30,
    marginBottom: 18,

    color: '#3a86ff',

  },
  iconEmail: {
    flex: 0.1,
    width: '81%',
    backgroundColor: 'white',
    borderRadius: 30,
    height: 60,
    marginBottom: 20,
    justifyContent: 'center',


  },
  iconPassword: {
    flex: 0.1,
    width: '81%',
    backgroundColor: 'white',
    borderRadius: 30,
    height: 60,
    marginBottom: 20,
    justifyContent: 'center',

  },
  Lbtn: {
    backgroundColor: '#023e8a',
    width: 150,
    padding: 11,
    alignItems: 'center',
    height: 40,
    borderRadius: 40,
    margin: 4
  },
  Sbtn: {
    backgroundColor: '#023e8a',
    width: 150,
    padding: 11,
    alignItems: 'center',
    height: 40,
    borderRadius: 40,
    margin: 4
  },
  Mail: {

    top: 44,
    left: 3,
    color: '#023e8a',
  },
  Key: {


    top: 44,
    left: 3,
    color: '#023e8a',
  },
  Ltext: {
    color: 'white',
  },
  Stext: {
    color: 'white',
  },

  Viewmain: {
    flex: 0.3,
  },
  Textmain: {
    color: "#023e8a",
    fontWeight: 'bold',
    fontSize: 38,
    textAlign: 'center',
  },
  error: {

    borderWidth: 3,
    borderColor: 'red'
  },
  errorMsg: {
    color: "red",
    marginBottom: 5,
    paddingBottom: 5,
  },
  errorMsg2: {
    color: "red",
    marginBottom: 5,
    paddingBottom: 5,
    marginLeft: 20,
    marginRight: 20,
  },
});
export default LoginPage;