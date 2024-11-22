import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { datasource } from './data';

const Edit = ({ route }) => {
    const { sectionTitle, index, album, updateData } = route.params;

    if (!album) {
        console.error('No album data found!');
        return null;
    }

    const [key, setKey] = useState(album.key);
    const [text, setText] = useState(album.text);
    const [imageUrl, setImageUrl] = useState(album.imageUrl);
    const navigation = useNavigation();

    const handleSave = () => {
        const updatedAlbum = { key, text, imageUrl };


        const section = datasource.find((sec) => sec.title === sectionTitle);
        if (section) {
            section.data[index] = updatedAlbum;


            updateData({
                ...section,
                data: section.data,
            });

            navigation.goBack();
        }
    };

    return (
        <View style={styles.container}>
            <TextInput value={key} onChangeText={setKey} style={styles.input} placeholder="Album Name" />
            <TextInput value={text} onChangeText={setText} style={styles.input} placeholder="Artist" />
            <TextInput value={imageUrl} onChangeText={setImageUrl} style={styles.input} placeholder="Image URL" />
            <Button title="Save" onPress={handleSave} />
            <Button
                title="Delete"
                color="red"
                onPress={() => {
                    const section = datasource.find((sec) => sec.title === sectionTitle);
                    if (section) {
                        section.data.splice(index, 1);
                        updateData({
                            ...section,
                            data: section.data,
                        });
                    }
                    navigation.goBack();
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { padding: 20 },
    input: { borderWidth: 1, marginBottom: 10, padding: 10, borderRadius: 5 },
});

export default Edit;
