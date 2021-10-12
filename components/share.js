import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, ImagePickerIOS } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import * as ImagePicker from 'expo-image-picker';
import * as sharing from 'expo-sharing';


    const Share = () => {
        
        const [selectedImage, setSelectedImage] = useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
      if(permissionResult.granted === false){
        alert('Permission to access camera is required');
        return;
      }
      const pickerResult = await ImagePicker.launchImageLibraryAsync();
      if(pickerResult.cancelled === true){
        return;
      }

      setSelectedImage({LocalUri: pickerResult.uri});
    };

    const openShareDialog = async () => {
      if( !(sharing.isAvailableAsync()) ){
        alert("sharing is not available");
        return;
      }

      await sharing.shareAsync(selectedImage.LocalUri);
    };
        
        
        
    return (
        <View style={styles.head}>
          <Text style={styles.text}>Pick an image Perro!</Text>
          <TouchableOpacity onPress={openImagePickerAsync}><Image source={{ uri: selectedImage !== null ? selectedImage.LocalUri
          :'https://i.picsum.photos/id/471/200/300.jpg?grayscale&hmac=VVP5WUlIS24-8K_U2RsF6As9K61ST17q4mZZSTTzkVk' }} style={styles.img} /></TouchableOpacity>
          
          <TouchableOpacity>
            { selectedImage ? (<TouchableOpacity style={styles.bu} onPress={openShareDialog}><Text>Share me</Text></TouchableOpacity>) : (<View />)}
            </TouchableOpacity>
        </View>);
    };

    const styles = StyleSheet.create({
        head: {
          flex: 3,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'darkgray',
        },
        text: {
          fontSize: 30,
          fontFamily: "serif",
          color: 'black',
        },
        img: {
          margin:20,
          width: 200,
          height: 200,
          borderWidth:3,
          borderColor: 'black',
          borderRadius: 100,
        },
        bu: {
          marginTop:10,
          padding: 7,
          fontSize:24,
          borderRadius: 10,
          borderWidth: 5,
          borderColor:'black',
        },
      });

export default Share;