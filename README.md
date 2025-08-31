# 디자인 시스템 가이드

서비스 목적에 맞는 일관된 구성과 패턴을 가진 규칙 언어이며,
디자인 원칙, 규격, UI 패턴과 컴포넌트, 코드를 포괄하는 표준 시스템입니다.

> 디자인 시스템을 기반으로 하면 디자인과 개발 간의 협업이 원활해지고, 반복적인 작업을 줄이며, 일관된 사용자 경험(UX)을 제공할 수 있습니다.

## 🏞️ 도입 배경
1. 일관된 UI/UX 제공
2. 중복 작업 감소 및 업무 효율성 향상
3. 컴포넌트 기반 개발의 생산성 증대
4. 프로젝트 전반의 유지보수성 강화


## 📒 Storybook 정보
Storybook은 컴포넌트 단위로 UI를 독립적으로 개발하고 테스트할 수 있는 환경을 제공합니다.
디자인 시스템에 포함된 컴포넌트를 시각적으로 확인하고 문서화할 수 있어, 디자이너·개발자 모두에게 유용합니다.

- `npm run storybook` : 로컬에서 Storybook 실행 → UI 컴포넌트 확인 및 테스트 가능
- 컴포넌트 구조, Props, 이벤트 등 인터랙션 테스트 및 문서 확인 가능


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

 
