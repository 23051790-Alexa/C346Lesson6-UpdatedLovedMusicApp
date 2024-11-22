import React, { useState } from 'react';
import { View, SectionList, Text, TouchableOpacity, StyleSheet, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { datasource } from './data';

const Home = () => {
    const [data, setData] = useState(datasource);
    const navigation = useNavigation();

    const renderItem = ({ item, index, section }) => (
        <TouchableOpacity
            style={styles.itemContainer}
            onPress={() =>
                navigation.navigate('Edit', {
                    sectionTitle: section.title,
                    index,
                    album: item,  // Passing album object to Edit screen
                    updateData: (updatedSection) => {
                        // Update the section data in state
                        setData((prevData) =>
                            prevData.map((sec) =>
                                sec.title === section.title ? updatedSection : sec
                            )
                        );
                    },
                })
            }
        >
            <Image source={{ uri: item.imageUrl }} style={styles.albumImage} />
            <View style={styles.albumTextContainer}>
                <Text style={styles.albumName}>{item.key}</Text>
                <Text style={styles.artistName}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    );

    const renderSectionHeader = ({ section }) => (
        <View style={[styles.sectionHeader, { backgroundColor: section.color }]} >
            <Text style={styles.sectionHeaderText}>{section.title}</Text>
        </View>
    );

    const handleAddAlbum = (sectionTitle, newAlbum) => {
        setData((prevData) =>
            prevData.map((section) =>
                section.title === sectionTitle
                    ? { ...section, data: [...section.data, newAlbum] }
                    : section
            )
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>♡ Loved Albums</Text>
            <Button
                title="Add New Album"
                onPress={() => navigation.navigate('Add', {
                    title: 'Midwest-Emo',
                    onAdd: handleAddAlbum,
                })}
            />
            <SectionList
                sections={data}
                keyExtractor={(item, index) => item.key + index}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingTop: 50,
        backgroundColor: '#000000',
    },
    sectionHeader: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginVertical: 5,
    },
    sectionHeaderText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: '#333',
        borderRadius: 5,
        backgroundColor: '#333',
    },
    albumImage: {
        width: 80,
        height: 80,
        borderRadius: 5,
        marginRight: 10,
    },
    albumTextContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    albumName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ddd',
    },
    artistName: {
        fontSize: 14,
        color: '#bdbdbd',
        marginTop: 4,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
        color: '#f3f3f3',
        fontFamily: 'Roboto',
    },
});

export default Home;

