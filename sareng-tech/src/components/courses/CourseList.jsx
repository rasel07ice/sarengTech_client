import { useLoaderData } from "react-router-dom";
import Course from "./Course";

const CourseList = () => {
  const courses = useLoaderData();
  console.log(courses);
  return (
    <div>
      <div className="flex flex-wrap -m-4">
        {courses.map((singleCourse) => (
          <Course key={singleCourse?._id} course={singleCourse}></Course>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
