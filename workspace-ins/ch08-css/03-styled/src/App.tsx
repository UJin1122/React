import Button from "@components/ui/Button";

function App(){
  return (
    <>
      <h1>03 Styled Components</h1>

      <Button>그냥 버튼</Button>
      <Button type="reset" $bg="red" $color="white">취소 버튼</Button>
      <Button type="submit" $bg="blue" $color="white">submit 버튼</Button>

    </>
  );
}

export default App;