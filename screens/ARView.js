import React from 'react';
import { useEffect } from 'react';
import { UnityView, UnityModule } from '@dih7/react-native-unity-view';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const ARView = ({ route, navigation }) => {
    const { productID } = route.params;

    useEffect(() => {
        UnityModule.pause();

        UnityModule.postMessageToUnityManager({
            name: 'ProductID',
            data: productID,
            callBack: (data) => {
                console.log('Tip', JSON.stringify(data))
            }
        });

        UnityModule.resume();

        return () => {
            console.log("Pausing")
            UnityModule.pause();
        }
    }, [productID])

    const onUnityMessage = (hander) => {
        console.log({ hander })
    }

    const onClick = () => {
        UnityModule.postMessageToUnityManager({
            name: 'ToggleRotate',
            data: '',
            callBack: (data) => {
                console.log('Result ', JSON.stringify(data))
            }
        });
    }

    return (
        <SafeAreaView style={styles.bg}>
            <View>
                <TouchableOpacity onPress={() => { onClick() }} style={{ backgroundColor: '#191919', }}>
                    <Text style={{ textAlign: 'center', color: "#fff", paddingVertical: 5 }}>Toggle Rotation</Text>
                </TouchableOpacity>
            </View>

            <UnityView style={{ flex: 1, width: '100%', }} onMessage={onUnityMessage} onUnityMessage={onUnityMessage}></UnityView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
    bg: {
        flex: 1,
        backgroundColor: '#191919'
    }
});

export default ARView;