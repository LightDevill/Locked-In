import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import TasksScreen from '../screens/tasks/TasksScreen';
import AddTaskScreen from '../screens/tasks/AddTaskScreen';
import MoodScreen from '../screens/mood/MoodScreen';
import MoodCheckInScreen from '../screens/mood/MoodCheckInScreen';
import MemoriesScreen from '../screens/memories/MemoriesScreen';
import AddMemoryScreen from '../screens/memories/AddMemoryScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';

const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();
const TasksStack = () => <Stack.Navigator screenOptions={{ headerShown: false }}><Stack.Screen name="TasksHome" component={TasksScreen} /><Stack.Screen name="AddTask" component={AddTaskScreen} /></Stack.Navigator>;
const MoodStack = () => <Stack.Navigator screenOptions={{ headerShown: false }}><Stack.Screen name="MoodHome" component={MoodScreen} /><Stack.Screen name="MoodCheckIn" component={MoodCheckInScreen} /></Stack.Navigator>;
const MemoryStack = () => <Stack.Navigator screenOptions={{ headerShown: false }}><Stack.Screen name="MemoriesHome" component={MemoriesScreen} /><Stack.Screen name="AddMemory" component={AddMemoryScreen} /></Stack.Navigator>;

export default function MainNavigator() {
  return <Tabs.Navigator screenOptions={{ headerShown: false }}>
    <Tabs.Screen name="Home" component={HomeScreen} />
    <Tabs.Screen name="Tasks" component={TasksStack} />
    <Tabs.Screen name="Mood" component={MoodStack} />
    <Tabs.Screen name="Memories" component={MemoryStack} />
    <Tabs.Screen name="Settings" component={SettingsScreen} />
  </Tabs.Navigator>;
}
