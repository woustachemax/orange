import { client, database, DB_ID, HABBIT_ID, realTimeResponse } from "@/lib/appwrite";
import { useAuth } from "@/lib/authContext";
import { Habbits } from "@/types/database.type";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { Query } from "react-native-appwrite";
import { Swipeable } from "react-native-gesture-handler";
import "../global.css";


export default function Index() {
  const router = useRouter();
  const [habbits, setHabbits] = useState<Habbits[]>();
  const { signOut, user } = useAuth();

  const swipableRef = useRef<{[key: string]: Swipeable | null}>({})
  useEffect(() => {
  if(user){
  const channel = `databases.${DB_ID}.collections.${HABBIT_ID}.documents`;
  const habitsChannel = client.subscribe(channel,
    (response: realTimeResponse)=>{
      if(response.events.includes("databases.*.collections.*.documents.*.create")){
        fetchHabbits();
      }
      else if(response.events.includes("databases.*.collections.*.documents.*.update")){
        fetchHabbits();
      }
      else if(response.events.includes("databases.*.collections.*.documents.*.delete")){
        fetchHabbits();
      }
    }
  );
    fetchHabbits();

    return ()=>{
      habitsChannel()
    }
  }
  }, [user]);

  function capitalize(str: string) {
    if (!str) return "";
    return str[0].toUpperCase() + str.slice(1);
  }

  const fetchHabbits = async () => {
    try {
      const response = await database.listDocuments(DB_ID, HABBIT_ID, [
        Query.equal("user_id", user?.$id ?? ""),
      ]);
      setHabbits(response.documents as unknown as Habbits[]);
    } catch (e) {}
  };
    const onDeleteHandler = async (id: string)=>{
      try{
        await database.deleteDocument(HABBIT_ID, DB_ID, id)
      }
      catch(e){
        console.error(e)
      }
    }


    const renderRightAction = () => (
      <View className="flex-1 justify-center items-end rounded-l-xl">
        <Text className="text-orange-500 font-bold text-3xl">🍊</Text>
      </View>
    );

    const renderLeftAction = () => (
      <View className="flex-1 justify-center items-start rounded-r-xl">
        <Text className="text-gray-400 font-bold text-3xl">🏳️</Text>
      </View>
    );

  return (
    <View className="bg-black flex-1 px-6 pt-24">
      <View className="items-center mb-8">
        <Text className="text-white text-center text-2xl font-bold">
          Peel the Power of
        </Text>
        <Text className="text-[#b65916] text-center text-2xl font-bold">
          C🍊nsistency
        </Text>
      </View>
      <ScrollView className="flex-1">
        {habbits?.length == 0 ? (
          <Text className="flex-row text-center items-center">
            <Text className="text-white font-bold">
              Your Orchard Awaits, Plant Your First Habit{" "}
            </Text>
            <Text
              onPress={() => router.push("/addhabbit")}
              className="text-orange-400 italic font-bold"
            >
              Here🌱
            </Text>
          </Text>
        ) : (
          habbits?.map((habbit, index) => (
            <Swipeable ref={(ref)=>{swipableRef.current[habbit.$id] = ref}}
            key={index}
            overshootLeft={false}
            overshootRight={false}
            renderLeftActions={renderLeftAction}
            renderRightActions={renderRightAction}
            onSwipeableOpen={(direction)=>{
              if(direction === "left") onDeleteHandler(habbit.$id);
            }}>
            <View
              className="mb-4 border-2 border-white py-4 px-4 border-double rounded-2xl bg-white"
              style={{
                shadowColor: "orange",
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 1,
                shadowRadius: 12,
                elevation: 12,
              }}
              key={habbit.$id ?? index}
            >
              <Text className="font-bold text-2xl">
                {capitalize(habbit.title)}
              </Text>
              <Text className="text-lg text-orange-600">
                {capitalize(habbit.description)}
              </Text>
              <View className="flex-row justify-between w-full items-center mt-2">
                <View className="flex-row items-center space-x-2 bg-orange-300 py-1 px-2 rounded-full">
                  <Text className="text-lg">🍊</Text>
                  <Text className="font-semibold text-lg">
                    {habbit.streak_count} Oranges
                  </Text>
                </View>
                  <View className="bg-gray-600 rounded-full py-1 px-2">
                    <Text className="text-gray-200 font-semibold">
                    {capitalize(habbit.frequency)}
                    </Text>
                  </View>
              </View>
            </View>
            </Swipeable>
          ))
        )}
      </ScrollView>
      <View className="absolute top-16 right-6 rounded-full bg-red-600 py-1 px-1 ">
          <AntDesign onPress={signOut} name="logout" size={24} color="white" />
      </View>
    </View>
  );
}
