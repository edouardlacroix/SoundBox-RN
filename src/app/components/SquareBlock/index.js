import * as React from 'react';
import { Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import styles from './styles'
import { Audio } from "expo-av";

class SquareBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false,
        }
        this.soundObject = new Audio.Sound();
        this.soundObject.loadAsync(this.props.file);

    }

    playSound() {
        try {
            if (!this.state.isPlaying) {
                this.setState({ isPlaying: true })
                this.soundObject.playAsync();
            } else {
                this.soundObject.stopAsync()
                this.setState({ isPlaying: false })
            }
        } catch (error) {
            console.log('Sorry, something went missing...')
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.playSound()}>

                    <Text style={styles.title}>{this.props.title}</Text>

                </TouchableOpacity>
            </View>
        );
    }
}
export default SquareBlock;