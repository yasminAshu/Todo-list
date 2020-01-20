import React from "react";
import styled from "styled-components";

const NotificationDiv = styled.div`
  background-color: #ff7272;
  color: white;
  padding: 1em;
}
`;

const withErrorHandling = WrappedComponent => ({ isFetching, children }) => {
  const text =
    isFetching && isFetching !== "error"
      ? "Data Fetching"
      : "Error while fetching Data";

  return (
    <WrappedComponent>
      {isFetching && <NotificationDiv>{text}</NotificationDiv>}
      {children}
    </WrappedComponent>
  );
};

export default withErrorHandling;
