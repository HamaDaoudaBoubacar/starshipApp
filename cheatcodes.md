rnf:

import React from 'react'
import { View, Text } from 'react-native'

export default function $1() {
  return (
    <View>
      <Text> $2 </Text>
    </View>
  )
}
-------------------------------
rnf2:

import React from 'react'
import { View, Text } from 'react-native'

const $1 = () => {
  return (
    <View>
      <Text> $2 </Text>
    </View>
  )
}

export default $1
--------------------------------
map⇥ map
${1}.map((${2:item}) => {
	${0}
});
---------------------------------
filter⇥ filter
${1}.filter(${2:item} => {
	${0}
});
