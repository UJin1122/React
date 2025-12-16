// 환율 계산 유틸 함수
import type { Currency } from '../types';

/**
 * 환율을 기반으로 통화를 변환합니다.
 *
 * @param amount - 변환할 금액
 * @param from - 변환 전 통화 코드
 * @param to - 변환 후 통화 코드
 * @returns 변환된 금액을 문자열로 반환
 *
 * @example
 * ```ts
 * const result = convertCurrency(1000, 'KRW', 'USD');
 * // '1000 KRW = 0.76 USD'
 * ```
 */
async function convertCurrency(amount: number, from: Currency, to: Currency) {
  // https://frankfurter.dev 참고
<<<<<<< HEAD:workspace/homework/currency-converter/step-02/src/utils/currency.ts
  if (from === to) {
    return `${amount.toLocaleString()} ${from} = ${amount.toLocaleString()} ${to}`;
  }
  const url = `https://api.frankfurter.dev/v1/latest?base=${from}&symbols=${to}`;
=======
  const url = `https://api.frankfurter.dev/v1/latest?base=${from}&symbols=${to}&amount=${amount}`;
>>>>>>> 7d45b83 (환율 계산기 완료.):workspace-ins/homework/currency-converter/step-02/src/utils/currency.ts
  console.log(url);
  // TODO: 환율 계산 로직 구현
  const response = await fetch(url);
  const data = await response.json();
<<<<<<< HEAD:workspace/homework/currency-converter/step-02/src/utils/currency.ts
  const rate = data?.rates[to];
  const converted = amount * rate;
  return `${amount.toLocaleString()} ${from} = ${converted.toLocaleString()} ${to}`;
=======
  console.log(data);
  const result = Number(data.rates?.[to]).toLocaleString();
  return data.message || `${amount.toLocaleString()} ${from} = ${result} ${to}`;
>>>>>>> 7d45b83 (환율 계산기 완료.):workspace-ins/homework/currency-converter/step-02/src/utils/currency.ts
}

export { convertCurrency };
