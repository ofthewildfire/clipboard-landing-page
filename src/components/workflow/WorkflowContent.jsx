import React from "react";

const WorkflowContent = () => {
  return (
    <div className="workflow-content">
      {/* Block one start */}
      <section className="workflow-block">
        <img
          src=""
          alt="Image of a scroll of paper"
          className="workflow-img"
          width={60}
          height={60}
        />
        <h3 className="workflow-block-title">Create blacklists</h3>
        <p className="workflow-block-text">
          Ensure sensitive information never makes its way to your clipboard by
          excluding certain sources.
        </p>
      </section>
      {/* Block one end */}
    </div>
  );
};

export default WorkflowContent;
