import React, { useContext, useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';
import UsersContext from '../context/usersContext';


export default ({route, navigation}) => {
    // console.warn(Object.keys(props.route.params.name))
    // console.warn(Object.keys(navigation))

    const [user, setUser] = useState(route.params ? route.params : {} );

    const { dispatch } = useContext(UsersContext);

    return (
        <View style={style.form}>
            <Text>Nome:</Text>
            <TextInput 
                placeholder="Informe o nome"
                style={style.textInput}
                onChangeText={(name) => {setUser({...user, name})}}
                value={user.name}
            />

            <Text>Telefone:</Text>
            <TextInput 
                placeholder="Informe o número de tefelone"
                style={style.textInput}
                onChangeText={(cell) => {setUser({...user, cell})}}
                value={user.cell}
            />

            <Text>Email:</Text>
            <TextInput 
                placeholder="Informe o email"
                style={style.textInput}
                onChangeText={(email) => {setUser({...user, email})}}
                value={user.email}
            />

            <Text>Empresa:</Text>
            <TextInput 
                placeholder="Informe o nome da empresa"
                style={style.textInput}
                onChangeText={(company) => {setUser({...user, company})}}
                value={user.company}
            />

            <Text>Observações:</Text>
            <TextInput 
                placeholder="(Opcional) Deixe suas observações"
                style={style.textInput}
                onChangeText={(note) => {setUser({...user, note})}}
                value={user.note}
            />

            <Text>URL do Avatar:</Text>
            <TextInput 
                placeholder="Informe a URL do avatar"
                style={style.textInput}
                onChangeText={(avatarUrl) => {setUser({...user, avatarUrl})}}
                value={user.avatarUrl}
            />

            <Button 
                title="Salvar"
                onPress={() => {
                    dispatch({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload: user,
                    });
                    navigation.goBack();

                }}/>

        </View>
    );
};

const style = StyleSheet.create({
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10
    },
    form: {
        padding: 12,
    }
});
