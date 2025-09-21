import { Stack } from "expo-router";

// export function RouteGuard({children}:{children: React.ReactNode}){
//   const router = useRouter();
//   let isLoggedIn = false;

//   useEffect(()=>{
//     // setTimeout(()=>{

//     // }, 10000)
//     if(!isLoggedIn) router.replace('/auth')
//   }
// )
//   return <>{children}</>
// }

export default function RootLayout() {
  return( 
  // <RouteGuard> 
  <Stack>
    <Stack.Screen name="(tabs)"
    options={{
      headerShown: false
    }}/>
    <Stack.Screen name="auth"
    options={{
      headerShown: false
    }}/>
  </Stack>
  // </RouteGuard>
  )
}
