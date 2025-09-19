import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";

export const RouteGuard = ({children}:{children: React.ReactNode})=>{

  const isAuth = false;
  const router = useRouter();

  useEffect(()=>{
    if(!isAuth ){
      try{
        router.replace("/auth")
      }
      catch(e){
      }
    }
  },[isAuth, router])
  return <>{children}</>
}

export default function RootLayout() {
  return <RouteGuard> 
  <Stack>
    <Stack.Screen name="(tabs)"
    options={{
      headerShown: false
    }}/>
  </Stack>
  </RouteGuard>
}
