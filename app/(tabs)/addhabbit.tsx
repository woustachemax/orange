import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';

const AddHabbit: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [frequency, setFrequency] = useState<string>('daily');
  const [isTitleFocused, setIsTitleFocused] = useState<boolean>(false);
  const [isDescFocused, setIsDescFocused] = useState<boolean>(false);

  const frequencyOptions = [
    { value: 'daily', label: 'Daily' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'monthly', label: 'Monthly' }
  ];

  const handleAddHabit = (): void => {
    console.log({ title, description, frequency });
  };

  return (
    <View className="bg-black flex-1 px-16 justify-center">
      <View className="items-center mb-8">
        <Text className="text-[#b65916] text-2xl font-bold">
          Plant🌱
        </Text>
      </View>

      <View className="mb-6">
        <Text className='text-gray-200 text-sm mb-2 ml-1'>Title</Text>
        <View className="relative">
          <TextInput
            value={title}
            onChangeText={setTitle}
            onFocus={() => setIsTitleFocused(true)}
            onBlur={() => setIsTitleFocused(false)}
            autoCapitalize="none"
            placeholder="What do you wanna pickup?"
            placeholderTextColor="#666"
            className={`bg-black border-2 rounded-full px-4 py-3 text-white text-base ${
              isTitleFocused ? 'border-[#b65916]' : 'border-gray-600'
            }`}
          />
        </View>
      </View>

      <View className="mb-6">
        <Text className='text-gray-200 text-sm mb-2 ml-1'>Description</Text>
        <View className="relative">
          <TextInput
            value={description}
            onChangeText={setDescription}
            onFocus={() => setIsDescFocused(true)}
            onBlur={() => setIsDescFocused(false)}
            autoCapitalize="none"
            placeholder="Why does this matter to you?"
            placeholderTextColor="#666"
            multiline
            numberOfLines={3}
            className={`bg-black border-2 rounded-full px-4 py-3 text-white text-base ${
              isDescFocused ? 'border-[#b65916]' : 'border-gray-600'
            }`}
            style={{ textAlignVertical: 'top' }}
          />
        </View>
      </View>

      <View className="mb-8">
        <Text className='text-gray-200 text-sm mb-2 ml-1'>Frequency</Text>
        <SegmentedButtons
          value={frequency}
          onValueChange={setFrequency}
          buttons={frequencyOptions}
          style={{
            backgroundColor: '#1f2937',
            borderRadius: 25,
          }}
          theme={{
            colors: {
              secondaryContainer: '#b65916',
              onSecondaryContainer: '#ffffff',
              onSurface: '#d1d5db',
            }
          }}
        />
      </View>

      <TouchableOpacity 
        className="bg-[#b65916] rounded-full py-4 mb-4 active:bg-[#a04d12]"
        onPress={handleAddHabit}
      >
        <Text className="text-white text-center text-lg font-semibold">
          Plant Habit
        </Text>
      </TouchableOpacity>

      <TouchableOpacity className="active:opacity-70">
        <Text className="text-[#b65916] text-center text-base">
          Cancel
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddHabbit;