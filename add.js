import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Add = ({ route }) => {
    const { title, onAdd } = route.params;
    const [key, setKey] = useState('');
    const [text, setText] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const navigation = useNavigation();

    const handleSave = () => {
        if (!title || !onAdd) {
            console.error('Section title or onAdd function missing');
            return;
        }

        const newAlbum = { key, text, imageUrl };
        onAdd(title, newAlbum);

        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <TextInput value={key} onChangeText={setKey} style={styles.input} placeholder="Album Name" />
            <TextInput value={text} onChangeText={setText} style={styles.input} placeholder="Artist" />
            <TextInput value={imageUrl} onChangeText={setImageUrl} style={styles.input} placeholder="Image URL" />
            <Button title="Save" onPress={handleSave} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { padding: 20 },
    input: { borderWidth: 1, marginBottom: 10, padding: 10, borderRadius: 5 },
});

export default Add;

