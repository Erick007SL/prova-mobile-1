import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/firebase';

const PlaceholderImage = require('../component/image/usuario.png');

const Registrar = ({navigation}) => {
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [senha2, setSenha2] = useState('');

  const onLoginClick = () => {
    if (senha !== senha2) {
       alert("Passwords don't match.")
       return
    }

    createUserWithEmailAndPassword( auth, nomeUsuario,  senha)
    .then( (userCredential)=> {
        const user =  userCredential.user;
        //user.email
        //user.user
        console.log(user)
        //
        navigation.navigate('Home')
    } )
    .catch( (error)=> {
      const errocode = error.code ;
      const errormsg = error.message ;
      console.log( errocode );
      console.log( errormsg );
      alert( errormsg) ;
      if (error.code === 'auth/email-already-in-use') {
        console.log('Email já cadastrado!');
      }
  
      if (error.code === 'auth/invalid-email') {
        console.log('Email invalido!');
      }
      navigation.navigate('Login')
    } );
     
  }

  return (
    <View style={styles.container}>    
      <Text style={styles.titulo}>Registrar</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome de Usuário"
        onChangeText={text => setNomeUsuario(text)}
        value={nomeUsuario}
      />
      <TextInput
        style={styles.input}
        placeholder="Informe a nova Senha"
        onChangeText={text => setSenha(text)}
        value={senha}
        secureTextEntry={true}
      />
       <TextInput
        style={styles.input}
        placeholder="Confirme a nova Senha"
        onChangeText={text => setSenha2(text)}
        value={senha2}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.botao} onPress={onLoginClick}>
        <Text style={styles.textoBotao}>Entrar</Text>
      </TouchableOpacity>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    gap:10,
  },
  image: {
    width:'80%',
    height:100,
    resizeMode:"contain",
  
  },
  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 60,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  botao: {
    backgroundColor: 'orange',
    width: '75%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  textoBotao: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Registrar;
