import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import { styles } from './styles'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import { useState } from 'react'
import { Task } from '../../components/Task'

type Task = {
  id: number
  title: string
  isComplete: boolean
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTaskTitle, setNewTaskTitle] = useState('')

  const tasksCreated = tasks.filter(task => !task.isComplete).length
  const tasksCompleted = tasks.filter(task => task.isComplete).length

  function handleAddNewTask() {
    if (newTaskTitle === '') return

    const newTask = {
      id: new Date().getTime(),
      title: newTaskTitle,
      isComplete: false
    }

    setTasks(oldState => [...oldState, newTask])
    setNewTaskTitle('')
  }

  function handleToggleTaskCompletion(id: number) {
    setTasks(prevState => {
      return prevState.map(task => {
        if (task.id === id) {
          return {
            ...task,
            isComplete: !task.isComplete
          }
        }

        return task
      })
    })
  }

  function handleRemoveTask(id: number) {
    setTasks(prevState => {
      return prevState.filter(task => task.id !== id)
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.imageHeader}
          source={require('../../assets/Logo.png')}
        />
      </View>
      <View style={styles.containerContent}>
        <View style={styles.containerAddTask}>
          <TextInput
            style={styles.inputNewTask}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            onChangeText={setNewTaskTitle}
            value={newTaskTitle}
          />
          <TouchableOpacity
            style={styles.buttonAddTask}
            onPress={handleAddNewTask}
          >
            <Ionicons name="add-circle-outline" size={16} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={styles.containerTaskInfos}>
          <View style={styles.containerTasksInfo}>
            <Text style={styles.textInfoCreated}>Criadas</Text>
            <Text style={styles.textInfoNumber}>{tasksCreated}</Text>
          </View>
          <View style={styles.containerTasksInfo}>
            <Text style={styles.textInfoCompleted}>Concluídas</Text>
            <Text style={styles.textInfoNumber}>{tasksCompleted}</Text>
          </View>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Task
              {...item}
              onCompleteTask={handleToggleTaskCompletion}
              onDeleteTask={handleRemoveTask}
            />
          )}
          ListEmptyComponent={() => (
            <View style={styles.containerEmpty}>
              <FontAwesome5 name="clipboard-list" size={56} color="#808080" />

              <View>
                <Text style={styles.textEmptyStrong}>
                  Você ainda não tem tarefas cadastradas
                </Text>
                <Text style={styles.textEmpty}>
                  Crie tarefas e organize seus itens a fazer
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  )
}
