import { useEffect } from 'react';

function Left3({ title, count }: { title: string, count: number }) {
  useEffect(()=>{
    console.log('#### Left3 렌더링.');
  });

  // useAtomValue: countAtom 구독
  // const count = useAtomValue(countAtom);

  return (
    <div>
      <h3>Left3 - { title }</h3>
      <span>{ count }</span>
    </div>
  );
}

export default Left3;