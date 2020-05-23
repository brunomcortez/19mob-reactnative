import React from 'react';

import { StyleSheet } from 'react-native';

import { Button, Text } from 'native-base';

const style = StyleSheet.create({
    button: {
        marginBottom: 10
    }
});

const years = ['2020','2019', '2018', '2017'];

const Seasons = () => {
    return years
        .map(year => (
            <Button style={ style.button } onPress={  }>
                <Text>{ year }</Text>
            </Button>
        ));
}

export default Seasons;