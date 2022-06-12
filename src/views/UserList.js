// https://youtu.be/V-uYjDnuXkU?t=4339

import React, { useContext } from 'react';
import { FlatList, Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { ListItem, Avatar, Button, Icon } from 'react-native-elements';
// import users from '../data/User'
import UsersContext from '../context/usersContext';

export default props => {
    // console.warn(Object(user))

    // const ctx = useContext(UsersContext);
    // console.warn(Object.keys(ctx.state.users));
    const { state, dispatch } = useContext(UsersContext);

    const avatarUrl = 'https://cdn.pixabay.com/photo/2016/09/28/02/14/user-1699635_960_720.png'

    function confirmUserDeletion(user) {
        Alert.alert("Excluir o usuário", "Deseja excluir o usuário?", [
            {
                text: 'Sim',
                onPress() {
                    dispatch({
                        type: 'deleteUser',
                        payload: user
                    })
                }
            },
            {
                text: 'Não'
            }
        ]);
    }
    

    function getUserItem({ item: user }) {
        return (
            // ListItem não funcionou!!!

            // <ListItem
            //     key={user.id}
            //     title={user.name}
            //     subtitle={user.email}
            //     bottomDivider
            // />
            <TouchableOpacity 
                style={styles.listItem}
                key={user.id}
                onPress={() => props.navigation.navigate("UserForm", user)}
            >
                <Avatar source={{uri: avatarUrl}} />

                <Text  style={styles.listData}>{user.name} {'\n'} {user.cell} {'\n'} {user.email} {'\n'} {user.company} {'\n'} {user.note}</Text>
               
                <Button 
                    type="clear"
                    icon={<Icon name="delete" size={25} color="#9d0208" style={styles.actions} />} 
                    onPress={()=> {
                        confirmUserDeletion(user);
                    }}    
                />
                          
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.descriptions}>
            <FlatList 
                keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={getUserItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        margin: 5,
        flexDirection: 'row',
    },
    descriptions: {
        marginLeft: 5,
        flexDirection: 'row',
        
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        left: 5,
    },
    listData: {
       marginLeft: 20,
       flexDirection: 'row',
    }
})