import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import '../global.css';

export default function Index() {
  const router = useRouter();
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-red-500">Edit app/index.tsx to edit this screen.</Text>
      <Text className="text-black" onPress={()=>router.replace('/auth')}>Click Here for Auth</Text>
    </View>
  );
}
