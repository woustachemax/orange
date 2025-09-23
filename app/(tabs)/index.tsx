import { database, DB_ID, HABBIT_ID } from "@/lib/appwrite";
import { useAuth } from "@/lib/authContext";
import { Habbits } from "@/types/database.type";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Query } from "react-native-appwrite";
import '../global.css';

export default function Index() {
  const router = useRouter();
  const[habbits, setHabbits] = useState<Habbits[]>()
  const {signOut, user} = useAuth()

  useEffect(()=>{
    fetchHabbits()
  },[user])

  const fetchHabbits = async ()=>{
    try{
      const response = await database.listDocuments(DB_ID, HABBIT_ID,[Query.equal("user_id", user?.$id ?? "")])
      console.log(response)
      setHabbits(response.documents as unknown as Habbits[])
    }
    catch(e){

    }
  }
  return (
    <View className="bg-black flex-1 px-16 justify-center">
        <View className="items-center mb-8">
            <Text className="text-white text-center text-2xl font-bold">
              Peel the Power of 
            </Text>
            <Text className="text-[#b65916] text-center text-2xl font-bold">
               C🍊nsistency
            </Text>
        </View>
        {habbits?.length == 0? 
          <Text className="items-center text-center flex-row">
            <Text className="text-white text font-bold">Your Orchard Awaits, Plant Your First Habit </Text>
            <Text onPress={()=>router.push('/addhabbit')} className="text-orange-400 italic font-bold">Here🌱</Text>
          </Text> : (
            habbits?.map((key, habbits)=>(
              <View className="items-center mb-8">

              </View>
            ))
          )}
    </View>
  );
}
