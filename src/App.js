import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

// Box 컴포넌트의 모든 속성들을 가져 온 다음 추가적으로 아래코드를 더해준다. (깔끔😊)
const Circle = styled(Box)`
  border-radius: 50px;
`;

function App() {
  return (
    <Container>
      <Box bgColor="teal" />
      <Circle bgColor="tomato" />
    </Container>
  );
}

export default App;
