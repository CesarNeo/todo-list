import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'

interface Props {
  id: number
  title: string
  isComplete: boolean
  onCompleteTask: (taskId: number) => void
  onDeleteTask: (taskId: number) => void
}

export function Task({
  title,
  isComplete,
  id,
  onCompleteTask,
  onDeleteTask
}: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onCompleteTask(id)}>
        {isComplete ? (
          <Ionicons name="checkmark-circle" size={24} color="#5E60CE" />
        ) : (
          <FontAwesome5 name="circle" size={24} color="#4EA8DE" />
        )}
      </TouchableOpacity>
      <Text style={isComplete ? styles.textTaskCompleted : styles.textTask}>
        {title}
      </Text>
      <TouchableOpacity
        style={styles.buttonRemoveTask}
        disabled={isComplete}
        onPress={() => onDeleteTask(id)}
      >
        <Ionicons name="trash-outline" size={16} color="#808080" />
      </TouchableOpacity>
    </View>
  )
}
