import { useLoaderData } from "react-router-dom";
import Course from "./Course";

const CourseList = () => {
  const courses = useLoaderData();
  console.log(courses);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((singleCourse) => (
          <Course key={singleCourse?._id} course={singleCourse}></Course>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
