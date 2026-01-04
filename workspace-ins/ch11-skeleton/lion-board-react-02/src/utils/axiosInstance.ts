import axios from "axios";
// API 서버 주소
const API_SERVER = 'https://fesp-api.koyeb.app/market';

// Axios 인스턴스 생성 함수
export function getAxiosInstance() {
  const instance = axios.create({
    baseURL: API_SERVER,
    timeout: 1000*15,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Client-Id': 'openmarket',
    }
  });

  // 요청 인터셉터 추가
  instance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsInR5cGUiOiJ1c2VyIiwiaWF0IjoxNzY3NDk4Mjg4LCJleHAiOjE3Njc1ODQ2ODgsImlzcyI6IkZFQkMifQ.bDF5yaAaBLFLYki3io84re7_BlV5VPY9PoxRIYsLDQ4`;
    config.params = {
      // delay: 500,
      ...config.params,
    };
    return config;
  }, (error) => {
    return Promise.reject(error);
  });

  // 응답 인터셉터 추가
  instance.interceptors.response.use((response) => {
    return response;
  }, (error) => {
    console.error('에러 응답 인터셉터 호출', error);
    return Promise.reject(error);
  });

  return instance;
}