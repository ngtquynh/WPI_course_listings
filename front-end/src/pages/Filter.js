import React, { useState, useEffect } from "react";
import "./Filter.css";

const Filter = ({ onFilter }) => {
  const [deliveryType, setDeliveryType] = useState("all");
  const [academicLevel, setAcademicLevel] = useState("all");
  const [academicPeriod, setAcademicPeriod] = useState("all");
  const [department, setDepartment] = useState("all");
  const [subject, setSubject] = useState("all");
  const [courseAvailability, setCourseAvailability] = useState("all");

  useEffect(() => {
    const handleFilterChange = () => {
      const filters = {
        deliveryType,
        academicLevel,
        academicPeriod,
        department,
        subject,
        courseAvailability,
      };
      onFilter(filters);
    };

    handleFilterChange();
  }, [deliveryType, academicLevel, academicPeriod, department, subject, courseAvailability, onFilter]);

  const handleClearAll = () => {
    setDeliveryType("all");
    setAcademicLevel("all");
    setAcademicPeriod("all");
    setDepartment("all");
    setSubject("all");
    setCourseAvailability("all");
  };
  return (
    <div className="filter">
      <button onClick={handleClearAll}>Clear All</button>
      <hr></hr>
      <div className="filter-row">
        <label htmlFor="deliveryType">Delivery Type</label>
        <select
          id="deliveryType"
          value={deliveryType}
          onChange={(event) => setDeliveryType(event.target.value)}
        >
          <option value="all">All Options</option>
          <option value="Hybrid">Hybrid</option>
          <option value="In-Person">In-person</option>
          <option value="Online">Online</option>
        </select>
      </div>
      <div className="filter-row">
        <label htmlFor="academicLevel">Academic Level</label>
        <select
          id="academicLevel"
          value={academicLevel}
          onChange={(event) => setAcademicLevel(event.target.value)}
        >
          <option value="all">All Options</option>
          <option value="Graduate">Graduate</option>
          <option value="Undergraduate">Undergraduate</option>
        </select>
      </div>
      <div className="filter-row">
        <label htmlFor="academicPeriod">Academic Period</label>
        <select
          id="academicPeriod"
          value={academicPeriod}
          onChange={(event) => setAcademicPeriod(event.target.value)}
        >
          <option value="all">All Options</option>
          <option value="2023 Fall A Term">2023 Fall A Term</option>
          <option value="2023 Fall B Term">2023 Fall B Term</option>
          <option value="2023 Fall Semester">2023 Fall Semester</option>
          <option value="2023 Spring Late Start Online">
            2023 Spring Late Start Online
          </option>
          <option value="2023 Summer Semester">2023 Summer Semester</option>
          <option value="2023 Summer Session I">2023 Summer Session I</option>
          <option value="2023 Summer Session II">2023 Summer Session II</option>
          <option value="2024 Spring C Term">2024 Spring C Term</option>
          <option value="2024 Spring D Term">2024 Spring D Term</option>
          <option value="2024 Spring Late Start Online">
            2024 Spring Late Start Online
          </option>
          <option value="2024 Spring Semester">2024 Spring Semester</option>
        </select>
      </div>
      <div className="filter-row">
        <label htmlFor="department">Department</label>
        <select
          id="department"
          value={department}
          onChange={(event) => setDepartment(event.target.value)}
        >
          <option value="all">All Options</option>
          <option value="Aerospace Engineering Department">
            Aerospace Engineering Department
          </option>
          <option value="Air Force Aerospace Studies (AFROTC) Department">
            Air Force Aerospace Studies (AFROTC) Department
          </option>
          <option value="Bioinformatics and Computational Biology Program">
            Bioinformatics and Computational Biology Program
          </option>
          <option value="Biology and Biotechnology Department">
            Biology and Biotechnology Department
          </option>
          <option value="Biomedical Engineering Department">
            Biomedical Engineering Department
          </option>
          <option value="Business School">Business School</option>
          <option value="Chemical Engineering Department">
            Chemical Engineering Department
          </option>
          <option value="Chemistry and Biochemistry Department">
            Chemistry and Biochemistry Department
          </option>
          <option value="Civil, Environmental, and Architectural Engineering Department">
            Civil, Environmental, and Architectural Engineering Department
          </option>
          <option value="Computer Science Department">
            Computer Science Department
          </option>
          <option value="Data Science Program">Data Science Program</option>
          <option value="Electrical and Computer Engineering Department">
            Electrical and Computer Engineering Department
          </option>
          <option value="Engineering School">Engineering School</option>
          <option value="Fire Protection Engineering Department">
            Fire Protection Engineering Department
          </option>
          <option value="Humanities and Arts Department">
            Humanities and Arts Department
          </option>
          <option value="Integrative &amp; Global Studies Department">
            Integrative &amp; Global Studies Department
          </option>
          <option value="Interactive Media and Game Development Program">
            Interactive Media and Game Development Program
          </option>
          <option value="Manufacturing Engineering Program">
            Manufacturing Engineering Program
          </option>
          <option value="Materials Science and Engineering Program">
            Materials Science and Engineering Program
          </option>
          <option value="Mathematical Sciences Department">
            Mathematical Sciences Department
          </option>
          <option value="Mechanical and Materials Engineering Department">
            Mechanical and Materials Engineering Department
          </option>
          <option value="Military Science (Army ROTC) Department">
            Military Science (Army ROTC) Department
          </option>
          <option value="Physical Education and Athletics Department">
            Physical Education and Athletics Department
          </option>
          <option value="Physics Department">Physics Department</option>
          <option value="Robotics Engineering Department">
            Robotics Engineering Department
          </option>
          <option value="Social Science and Policy Studies Department">
            Social Science and Policy Studies Department
          </option>
          <option value="Undergraduate Studies Department">
            Undergraduate Studies Department
          </option>
        </select>
      </div>
      <div className="filter-row">
        <label htmlFor="subject">Subject</label>
        <select
          id="subject"
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
        >
          <option value="all">All Options</option>
          <option value="Accounting">Accounting</option>
          <option value="Aerospace Engineering">Aerospace Engineering</option>
          <option value="Air Science">Air Science</option>
          <option value="Arabic">Arabic</option>
          <option value="Architectural Engineering">
            Architectural Engineering
          </option>
          <option value="Art">Art</option>
          <option value="Bioinformatics and Computational Biology">
            Bioinformatics and Computational Biology
          </option>
          <option value="Biology">Biology</option>
          <option value="Biomedical Engineering">Biomedical Engineering</option>
          <option value="Business">Business</option>
          <option value="Chemical Engineering">Chemical Engineering</option>
          <option value="Chemistry">Chemistry</option>
          <option value="Chinese">Chinese</option>
          <option value="Civil Engineering">Civil Engineering</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Data Science">Data Science</option>
          <option value="Economics">Economics</option>
          <option value="Electrical and Computer Engineering">
            Electrical and Computer Engineering
          </option>
          <option value="Engineering Science">Engineering Science</option>
          <option value="English">English</option>
          <option value="Entrepreneurship">Entrepreneurship</option>
          <option value="Environmental Studies">Environmental Studies</option>
          <option value="Finance">Finance</option>
          <option value="Fire Protection">Fire Protection</option>
          <option value="First Year">First Year</option>
          <option value="Geology">Geology</option>
          <option value="German">German</option>
          <option value="History">History</option>
          <option value="Humanities">Humanities</option>
          <option value="Integrative and Global Studies">
            Integrative and Global Studies
          </option>
          <option value="Interactive Media and Game Development">
            Interactive Media and Game Development
          </option>
          <option value="Interdisciplinary">Interdisciplinary</option>
          <option value="International Students - English">
            International Students - English
          </option>
          <option value="International and Global Studies">
            International and Global Studies
          </option>
          <option value="Japanese">Japanese</option>
          <option value="Management Information Systems">
            Management Information Systems
          </option>
          <option value="Manufacturing Engineering">
            Manufacturing Engineering
          </option>
          <option value="Marketing">Marketing</option>
          <option value="Material Science and Engineering">
            Material Science and Engineering
          </option>
          <option value="Mathematical Sciences">Mathematical Sciences</option>
          <option value="Mechanical Engineering">Mechanical Engineering</option>
          <option value="Military Leadership">Military Leadership</option>
          <option value="Music">Music</option>
          <option value="Operations and Industrial Engineering">
            Operations and Industrial Engineering
          </option>
          <option value="Organizational Behavior and Change">
            Organizational Behavior and Change
          </option>
          <option value="Philosophy">Philosophy</option>
          <option value="Physics">Physics</option>
          <option value="Psychology">Psychology</option>
          <option value="Religion">Religion</option>
          <option value="Robotics Engineering">Robotics Engineering</option>
          <option value="Social Science">Social Science</option>
          <option value="Sociology">Sociology</option>
          <option value="Spanish">Spanish</option>
          <option value="System Dynamics">System Dynamics</option>
          <option value="Theatre">Theatre</option>
          <option value="Wellness and Physical Education">
            Wellness and Physical Education
          </option>
          <option value="Writing">Writing</option>
        </select>
      </div>
      <div className="filter-row">
        <label htmlFor="courseAvailability">Course Availability</label>
        <select
          id="courseAvailability"
          value={courseAvailability}
          onChange={(event) => setCourseAvailability(event.target.value)}
        >
          <option value="all">All Options</option>
          <option value="Closed">Closed</option>
          <option value="Open">Open</option>
          <option value="Waitlist">Waitlist</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
