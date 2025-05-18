import React from 'react'
import { Children } from 'react'
import { useSafeAreaFrame } from 'react-native-safe-area-context'
import { View, Text } from 'react-native-web'


const Screenwrapper = () => {
    const { top } = useSafeAreaFrame()
    const paddingTop = top > 0 ? top : 0
  return (
      <View style={{ flex: 1, paddingTop: paddingTop }}>
          {children}
    </View>
  )
}

export default Screenwrapper