/** @format */

import React from 'react'
import RobotEntry from './RobotEntry'

import './RobotList.css'

class RobotList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
        }
    }

    async componentDidMount() {
        const url = 'https://www.hatchways.io/api/assessment/students'
        const response = await fetch(url)
        const data = await response.json()
        this.setState({ items: data })
    }
    render() {
        const { items } = this.state
        let studentList = items.students
        console.log(studentList)
        if (studentList) {
            return (
                <div className='listContainer'>
                    {studentList.map((student) => {
                        return (
                            <RobotEntry
                                firstname={student.firstName}
                                lastname={student.lastName}
                                email={student.email}
                                city={student.city}
                                grades={student.grades}
                                company={student.company}
                                skill={student.skill}
                                pic={student.pic}
                            />
                        )
                    })}
                </div>
            )
        } else {
            return (
                <div>
                    <h1>No Students to render</h1>
                </div>
            )
        }
    }
}

export default RobotList
