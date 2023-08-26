# 강의 노트

## Vue.js란?

- 간단한 화면 UI 개발부터 라우팅, SSR 등의 애플리케이션 레벨의 개발을 지원하는 프레임워크
- 리액트와 더불어 실무에서 가장 많이 사용되고 있는 프런트엔드 개발 라이브러리
- 리액트에 비해 진입 장벽이 낮고 쉽게 배울 수 있다.
- 개발 생산성이 높고 자바스크립트 지식이 크게 요구되지 않는다.
- 프런트엔드, 백엔드 등 점차 직무적으로 전문화되고 있는 상황에서 처음 개발을 시작하는 프런트엔드 개발자 또는 백엔드 개발자에게 선호되는 경향.

<br>

---

## Vue 2와 Vue 3의 차이점

- 라이브러리 내부 로직 재작성
- 주요 개발 도구들 변경
  - 예) 뷰 개발자 도구, VSCode 플러그인, Vite 기반 프로젝트 생성 등
- 컴포지션 API, Teleport 등 새로운 문법 지원
- 리액티비티 시스템 기반 API 변경
- 공식 문서 변경

<br>
<br>

---

## Vue 3의 코드 작성 방식

#### 옵션 API

```html
<div id="app">{{ message }}</div>

<script>
  Vue.createApp({
    data() {
      return {
        message: 'hi',
      };
    },
  }).mount('#app');
</script>
```

#### 컴포지션 API

```html
<div id="app">{{ message }}</div>

<script>
  Vue.createApp({
    setup() {
      const message = ref('hi');

      return { 
        message
      }
    }
  }).mount('#app');
</script>
```