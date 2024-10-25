// ToDoList.js
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Pressable,
    View,
    Text,
    ScrollView
} from 'react-native';

function ToDoList({ tasks }) {
    return (
        <SafeAreaView>
            <ScrollView>
                {/* Part B: Step 2: Display the Task List */}
                {tasks.map((task, index) => (
                    <Pressable key={index}>
                        <View style={styles.task}>
                            <Text style={styles.taskText}>{task}</Text>
                        </View>
                    </Pressable>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    task: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    taskText: {
        fontSize: 16,
    }
});

export default ToDoList;
