import React, { useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import courseData from '../../courseData/data';
import './Courses.css';
import Course from '../Course/Course';
import Cart from '../Cart/Cart';

const Courses = () => {
    const [courses, setCourses] = useState(courseData);

    const [cart, setCart] = useState([]);

    const handleAddCourse = (course) => {
        const newCart = [...cart, course];
        setCart(newCart);
    }

    return (
        <div className="main-container row m-2 mb-5 d-flex">
            <div className="left-container col-md-1">
            </div>
            <div className="courses-container col-md-9">
                <h2 className="mb-5">Total Courses : { courses.length }</h2>
                {
                    courses.map(course => <Course course={course} key={course.id} handleAddCourse={handleAddCourse}></Course>)
                }
            </div>
            <div className="right-container col-md-2 text-left">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Courses;