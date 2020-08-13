/** @format */

import React from 'react'
import RobotEntry from './RobotEntry'

import './RobotList.css'

class RobotList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nameFilter: '',
            students: [],
        }
    }

    nameFilterHandler = (event) => {
        this.setState({ nameFilter: event.target.value })
    }

    async componentDidMount() {
        const url = 'https://www.hatchways.io/api/assessment/students'
        const response = await fetch(url)
        const data = await response.json()
        let updatedStudentData = data.students.map((obj) => ({
            ...obj,
            tags: [],
        }))

        this.setState({
            students: updatedStudentData,
        })
    }
    render() {
        const { nameFilter, students, tagFilter } = this.state
        if (students) {
            return (
                <div>
                    <div className='listContainer'>
                        <div className='filterContainer'>
                            <input
                                placeholder='Search by Name'
                                type='text'
                                value={nameFilter}
                                onChange={(e) => {
                                    this.nameFilterHandler(e)
                                }}
                                className='filter'
                            />
                        </div>
                        <div className='studentContainer'>
                            {students
                                .filter((students) => {
                                    if (
                                        students.firstName
                                            .toLowerCase()
                                            .includes(
                                                this.state.nameFilter.toLowerCase()
                                            ) ||
                                        students.lastName
                                            .toLowerCase()
                                            .includes(
                                                this.state.nameFilter.toLowerCase()
                                            )
                                    )
                                        return true
                                    else {
                                        return false
                                    }
                                })
                                .map((student) => {
                                    return (
                                        <RobotEntry
                                            firstname={student.firstName}
                                            lastname={student.lastName}
                                            email={student.email}
                                            grades={student.grades}
                                            company={student.company}
                                            skill={student.skill}
                                            pic={student.pic}
                                        />
                                    )
                                })}
                        </div>
                    </div>
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
