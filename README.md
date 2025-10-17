# 디자인 시스템 가이드
> React + Typescript + Styled-components 기반의 디자인 시스템 가이드 입니다.

### 작업 내용
1. UI 컴포넌트 시스템 구축
2. 재사용 및 확장성을 고려한 컴포넌트 단위 UI 구성

### 예상 목표 결과
1. 디자인 및 개발 속도 향상 및 반복 작업 감소로 생산성 향상
2. 미리 설계 된 UI 요소 재사용으로, 기획 및 디자인 리소스 관리 최적화
3. 일관된 스타일 적용으로 명확한 브랜드 아이덴티티 확보
4. 통함된 스타일 가이드와 패턴을 통해 구성 요소의 시각적 일관성 유지 및 사용자 경험(UX) 향상


## 📒 Storybook 정보
Storybook은 컴포넌트 단위로 UI를 독립적으로 개발하고 테스트할 수 있는 환경을 제공합니다.
디자인 시스템에 포함된 컴포넌트를 시각적으로 확인하고 문서화할 수 있어, 디자이너·개발자 모두에게 유용합니다.

- 컴포넌트 구조, Props, 이벤트 등 인터랙션 테스트 및 문서 확인 가능

## 🚀 실행 방법
본 프로젝트는 React + Typescript + Styled-components + Storybook 기반으로 구성되어 있습니다.
아래 단계에 따라 로컬 환경에서 실행할 수 있습니다.

```
# 1. 저장소 클론
git clone https://github.com/soojida/ETC_DESIGN_SYSTEM_UI.git

# 2. 프로젝트 폴더로 이동
cd ETC_DESIGN_SYSTEM_UI

# 3. 패키지 설치
npm install

# 4. 스토리북 실행
npm run storybook

# 5. 로컬 서버 접속
# 터미널에 표시된 주소로 접속하거나 아래 주소를 브라우저에서 열기
http://localhost:6006/
```

## ⚙️ 개발 규격
| 구분                            | 항목                       | 버전        |
|--------------------------------|----------------------------|-------------|
| **언어**                        | HTML5                      | -           |
|                                | styled-components          | 6.1.13      |
|              | TypeScript                 | 4.9.5       |
| **대표 라이브러리** | React                      | 18.3.1      |
| **Github**   | [poc-design-system ↗](https://github.com/soojida/ETC_DESIGN_SYSTEM_UI.git)      | -           |
| **라이브러리** | Storybook                  | 8.4.4       |
|              | Zustand                    | 5.0.1       |

## 🌳 구조 설계
```
-- 📂 .storybook
  --- 💠 main.ts ➡ config 설정이 담긴 파일 (stories, addons 세팅)
  --- 💠 preivew.tsx ➡ global 포맷 세팅 파일 (parameters, decorators, title.. : story의 포맷)
-- 📂 src
  --- 📂 components ➡ 컴포넌트별 폴더 그룹 모음 폴더
    --- 📂 buttons ➡ 동일한 컴포넌트, 스타일, 스토리 모음 폴더
      ---- 💠 Button.tsx ➡ 컴포넌트 파일
      ---- 📕 Button.stories.tsx ➡ 스토리 파일
      ---- 🎨 Button.styles.tsx ➡ 스타일 파일
    --- 📂 (...)
  --- 📂 stories ➡ 정적 파일 및 mdx(문서) 모음 폴더
    --- 📂 assets ➡ 정적 파일 모음 폴더
    --- 📄 intro.stories.mdx ➡ 공유 문서
  --- 📂 hooks ➡ 커스텀 훅 생성 및 관리
  --- 📂 stores ➡ 상태관리 라이브러리 로직 보관
  --- 📂 styles ➡ 공통 사용 스타일 파일들이 위치하는 폴더 
    --- 🎨 GlobalStyle.ts ➡ global 스타일 파일
    --- 🎨 theme.ts ➡ 스타일 모음 파일 (font, color..)
　 --- 💠 App.tsx ➡ 프로젝트의 초기 라이브러리 설정 파일
　 --- 💠 index.tsx ➡ 프로젝트 진입 파일
--- 📄 tsconfig.json ➡ 프로젝트 컴파일 시 필요한 루트 파일, 옵션 설정
```

 ## 🎨 디자인 시스템 화면 설계 (Figma)
- Color, Components, Foundations 을 Pages 로 확인 가능합니다.

[디자인 시스템 화면 설계 둘러보기 ↗](https://www.figma.com/design/TdjKczgpkcjyg7H7P7qSje/DesignSystem-GuideLine?node-id=119-2&t=3jWSm28yGkOMfSrB-1&fuid=917934796444067749)

 
