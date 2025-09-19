import React from 'react'
import { KeyboardAvoidingView, Platform, Text, View } from 'react-native'

const authScreen = () => {
  return (
    <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
        <View>
            <Text>
                Create Account
            </Text>
        </View>

    </KeyboardAvoidingView>
  )
}

export default authScreen