import React from "react";
import "../styles/AboutMe.css";
import profileImage from "../assets/profile.jpg"; // 사진 경로는 필요에 따라 변경하세요.

const AboutMe = () => {
  return (
    <div className="about-me-card">
      {/* 왼쪽: 프로필 이미지 */}
      <div className="card-image">
        <img src={profileImage} alt="Profile" />
      </div>
      {/* 오른쪽: 텍스트 정보 */}
      <div className="card-info">
        <h1>김영선</h1>
        <p>
          <strong>학력:</strong>인하대학교 컴퓨터공학과 졸업
        </p>
        <p>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/DDOONG211107"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/DDOONG211107
          </a>
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
