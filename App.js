import React from 'react';
import { View, SectionList, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const datasource = [
  {
    title: "Midwest-Emo",
    color: '#ef984e',
    data: [
      {
        key: "I Thought You Didn't Even Like Leaving",
        text: "Prince Daddy and the Hyena",
        imageUrl: 'https://counterintuitiverecords.com/cdn/shop/files/itydell_645b9faf-c5b4-4d64-a18e-3058ea25255c.jpg?v=1686923711',
      },
      {
        key: 'Somewhere City',
        text: "Origami Angel",
        imageUrl:'https://upload.wikimedia.org/wikipedia/en/thumb/1/14/Somewhere_City.webp/316px-Somewhere_City.webp.png',
      },
      {
        key: "Get In Losers, We're Going to Eternal Damnation",
        text: "Forests",
        imageUrl:'https://f4.bcbits.com/img/a1121082779_10.jpg',
      },
      {
        key: 'Window Shopping',
        text: "Pines",
        imageUrl:'https://source.boomplaymusic.com/group10/M00/10/27/8e75d759a44a4fa6af78197feecc3fa4_320_320.jpg',
      },
      {
        key: 'The Albatross',
        text: "Foxxing",
        imageUrl:'https://i.scdn.co/image/ab67616d0000b273cf21bb09d919882bab66d0c3',
      },
    ],
  },
  {
    title: "Alternative Rock",
    color: '#c580bc',
    data: [
      {
        key: 'Be Here Now',
        text: "Oasis",
        imageUrl: 'https://m.media-amazon.com/images/I/91+J9kiGOpL._AC_UF1000,1000_QL80_.jpg',
      },
      {
        key: 'Parklife',
        text: "Blur",
        imageUrl: 'https://lastfm.freetls.fastly.net/i/u/500x500/19e7df241eead2786c81e5f50c4f3364.jpg',
      },
      {
        key: 'Favourite Worst Nightmare',
        text: "Arctic Monkeys",
        imageUrl: 'https://m.media-amazon.com/images/I/81jUUHuNvEL._UF894,1000_QL80_.jpg',
      },
      {
        key: 'Is This It',
        text: "The Strokes",
        imageUrl: 'https://media.pitchfork.com/photos/5929a58b13d1975652138f9b/master/pass/c1b895b7.jpg',
      },
      {
        key: 'Goo',
        text: "Sonic Youth",
        imageUrl: 'https://m.media-amazon.com/images/I/71+bOXHJKHL._UF894,1000_QL80_.jpg',
      },
    ],
  },
];

const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.albumImage} />
      <View style={styles.albumTextContainer}>
        <Text style={styles.albumName}>{item.key}</Text>
        <Text style={styles.artistName}>{item.text}</Text>
      </View>
    </TouchableOpacity>
);

const renderSectionHeader = ({ section }) => (
    <View style={[styles.sectionHeader, { backgroundColor: section.color }]}>
      <Text style={styles.sectionHeaderText}>{section.icon} {section.title}</Text>
    </View>
);

export default function App() {
  return (
      <View style={styles.container}>
        <Text style={styles.headerText}>♡ Loved Albums</Text>
        <SectionList
            sections={datasource}
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
        />
      </View>
  );
}

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
  }
});
