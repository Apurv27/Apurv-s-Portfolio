import React from 'react'

function SkillCard(props) {
  return (
    <>
      <div className="askillcard">
        <h1> {props.skill}</h1>
      </div>
    </>
  );
}

export default SkillCard