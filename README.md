## NextJS 14로 만든 간단한 앱

### Major Commit && Learning
- create: next
    - nextjs 앱 생성
    - app 폴더 내 page 이름을 가진 jsx, tsx를 인식해서 next가 메인 페이지로 설정
    - layout.tsx 부재 시 자동 생성
- add: about-us
    - about-us 페이지 생성
    - <b>별도의 라우트 설정 없이 폴더 생성으로 next가 페이지를 설정</b>
    - 마찬가지로 page 이름을 가진 jsx, tsx를 인식해서 next가 페이지를 만들어 줌
- add: about-us/company, about-us/company/sales
    - about-us 내부에 폴더 생성 시 경로 생성
    - 폴더 내의 폴더와 함께 page.tsx를 생성하는 것은 계속해서 경로와 페이지를 생성하는 행위
- add: avatar
    - 폴더 내에 page 이름을 가진 jsx, tsx가 없을 경우 경로 생성 없음
    - page에서 import 해서 사용 가능
- add: not-found
    - not found 페이지 생성
    - nextJs의 기본 구성은 page, layout, not-found
- add: component - navigator
    - navigator 컴포넌트 생성 및 각 페이지에 적용
    - nextJs Link를 통해 페이지 이동이 가능
- add: layout and move navigation
    - layout 설정, 내부 하위 layout 생성 및 네비게이션을 layout으로 이동
- add: route group - home
    - home page를 (home) 라우트 그룹으로 이동
    - 괄호 폴더 생성 시 url에 영향을 미치지 않음
    - 그룹으로 묶어서 사용 가능
