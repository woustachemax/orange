import { useAuth } from '@/lib/authContext';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';

export function AuthScreen() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [errorState, setErrorState] = useState<string | null>(null);

  const { signIn, signUp } = useAuth();
  const router = useRouter();

  const handleAuth = async () => {
    if (!email || !password) {
      setErrorState('Please enter both Email & Password!');
      return;
    }
    if (password.length < 6) {
      setErrorState('Password must be more than 6 characters!');
      return;
    }
    
    setErrorState(null);
    
    if (isSignUp) {
      const e = await signUp(email, password);
      if (e) {
        setErrorState(e);
        return;
      }
      router.replace('/');
    } else {
      const e = await signIn(email, password);
      if (e) {
        setErrorState(e);
        return;
      }
      router.replace('/');
    }
  };

  const handleSwitchMode = () => {
    setIsSignUp((prev) => !prev);
    setErrorState(null); 
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-black"
    >
      <View className="flex-1 px-16 justify-center">
        <View className="items-center mb-2">
          <Text className="text-orange-600 text-2xl font-bold">
            {isSignUp ? 'Get Juiced 🍊' : 'Squeeze Back In 🍊'}
          </Text>
        </View>

        <View className="mb-8 mt-4">
          <Text className='text-gray-200 text-sm mb-2 ml-1'>Email</Text>
          <View className="relative">
            <TextInput
              value={email}
              onChangeText={setEmail}
              onFocus={() => setIsEmailFocused(true)}
              onBlur={() => setIsEmailFocused(false)}
              autoCapitalize="none"
              keyboardType="email-address"
              placeholder="sid@text.com"
              placeholderTextColor="gray"
              className={`bg-white border-2 rounded-full px-4 py-3 text-black text-base ${
                isEmailFocused ? 'border-orange-600' : 'border-gray-200'
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
              placeholder="* * * * * *"
              placeholderTextColor="gray"
              secureTextEntry
              className={`bg-white border-2 rounded-full px-4 py-3 text-black text-base ${
                isPasswordFocused ? 'border-orange-600' : 'border-gray-200'
              }`}
            />
          </View>
        </View>

        {errorState && (
          <Text className='text-orange-200 font-bold mb-8 italic'>* {errorState}</Text>
        )}

        <TouchableOpacity 
          className="bg-orange-600 rounded-full py-4 mb-8 active:bg-[#a04d12]"
          onPress={handleAuth}
        >
          <Text className="text-white text-center text-lg font-semibold">
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSwitchMode} className="active:opacity-70">
          <Text className="text-orange-600 text-center text-base">
            {isSignUp
              ? 'Already have an account? Sign In'
              : "Don't have an account? Sign Up"}
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

export default AuthScreen;