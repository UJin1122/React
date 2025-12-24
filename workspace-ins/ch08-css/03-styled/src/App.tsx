import Button from "@components/ui/Button";

function App(){
  return (
    <>
      <h1>03 Styled Components</h1>

      <Button>그냥 버튼</Button>
      <Button type="reset" variant="cancel">취소 버튼</Button>
      <Button type="submit" variant="confirm">submit 버튼</Button>

    </>
  );
}

export default App;