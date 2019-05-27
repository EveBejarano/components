import React from 'react';

const ApprovalCard = (props) => {
  return (
    <div className="ui card" data-test="approvalCardComponen">
      <div className="content">{props.children}</div>
      <div className="extra content">
        <div className="ui two buttons" data-test="twoButtons">
          <div className="ui basic green button">Approve</div>
          <div className="ui basic red button">Reject</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;