import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';

const AuthScreen = () => {
  const [isSignedUp, setIsSignedUp] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const handleSwitchMode = () => {
    setIsSignedUp((prev) => !prev);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-black"
    >
      <View className="flex-1 px-16 justify-center">
        <View className="items-center mb-2">
          <Text className="text-[#b65916] text-2xl font-bold">
            {isSignedUp ? 'Welcome Back!' : 'Create Account'}
          </Text>
        </View>

        <View className="mb-8 mt-4">
          <Text className=' text-gray-200 text-sm mb-2 ml-1 '>Email</Text>
          <View className="relative">
            <TextInput
              value={email}
              onChangeText={setEmail}
              onFocus={() => setIsEmailFocused(true)}
              onBlur={() => setIsEmailFocused(false)}
              autoCapitalize="none"
              keyboardType="email-address"
              placeholder="sid@text.com"
              placeholderTextColor="#666"
              className={`bg-black border-2 rounded-full px-4 py-3 text-white text-base ${
                isEmailFocused ? 'border-[#b65916]' : 'border-gray-600'
              }`}
            />
          </View>
        </View>

        <View className="mb-10">
          <Text className='text-gray-200 text-sm mb-2 ml-1'>
            Password
          </Text>
          <View className="relative">
            <TextInput
              value={password}
              onChangeText={setPassword}
              onFocus={() => setIsPasswordFocused(true)}
              onBlur={() => setIsPasswordFocused(false)}
              autoCapitalize="none"
              placeholder="my-secret-password"
              placeholderTextColor="#666"
              secureTextEntry
              className={`bg-black border-2 rounded-full px-4 py-3 text-white text-base ${
                isPasswordFocused ? 'border-[#b65916]' : 'border-gray-600'
              }`}
            />
          </View>
        </View>

        <TouchableOpacity className="bg-[#b65916] rounded-full py-4 mb-8 active:bg-[#a04d12]">
          <Text className="text-white text-center text-lg font-semibold">
            {isSignedUp ? 'Sign In' : 'Sign Up'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSwitchMode} className="active:opacity-70">
          <Text className="text-[#b65916] text-center text-base">
            {isSignedUp
              ? "Don't have an account? Sign Up"
              : 'Already have an account? Sign In'}
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AuthScreen;