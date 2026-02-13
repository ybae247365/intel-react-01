import React from "react";
import "./StudentList.css";

function StudentCard({ student }) {
  return (
    <div className="student-card">
      <p>이름 : {student.name}</p>
      <p>
        점수 : {student.score}
        {student.score >= 90 && <span className="trophy"> 🏆</span>}
      </p>
    </div>
  );
}

export default StudentCard;
