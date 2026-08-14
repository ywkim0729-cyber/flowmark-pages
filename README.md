# Flowmark 정적 추출본

이 디렉터리는 `https://semper-paratus.manus.space/`의 공개 배포본에서 추출한 **정적 HTML·CSS·JavaScript·이미지 자산**을 GitHub Pages에서 사용할 수 있도록 정리한 결과물입니다.

## 파일 구성

| 경로 | 설명 |
|---|---|
| `index.html` | Manus 런타임·분석·PWA 주입 코드를 제외한 정적 진입 파일 |
| `404.html` | GitHub Pages에서 SPA 경로 새로고침 시 진입을 돕는 폴백 파일 |
| `assets/flowmark-app.js` | 포맷팅된 클라이언트 JavaScript 번들 |
| `assets/index-BHMiqi14.css` | 추출한 사이트 스타일시트 |
| `assets/*.png` | Flowmark 로고 및 대시보드 이미지 자산 |
| `.nojekyll` | GitHub Pages가 Jekyll 처리를 건너뛰도록 하는 빈 표시 파일 |

## 중요 제한

이 패키지는 **원본 개발 프로젝트의 TypeScript/React 컴포넌트 소스가 아니라, 브라우저에 배포된 프로덕션 빌드 결과물**입니다. `flowmark-app.js`는 읽기 쉽도록 포맷팅했지만 모듈·컴포넌트 원본 파일로 자동 복원되지는 않습니다.

번들에는 Manus 서버를 대상으로 하는 `/api/trpc`, `/api/oauth/callback`, Manus OAuth 로그인 처리 코드가 포함되어 있습니다. GitHub Pages는 서버 API·데이터베이스·OAuth 콜백을 실행하지 않으므로, 다음 기능은 별도 백엔드를 옮기거나 교체하기 전까지 완전하게 동작하지 않을 수 있습니다.

- 서버 기반 로그인 및 사용자 계정
- 중앙 데이터 저장·다중 기기 동기화
- API로 저장되는 업무, 반복 업무, 프롬프트 템플릿
- 서버 연동 알림, 파일 업로드 및 예약 작업

## GitHub Pages로 올리기

1. 이 폴더의 내용을 GitHub 저장소 루트에 넣습니다.
2. 저장소 **Settings → Pages**에서 **Deploy from a branch**를 선택합니다.
3. `main` 브랜치와 `/(root)`를 게시 원본으로 선택합니다.
4. 저장소 이름이 `flowmark`라면 `https://<사용자명>.github.io/flowmark/`에서 확인합니다.

프로젝트 페이지 경로(`/flowmark/`)에서도 동작하도록 HTML과 이미지 경로를 상대 경로로 정리했습니다.

## 권장 백업

GitHub 저장소 외에도 이 추출본 ZIP 파일과 Manus 작업 데이터 백업(`.manustask`)을 별도 저장소에 보관하십시오. GitHub Pages는 정적 UI의 보존·공개에는 적합하지만, Manus 내부 데이터와 백엔드 기능을 자동으로 이관하지는 않습니다.
