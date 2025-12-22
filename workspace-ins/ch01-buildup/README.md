# 1장 리액트 빌드업
* 코드 실행(GitHub Page): <https://febc-15.github.io/react/workspace-ins/index.html#01>

## 목차
- [1. 웹 개발의 변천사](#1-웹-개발의-변천사)
  - [1.1 전통적인 웹 애플리케이션](#11-전통적인-웹-애플리케이션)
  - [1.2 멀티 페이지 애플리케이션(MPA, Multi Page Application)](#12-멀티-페이지-애플리케이션mpa-multi-page-application)
  - [1.3 단일 페이지 애플리케이션(SPA, Single Page Application)](#13-단일-페이지-애플리케이션spa-single-page-application)
- [2. 리액트 개발에 자주 사용하는 자바스크립트 문법](#2-리액트-개발에-자주-사용하는-자바스크립트-문법)

# 1. 웹 개발의 변천사

## 1.1 전통적인 웹 애플리케이션
* JSP, Servlet, ASP, PHP 등으로 개발
* 브라우저는 서버에 페이지 단위로 요청을 보내며 웹서버는 완성된 페이지를(HTML) 응답
* 화면(View, UI)을 만드는 역할은 백엔드의 웹서버와 애플리케이션 서버가 담당
* 자바스크립트는 폼 데이터 검증 등의 기본적인 기능만 담당
* 브라우저 화면의 일부만 갱신이 필요한 경우에도 페이지 전체를 서버에 요청해서 받아오므로 매번 리플래시가 발생해서 UX에 좋지 않음

## 1.2 멀티 페이지 애플리케이션(MPA, Multi Page Application)
* Ajax, jQuery 등 클라이언트 자바스크립트 API 사용
* 브라우저는 서버에 페이지 단위로 요청을 보내며 웹서버는 완성된 페이지를(HTML) 응답
* 화면(View, UI)을 만드는 역할은 백엔드의 웹서버와 애플리케이션 서버가 담당
* 화면 로딩 후 사용자와 상호작용에 의해서 발생하는 부분 갱신은 프론트엔드의 JS가 담당
* 브라우저는 서버에 페이지 단위로 요청을 보내지만 같은 페이지 내에서의 컨텐츠 갱신은 Ajax를 이용해서 서버로부터 데이터를 받아온 후 DOM API로 화면 갱신
* 브라우저 화면의 일부만 갱신이 필요한 경우 전체 화면 리플래시가 줄어들어서 UX에 좋음

## 1.3 단일 페이지 애플리케이션(SPA, Single Page Application)
* 하나의 HTML 페이지에서 애플리케이션의 모든 화면과 기능 제공
* 장점
  - 전체 페이지를 다시 불러오지 않고 필요한 데이터만 로딩해서 빠른 화면 전환
  - 깜빡임 없는 화면 전환, 앱 같은 UX 구현
  - 서버 부담이 감소되며 클라이언트 중심으로 개발 가능
* 단점
  - 모든 기능을 한 페이지에서 다 구현하다 보니 상태(데이터, 변수) 관리가 어려움
  - 자바스크립트에서 HTML 코드를 생성해야 하므로 개발 생산성 저하
  - 브라우저의 DOM을 자주 갱신하다보면 성능 저하 발생
* Angular, React, Vue.js 등이 대표적으로 SPA 개발을 지원하는 프레임워크, 라이브러리
* React의 특징
  - 내장된 상태 관리 기능과 서드파티 라이브러리가 많음
  - JSX를 이용해서 HTML 생산성이 높음
  - 가상 DOM을 이용해서 성능 저하 최소

# 2. 리액트 개발에 자주 사용하는 자바스크립트 문법
## 2.1 화살표 함수 (Arrow Function)
- https://github.com/FEBC-15/js/blob/main/docs/02.js_function.md#34-es6-화살표-함수-arrow-function

## 2.2 구조 분해 할당 (Destructuring assignment)
- https://github.com/FEBC-15/js/blob/main/docs/01.js_basic.md#193-구조-분해-할당destructuring-assignment

## 2.3 나머지 매개변수 (Rest parameters)
- https://github.com/FEBC-15/js/blob/main/docs/01.js_basic.md#195-나머지-매개변수rest-parameters

## 2.4 전개 구문 (Spread syntax)
- https://github.com/FEBC-15/js/blob/main/docs/01.js_basic.md#196-전개-구문spread-syntax
  
## 2.5 삼항 연산자 (조건부 연산자)
- https://github.com/FEBC-15/js/blob/main/docs/01.js_basic.md#118-삼항-연산자-조건부-연산자

## 2.6 배열 메서드
### 2.6.1 배열 요소 추가/제거
- https://github.com/FEBC-15/js/blob/main/docs/07.js_builtin.md#83-배열-요소-추가제거

### 2.6.2 배열 요소 검색
- https://github.com/FEBC-15/js/blob/main/docs/07.js_builtin.md#84-배열-요소-검색

### 2.6.3 배열 반복 메서드
- https://github.com/FEBC-15/js/blob/main/docs/07.js_builtin.md#85-배열-반복-메서드

## 2.7 순수 함수
- https://github.com/FEBC-15/js/blob/main/docs/02.js_function.md#10-순수-함수-pure-function

## 2.8 고차 함수
- https://github.com/FEBC-15/js/blob/main/docs/02.js_function.md#11-고차-함수-higher-order-function

## 2.9 ESM (ECMAScript Modules)
- https://github.com/FEBC-15/js/blob/main/docs/08.js_etc.md#2-esm-ecmascript-modules

## 2.10 Promise
- https://github.com/FEBC-15/js/blob/main/docs/08.js_etc.md#45-비동기-함수의-결과-처리---2-promise

## 2.11 async/await
- https://github.com/FEBC-15/js/blob/main/docs/08.js_etc.md#46-비동기-함수의-결과-처리---3-asyncawait

