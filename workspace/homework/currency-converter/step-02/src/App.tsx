import './App.css';
import Input from './components/common/Input';
import Button from './components/common/Button';
import CurrencyRow from './components/currency/CurrencyRow';
import ResultDisplay from './components/currency/ResultDisplay';
import { useState } from 'react';
import type { Currency } from '@/types';
import { convertCurrency } from '@/utils/currency';

/**
 * 환율 계산기 메인 컴포넌트
 * 
 * 사용자가 입력한 금액을 선택한 통화로 변환하는 기능을 제공합니다.
 * - 금액 입력
 * - 변환할 통화 선택 (From/To)
 * - 환율 변환 실행
 * - 통화 교차 기능
 * 
 * 외부 API (frankfurter.dev)를 사용하여 실시간 환율 정보를 가져옵니다.
 */
function App() {
  const [ amount, setAmount ] = useState<number>(100);
  const [ fromCurrency, setFromCurrency ] = useState<Currency>('USD');
  const [ toCurrency, setToCurrency ] = useState<Currency>('KRW');
  const [ result, setResult ] = useState<string | null>(null);

  // 처음 기본값 변환
  // useEffect(() => {
  //   convertCurrency(amount, fromCurrency, toCurrency).then(setResult);
  // }, []);  

  const handleCurrency = async() => {
    const resultText = await convertCurrency(amount, fromCurrency, toCurrency);
    setResult(resultText);
  } ;

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <>
      <div className="card">
        <h2>환율 계산기 - step 02</h2>

        <Input id="amount" label="금액" type="number" step="1" value={ amount } onChange={(e) => {
          setAmount(Number(e.target.value));
        }} />

        <CurrencyRow
          from={fromCurrency}
          to={toCurrency}
          onFromChange={(e) => setFromCurrency(e.target.value as Currency)}
          onToChange={(e) => setToCurrency(e.target.value as Currency)}
        />

        <div className="row" style={{ marginTop: '12px' }}>
          <Button id="convert" 
          onClick={
            handleCurrency
            // async () => {
            // const resultText = await convertCurrency(amount, fromCurrency, toCurrency);
            // setResult(resultText);
            // }
          }>변환</Button>
          <Button id="swap" type="button" 
          onClick={
            handleSwap
            // () => {
            // const temp = fromCurrency;
            // setFromCurrency(toCurrency);
            // setToCurrency(temp);
            // }
          }>↺ 교차</Button></div>

        <ResultDisplay result={ result } />
      </div>
    </>
  );
}

export default App;