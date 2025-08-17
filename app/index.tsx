import { Link, useRouter } from 'expo-router'
import { Button, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const index = () => {
  const router = useRouter()
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#2596be' }}>
      <View>
        <Text>Login</Text>
      </View>
    </SafeAreaView>
  )
}

export default index