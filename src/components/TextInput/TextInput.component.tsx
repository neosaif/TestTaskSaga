import React from 'react'
import {TextInput, StyleSheet, Dimensions} from 'react-native'
const {height, width} = Dimensions.get('window')

interface Props {
    placeholder: string
    value: any
    onchange: any
    keybored: any
}

const CustomTextInput = (props: Props) => {
    return (
        <TextInput
            style={InputStyle.input}
            onChangeText={props.onchange}
            value={props.value}
            placeholder={props.placeholder}
            placeholderTextColor={"#000"}
            keyboardType={props.keybored? props.keybored : "default"}
    /> 
    )
}

const InputStyle = StyleSheet.create({
    input: {height: height*.06,borderWidth: 0.5,padding: 10,color:'#000'},   
})

export default CustomTextInput
