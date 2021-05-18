1. npm init
2. yarn add next@9
3. package.json에 script에 "dev":"next" 추가
4. pages폴더 만들고 index.js추가 (next는 무조건 pages를 만들어줘야하고 그 안에 들어있는 것들은 자동으로 next.js가 코드스플리팅을 해준다)
5. yarn add react react-dom
6. yarn run dev해보기
7. pages/ => profile.js, signup.js 만들기
8. components/AppLayout.js 만들기
9. yarn add prop-types
10. components/AppLayout에 prop-types 적용
11. pages/ =>index, profile, signup에 => AppLayout 적용
12. yarn add -D eslint eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks (개발버전에서만 코드 깔끔하게 만들자!)
13. .eslintrc 만들기
14. yarn add antd styled-components @ant-design/icons
15. pages/\_app.js를 만들어서 공통적인.. 가령 공통 css와 같은 처리를 해준다. (pages/index.js에 return하는 부분이 \_app.js로 들어간다
16. AppLayout에 로그인 여부에 따른 LoginForm, UserProfile추가
17. LoginForm에 login 로직 설정하여 UserProfile.js와 LoginForm을 분기해주는 로직 추가
18. components에서 NicknameEditForm, FollowList 제작하여 pages/profile.js에 추가
19. redux 붙이기
20. yarn add redux react-redux next-redux-wrapper redux-saga next-redux-saga redux-devtools-extension
