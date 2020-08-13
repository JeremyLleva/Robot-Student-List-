/** @format */

import React from 'react'
import './RobotEntry.css'

class RobotEntry extends React.Component {
    render() {
        const {
            firstname,
            lastname,
            email,
            city,
            grades,
            company,
            skill,
            pic,
        } = this.props
        let total = 0
        for (var i = 0; i < grades.length; i++) {
            total += parseInt(grades[i])
        }
        console.log(total)
        let avg = total / grades.length
        return (
            <div className='entryContainer'>
                <div className='imageContainer'>
                    <img className='image' src={pic} />
                </div>
                <div className='informationContainer'>
                    <h1 className='headerText'>
                        {firstname} {lastname}
                    </h1>
                    <div>
                        <div className='descriptionText'>Email: {email}</div>
                        <div className='descriptionText'>
                            Company: {company}
                        </div>
                        <div className='descriptionText'>Skill: {skill}</div>
                        <div className='descriptionText'>Average: {avg}%</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RobotEntry
