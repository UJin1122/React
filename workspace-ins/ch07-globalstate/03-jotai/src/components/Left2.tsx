import { countAtom, dadableCountAtom, doubleCountAtom } from '@/jotai/atoms';
import Left3 from '@components/Left3';
import { useAtomValue } from 'jotai';
import { useEffect } from 'react';

function Left2() {
  useEffect(()=>{
    console.log('### Left2 렌더링.');
  });

  const count = useAtomValue(countAtom);
  const doubleCount = useAtomValue(doubleCountAtom);
  const dadableCount = useAtomValue(dadableCountAtom);

  return (
    <div>
      <h2>Left2</h2>
      <Left3 title="countAtom" count={ count } />
      <Left3 title="doubleCountAtom" count={ doubleCount } />
      <Left3 title="dadableCountAtom" count={ dadableCount } />
    </div>
  );
}

export default Left2;