export const datasource = [
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


export const addAlbum = (sectionTitle, album) => {
    const section = datasource.find(sec => sec.title === sectionTitle);
    if (section) {
        section.data.push(album);
    }
};

export const editAlbum = (sectionTitle, index, newAlbum) => {
    const section = datasource.find(sec => sec.title === sectionTitle);
    if (section) {
        section.data[index] = newAlbum;
    }
};

export const deleteAlbum = (sectionTitle, index) => {
    const section = datasource.find(sec => sec.title === sectionTitle);
    if (section) {
        section.data.splice(index, 1);
    }
};
