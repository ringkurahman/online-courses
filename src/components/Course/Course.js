import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import './Course.css';

const Course = (props) => {
    console.log(props);
    const { coursename, description, ratings, price, createdby } = props.course;
    return (
      <div className='course text-left p-5 m-5'>
        <h4>
          Course Name : <span className='text-warning'> {coursename}</span>
        </h4>
        <div className='course-info'>
          <p>Description : {description}</p>
          <p>Course Ratings : {ratings}</p>
          <p>Price : ${price}</p>
          <p>Created by : {createdby}</p>
        </div>
        <button
          className='btn btn-outline-danger text-uppercase main-button'
          onClick={() => props.handleAddCourse(props.course)}
        >
          <FontAwesomeIcon icon={faPlusSquare} />
          <span className='ml-2'>Enroll Now</span>
        </button>
      </div>
    );
};

export default Course;