import styled, {keyframes} from "styled-components";

const Container = styled.div`
  display: flex;
`;

// keyframes는 애니메이션 속성 중 하나, 중간에 스타일이 바뀌는 지점 
const rotationAnimation = keyframes`
  // 단계별로 변화를 주는 코드
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    border-radius: 100px;
  }
  100% {
    transform: rotate(360deg);
    border-radius: 0px;
  }
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 1s linear infinite; // 1초동안 선형 무한 속성값주기
  span {
    font-size: 26px;
    &:hover {
      font-size: 36px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

function App() {
  return (
    <Container>
      <Box>
        <span>🤩</span>
      </Box>
    </Container>
  );
}

export default App;
