import React from "react";

interface IPractice {
  name: string;
  mark: string;
}

const Practice = ({ name, mark }: IPractice) => {
  const greeting = (name: string, mark: string) => {
    alert(`${name}, Hello! ${mark}`);
  };
  return (
    <div>
      <span>가나다라마바사</span>
      <button
        onClick={() => {
          greeting(name, mark);
        }}
      >
        누르면 인사해요
      </button>
    </div>
  );
};

export default Practice;
