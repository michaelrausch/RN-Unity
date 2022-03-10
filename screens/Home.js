import React from 'react';
import { useEffect } from 'react';
import { UnityView, UnityModule } from '@dih7/react-native-unity-view';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native'
import ProductCard from '../components/ProductCard';

const demoData = [
    {
        "name": "Cabinet"
    },
    {
        "name": "Cabinet"
    },
    {
        "name": "Cabinet"
    }
]

const Home = ({navigation}) => {
    const productSelected = (productId) => {
        
        navigation.navigate('ARView', {
            productID: productId
        })
    }

    return (
        <SafeAreaView style={styles.bg}>
            <Text style={styles.sectionHeading}>Featured Products</Text>
            
            <ScrollView horizontal={true}>
                {demoData.map((item, key) => {
                    return <ProductCard key={key} onPress={(id) => productSelected(id)}></ProductCard>
                })}
            </ScrollView>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 15
    },

    sectionHeading: {
        color: '#223263',
        fontSize: 16,
        fontWeight: '900',
        paddingBottom: 10
    }
});

export default Home;