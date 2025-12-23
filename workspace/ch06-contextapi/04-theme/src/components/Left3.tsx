import CounterContext from '@/contexts/CounterContext';
import ThemeContext from '@/contexts/ThemeContext';
import { use, useEffect } from 'react';

function Left3() {
  useEffect(()=>{
    console.log('#### Left3 렌더링.');
  });

  let counter = null;
  counter = use(CounterContext);
  const theme = use(ThemeContext);

  const stars = theme?.theme === 'dark' ? '⭐'.repeat(counter?.count || 0) : '';

  return (

    <div className='theme'>
      <h3>Left3</h3>

      { theme?.theme === 'dark'
        ?
        <div className="stars">{stars}</div>
        :
        <span>{ counter?.count }</span>
      }
    </div>
  );
}

export default Left3;