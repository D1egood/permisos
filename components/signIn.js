import React, { useState, useEffect } from 'react';
import {View, Text} from 'react-native';
import firestore from '@react-native-firebase/firestore';

function SignIn () {

    const[user, setUser] = useState({
        name:'Juan',
        password: '12345678'
    });
    const[name, setName] = useState('');

    const test =async() => {
        try{
            const users = await firestore().collection('users').get();
            console.log(users);
        }
        catch(e){
            console.log(e);
        }
    };
    useEffect(()=>{
        test();
    },[]);


    return<View><Text>This is a view for sign in new users!!</Text></View>;
}

export default SignIn;