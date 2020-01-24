import React from "react";
import styled from "styled-components";

const NotificationDiv = styled.div`
  background-color: #0080ff;
  color: white;
  padding: 1em;
}
`;

/**
 *
 *@discription - This HOC for Showing Data fetching information
  @return - Jsx of the HOc
 */
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
