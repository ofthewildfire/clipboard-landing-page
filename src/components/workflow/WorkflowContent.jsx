import React from "react";

const WorkflowContent = () => {
  return (
    <div className="workflow-content">
      {/* Block one start */}
      <section className="workflow-block">
        <img
          src="images/icon-blacklist.svg"
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
      {/*  */}
      {/* Block two start */}
      <section className="workflow-block">
        <img
          src="images/icon-text.svg"
          alt="Image of a the letter A and a cursor"
          className="workflow-img"
          width={60}
          height={60}
        />
        <h3 className="workflow-block-title">Plain text snippets</h3>
        <p className="workflow-block-text">
          Remove unwanted formatting from copied text for a consistent look.
        </p>
      </section>
      {/* Block two end */}
      {/*  */}
      {/* Block three start */}
      <section className="workflow-block">
        <img
          src="images/icon-preview.svg"
          alt="Image of an eye"
          className="workflow-img"
          width={60}
          height={60}
        />
        <h3 className="workflow-block-title">Sneak preview</h3>
        <p className="workflow-block-text">
          Quick preview of all snippets on your Clipboard for easy access.
        </p>
      </section>
      {/* Block three end */}
    </div>
  );
};

export default WorkflowContent;
