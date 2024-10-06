import { Link } from "react-router-dom";

const Course = ({ course }) => {
  return (
    <div>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={course?.img_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{course?.title}</h2>
          <p>{course?.details}</p>
          <div className="card-actions justify-end">
            <Link
              to={`/courses/${course?.course_id}`}
              className="text-blue-600 underline font-bold text-lg"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
