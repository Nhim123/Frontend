import { useRouter } from 'expo-router'
import { Button, Text, View } from 'react-native'

const index = () => {
  const router = useRouter()
  return (
    <View>
      <Text>login</Text>
      <Button title='home' onPress={() => router.push('home')}></Button>
    </View>
  )
}

export default index