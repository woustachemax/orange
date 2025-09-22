import { useAuth } from "@/lib/authContext";
import { Text, View } from "react-native";
import '../global.css';

export default function Index() {
  // const router = useRouter();
  const {signOut} = useAuth()
  return (
    <View className="bg-black flex-1 justify-center items-center">
      <Text className="text-red-500">Edit app/index.tsx to edit this screen.</Text>
      <Text onPress={signOut}
      className="text-gray-300 hover:text-[#b65916] m-4">Sign Out</Text>
    </View>
  );
}
