import Course from './Course';
import React, { useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import TermSelector from './TermSelector';
import CourseSelector from './CourseSelector';

const termMap = { F: 'Fall', W: 'Winter', S: 'Spring'};
const terms = Object.values(termMap);

const getCourseTerm = course => (
  termMap[course.id.charAt(0)]
)

const CourseList = ({courses, view}) => {
  const [selectedTerm, setSelectedTerm] = useState('Winter');
  const termCourses = courses.filter(course => selectedTerm === getCourseTerm(course));

  return (
    <ScrollView>
      <View style={styles.courseList}>
        <TermSelector selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm}/>
        <CourseSelector courses={termCourses} view={view}/>
      </View>
    </ScrollView>
    
  )};

const styles = StyleSheet.create({ 
    courseList: {
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
    })

export default CourseList;