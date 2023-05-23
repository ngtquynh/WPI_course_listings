import React, { useState, useEffect } from "react";
import Card from "../UI/Card";
import "./ClassesList.css";

const ClassesList = ({ classes, filters }) => {
  const [showDetailedView, setShowDetailedView] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [currentPage, setCurrentPage] = useState(1);
  const [classesPerPage] = useState(100); // Number of classes to display per page

  const filteredClasses = classes.filter(
    (course) =>
      (filters.deliveryType === "all" ||
        course.Delivery_Mode === filters.deliveryType) &&
      (filters.academicLevel === "all" ||
        course.Academic_Level === filters.academicLevel) &&
      (filters.academicPeriod === "all" ||
        course.Offering_Period === filters.academicPeriod) &&
      (filters.department === "all" ||
        course.Course_Section_Owner === filters.department) &&
      (filters.subject === "all" || course.Subject === filters.subject) &&
      (filters.courseAvailability === "all" ||
        course.Section_Status === filters.courseAvailability)
  );

  const indexOfLastClass = currentPage * classesPerPage;
  const indexOfFirstClass = indexOfLastClass - classesPerPage;
  const currentClasses = filteredClasses.slice(
    indexOfFirstClass,
    indexOfLastClass
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setActiveIndex(-1);
  };

  const toggleDescription = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  const toggleView = () => {
    setShowDetailedView((prevState) => !prevState);
    setActiveIndex(-1);
  };

  useEffect(() => {
    setCurrentPage(1); // Reset current page when filters change
  }, [filters]);

  return (
    <>
      <div className="classes-list">
        <div className="classes-list-header">
          <div class="line">
            <p>{`${filteredClasses.length} Matching Items`}</p>
          </div>
          <button onClick={toggleView}>
            {showDetailedView ? "Show condensed view" : "Show detailed view"}
          </button>
        </div>
        {filteredClasses.length === 0 ? ( // Display a message if no classes match the filters
          <p>No matching items found.</p>
        ) : (
          currentClasses.map((course, index) => (
            <Card
              key={index}
              header={
                <>
                  <h2>{course.Course_Title}</h2>
                  <p>Offering Period: {course.Offering_Period}</p>
                </>
              }
              body={
                showDetailedView && (
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          Credits: <b>{course.Credits}</b>
                        </td>
                        <td>
                          Class Times: <b>{course.Meeting_Patterns}</b>
                        </td>
                        <td>
                          Start: <b>{course.Course_Section_Start_Date}</b>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Delivery Mode: <b>{course.Delivery_Mode}</b>
                        </td>
                        <td>
                          Enrolled: <b>{course.Enrolled_Capacity}</b>
                        </td>
                        <td>
                          End: <b>{course.Course_Section_End_Date}</b>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Instructors: <b>{course.Instructors}</b>
                        </td>
                        <td>
                          Waitlist: <b>{course.Waitlist_Waitlist_Capacity}</b>
                        </td>
                        <td>
                          Locations: <b>{course.Locations}</b>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Format: <b>{course.Instructional_Format}</b>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                )
              }
              footer={
                showDetailedView && (
                  <button onClick={() => toggleDescription(index)}>
                    {activeIndex === index
                      ? "Hide Description"
                      : "Show Description"}
                  </button>
                )
              }
              description={
                <>
                  {showDetailedView && activeIndex === index && (
                    <>
                      <div 
                        dangerouslySetInnerHTML={{
                          __html: course.Course_Description,
                        }}
                      />
                      <p>
                        <a
                          href="https://wpi.bncollege.com/course-material/course-finder"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Find textbooks
                        </a>
                      </p>
                    </>
                  )}
                </>
              }
            />
          ))
        )}
        {filteredClasses.length > classesPerPage && (
          <div className="pagination">
            {Array.from({
              length: Math.ceil(filteredClasses.length / classesPerPage),
            }).map((item, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={currentPage === index + 1 ? "active" : ""}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ClassesList;
