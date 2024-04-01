import React, {useState} from 'react';
import {Alert, Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {loginStyles, viewStyles} from '../styles/Login';
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  function handleLogin() {
    console.log('Username: ' + username);
    console.log('Password: ' + password);
    setUsername('')
    setPassword('')
    Alert.alert('User Logged in!')
  }
  return (
    <>
    
      <View style={viewStyles.view1}>
        <Image
          style={loginStyles.image}
          source={require('../assets/login.jpg')}
        />
      </View>

      <View style={viewStyles.view2}>
        <Text style={loginStyles.heading}>Login</Text>
        <TextInput
          value={username}
          onChangeText={text => setUsername(text)}
          style={loginStyles.textInput}
          placeholder="Username"
        />
        <TextInput
          value={password}
          onChangeText={text => setPassword(text)}
          style={loginStyles.textInput}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity>
          <Text style={loginStyles.button} onPress={handleLogin}>
            Login
          </Text>
        </TouchableOpacity>
        <View style={viewStyles.signup}>
          <TouchableOpacity>
            <Text style={loginStyles.signup}>Signup</Text>
          </TouchableOpacity>
          <Text style={loginStyles.fp}>Forgot Password?</Text>
        </View>

        <View style={viewStyles.google}>
          <Text style={loginStyles.fp}>Login or Signin with</Text>
          <View style={viewStyles.icons}>
            <TouchableOpacity>
              <Image
                style={loginStyles.icons}
                source={require('../assets/google-logo.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={loginStyles.icons}
                source={require('../assets/fb-logo.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

export default Login;
