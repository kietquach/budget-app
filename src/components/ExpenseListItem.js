import React from "react";

export default ({ description, amount, createdAt }) => (
    <div>
        <p>{description}, {amount}, created at: {createdAt}</p>
    </div>
);