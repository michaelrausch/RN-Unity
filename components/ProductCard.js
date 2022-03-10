import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'

const ProductCard = ({onPress}) => {

    return (
        <TouchableOpacity onPress={() => {onPress('1')}}>
            <View style={styles.card}>
                <Image style={styles.image} source={require('../assets/productimage.png')}></Image>
                <Text style={styles.cardText}>Atlantis Charcoal</Text>
                <Text style={styles.cardSubtext}>Tile</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#eef4f8',
        borderRadius: 10,
        marginRight: 20,
        padding: 20
    },

    cardText: {
        color: "#223263",
        paddingTop: 10,
        width: 120,
        fontWeight: 'bold',
        fontSize: 12
    },

    cardSubtext: {
        color: "#000",
        paddingTop: 0,
        fontSize: 10
    },

    image: {
        width: 120,
        borderRadius: 10,
        height: 120
    }
})

export default ProductCard;