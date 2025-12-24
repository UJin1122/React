import Button from "@components/ui/Button";

function App(){
  return (
    <>
      <h1 className="text-[2em] font-bold my-[0.67em] block">04 Tailwind CSS</h1>

      <Button>그냥 버튼</Button>
      <Button type="reset" bg="red" color="white">취소 버튼</Button>
      <Button type="submit" bg="blue" color="white">submit 버튼</Button>

    </>
  );
}

export default App;