import React, { useState } from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert
} from 'react-native';
import Share from './share';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 

let user = { username: '', password: '' };

const user1 = { username: 'Diego', password: 'diego' };
const Login = ({navigation}) => {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState(null);
    const [confirm,setConfirm] = useState(false);
    
    const verifyUser = async() => {
        if (username != user1.username) {
            Alert.alert('Error', "The user " + username + " doesn't exist");
            setConfirm(false);
            return false;
        } else {
            if (password === user1.password) {
                setConfirm(true);
                return true;
            } else {
                alert('Wrong Password');
                return false;
            }
        }
    };

    const onChange = (textValue) => {
        setUserName(textValue);
        user.username = textValue;
    };

    const onChangePassword = (textValue) => {
        setPassword(textValue);
        user.password = textValue;
    };

    return (
        <View style={styles.format}>
            <Text style={styles.text}>Log in!</Text>
            <TextInput placeholder="USERNAME" style={styles.input} onChangeText={(text) => onChange(text)} />
            <TextInput secureTextEntry={true} placeholder="PASSWORD" style={styles.input} onChangeText={text => onChangePassword(text)}></TextInput>
            <TouchableOpacity>{  <TouchableOpacity style={styles.buton} onPress={()=>{
                verifyUser();
            }}>
            <Text>Log In</Text></TouchableOpacity> }
            </TouchableOpacity>
            {confirm === true && navigation.navigate('Share')}
        </View>
    );
};

const styles = StyleSheet.create({
    format: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    text: {
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 22,
        letterSpacing: 4,
        fontFamily: 'serif',
        color: 'white',
    },
    input: {
        padding: 0,
        margin: 10,
        width: 100,
        height: 30,
        borderWidth: 2,
        borderRadius: 30,
        textAlign: 'center',
        letterSpacing: 2,
        textTransform: 'uppercase',

    },
    buton: {
        marginTop: 10,
        padding: 7,
        fontSize: 24,
        borderRadius: 10,
        borderWidth: 5,
        borderColor: 'black',
    },
})

export default Login
