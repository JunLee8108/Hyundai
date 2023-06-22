import styled from "styled-components";

let FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

function Page404() {
  return (
    <div>
      <FlexContainer>
        <h1 style={{ color: "white" }}>Something went wrong!</h1>
        <h1 style={{ color: "white" }}>Please go back to the previous page.</h1>
      </FlexContainer>
    </div>
  );
}

export default Page404;
