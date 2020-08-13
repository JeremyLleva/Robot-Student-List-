/** @format */

import React from 'react'
import './RobotEntry.css'

class RobotEntry extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showMore: false,
            tag: '',
            tags: [],
        }
    }
    addTag = (event) => {
        let newTag = this.state.tag.trim()
        let updatedTags = this.state.tags.concat(newTag)
        this.setState({ tags: updatedTags, tag: '' })
        event.preventDefault()
    }

    updateTagValue = (tag) => {
        this.setState({
            tag: tag,
        })
    }
    toggle = () => {
        this.setState({
            showMore: !this.state.showMore,
        })
    }
    render() {
        const {
            firstname,
            lastname,
            email,
            grades,
            company,
            skill,
            pic,
        } = this.props

        let total = 0
        for (var i = 0; i < grades.length; i++) {
            total += parseInt(grades[i])
        }
        let avg = total / grades.length
        return (
            <div className='entryContainer'>
                <div className='imageContainer'>
                    <img className='image' src={pic} alt='User avatar' />
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
                    <div className='showMore'>
                        {this.state.showMore && (
                            <div>
                                {this.props.grades.map((name, index) => {
                                    return (
                                        <div className='gradesList' key={index}>
                                            Test {index + 1}: {name}%
                                        </div>
                                    )
                                })}
                                {this.state.tags && (
                                    <div className='tagsContainer'>
                                        {this.state.tags.map((x) => (
                                            <div className='tags'>{x}</div>
                                        ))}
                                    </div>
                                )}
                                <div className='formContainer'>
                                    <form onSubmit={this.addTag}>
                                        <input
                                            className='add-tag-input'
                                            value={this.state.tag}
                                            onChange={(e) => {
                                                this.updateTagValue(
                                                    e.target.value
                                                )
                                            }}
                                            type='text'
                                            placeholder='Add a tag'
                                        />
                                    </form>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className='expand-btn-container'>
                    {!this.state.showMore && (
                        <button className='expand-btn' onClick={this.toggle}>
                            +
                        </button>
                    )}

                    {this.state.showMore && (
                        <button className='expand-btn' onClick={this.toggle}>
                            -
                        </button>
                    )}
                </div>
            </div>
        )
    }
}

export default RobotEntry
