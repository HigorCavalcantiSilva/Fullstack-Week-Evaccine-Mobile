import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button } from 'react-native';
import AppDataService from './services/AppDataService';

export default function App() {

  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState(0);
  const [dataNascimento, setDataNascimento] = useState('');
  const [grupo, setGrupo] = useState(null);

  const handleAdd = () => {
    
    const pessoa = {
      nome: nome,
      cpf: cpf,
      telefone: telefone,
      email: email,
      idade: idade,
      dataNascimento: dataNascimento,
      grupo: {
        codigo: grupo
      }
    };

    AppDataService.cadastrarPessoa(pessoa)

  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Cadastro eVaccine</Text>
      <TextInput 
        onChangeText={setNome}
        style={styles.input} 
        placeholderTextColor="#fff"
        placeholder="Nome"
      ></TextInput>
      <TextInput 
        onChangeText={setCpf}
        style={styles.input} 
        placeholderTextColor="#fff"
        placeholder="CPF"
      ></TextInput>
      <TextInput 
        onChangeText={setTelefone}
        style={styles.input} 
        placeholderTextColor="#fff"
        placeholder="Telefone"
      ></TextInput>
      <TextInput 
        onChangeText={setEmail}
        style={styles.input} 
        placeholderTextColor="#fff"
        placeholder="E-Mail"
      ></TextInput>
      <TextInput 
        onChangeText={setIdade}
        style={styles.input} 
        placeholderTextColor="#fff"
        placeholder="Idade"
      ></TextInput>
      <TextInput 
        onChangeText={setDataNascimento}
        style={styles.input} 
        placeholderTextColor="#fff"
        placeholder="Data de Nascimento"
      ></TextInput>
      <TextInput 
        onChangeText={setGrupo}
        style={styles.input}
        placeholderTextColor="#fff" 
        placeholder="Grupo"
      ></TextInput>
      <Button title="Cadastrar" onPress={handleAdd}></Button>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  input:{
    alignItems: 'center',
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#0D458D',
    fontSize: 20,
    color: '#fff',
    backgroundColor: '#0D458D'
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    marginVertical: 8
  }
});
