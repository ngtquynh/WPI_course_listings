import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ClassesList from './ClassesList';
import SearchBar from './SearchBar';
import Filter from './Filter';
import './ClassesPage.css';

const ClassPage = () => {
  const [classList, setClassList] = useState([]);
  const [filteredClassList, setFilteredClassList] = useState([]);
  const [filters, setFilters] = useState({});
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/api/data');
      const classData = response.data.Report_Entry || [];
      setClassList(classData);
      setFilteredClassList(classData);
      setIsLoading(false); // Set loading state to false after data is fetched
    } catch (error) {
      console.log('Error fetching data:', error);
      setIsLoading(false); // Set loading state to false if there's an error
    }
  };
  const handleSearch = (query) => {
    const filteredList = classList.filter((course) => {
      const isDeliveryTypeMatch =
        filters.deliveryType === "all" ||
        course.Delivery_Mode === filters.deliveryType;
      const isAcademicLevelMatch =
        filters.academicLevel === "all" ||
        course.Academic_Level === filters.academicLevel;
      const isAcademicPeriodMatch =
        filters.academicPeriod === "all" ||
        course.Offering_Period === filters.academicPeriod;
      const isDepartmentMatch =
        filters.department === "all" ||
        course.Course_Section_Owner === filters.department;
      const isSubjectMatch =
        filters.subject === "all" || course.Subject === filters.subject;
      const isCourseAvailabilityMatch =
        filters.courseAvailability === "all" || course.Section_Status === filters.courseAvailability;
  
      const isCourseTitleMatch = course.Course_Title.toLowerCase().includes(
        query.toLowerCase()
      );
  
      return (
        isDeliveryTypeMatch &&
        isAcademicLevelMatch &&
        isAcademicPeriodMatch &&
        isDepartmentMatch &&
        isSubjectMatch &&
        isCourseAvailabilityMatch &&
        isCourseTitleMatch
      );
    });
    setFilteredClassList(filteredList);
  };
  
  return (
    <div className="class-page">
      <h1>Search Courses</h1>
      <div className="search-container">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="content-container">
        <div className="filter-container">
          <Filter onFilter={setFilters} />
        </div>
        <div className="classes-list-container">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <ClassesList classes={filteredClassList} filters={filters} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ClassPage;
