export const header = {
    name: '김준서',
    desc: '프론트엔드 개발자',
    email: 'jykim9868@gmail.com',
    github: 'https://github.com/Narcoker',
    blog: 'https://velog.io/@narcoker',
};

export const intro = {
    subject: 'Introduce',
    profile: 'profile.jpeg',
    intro: `
    안녕하세요. 프론트엔드 개발자 김준서 입니다.




    저의 개발자 커리어의 목표는 


    "사용자의 행동 패턴을 수집 후 가공하여 새로운 지표를 제공해줌으로써, 


    사용자에게 유익한 정보를 제공해 줄 수 있는 서비스를 만드는 프로젝트의 리더"가 되는 것입니다.

    

    요즘은 좋은 팀워크를 만들어내기 위해 어떻게 해야할지 고민 중입니다.
    


    "수평적인 구조여도 팀 내 의사결정자를 정하기",


    "치명적인 상황이 아니면, 내 의견 애착 버리기" 등 
    
    
    다양한 시도를 해보며 사회적 테크닉 증진에 노력을 가하고 있습니다.
    `,
};

export const skills = {
    subject: 'Skills',
    contents: [
        {
            category: 'Frontend',
            desc: [
                { name: 'React', proficiency: 65 },
                { name: 'React Native', proficiency: 30 },
                { name: 'Redux', proficiency: 65 },
                { name: 'Recoil', proficiency: 65 },
                { name: 'Styled-Component', proficiency: 55 },
                { name: 'HTML', proficiency: 70 },
                { name: 'CSS', proficiency: 70 },
                { name: 'TypeScript', proficiency: 30 },
                { name: 'JavaScript', proficiency: 80 },
            ],
        },
        // {
        //     category: 'Backend',
        //     desc: [
        //         { name: 'Nodejs', proficiency: 20 },
        //         { name: 'PHP', proficiency: 40 },
        //         { name: 'C++', proficiency: 45 },
        //         { name: 'JAVA', proficiency: 30 },
        //         { name: 'Python', proficiency: 50 },
        //     ],
        // },
        {
            category: 'ETC',
            desc: [
                { name: 'Python', proficiency: 50 },
                { name: 'Java', proficiency: 30 },
                { name: 'Git', proficiency: 30 },
                { name: 'Github', proficiency: 30 },
                { name: 'Jira', proficiency: 30 },
                { name: 'Notion', proficiency: 30 },
                { name: 'Slack', proficiency: 30 },
            ],
        },
    ],
};

export const experience = {
    subject: 'Experience',
    contents: [
        // {
        //     title: '~ 근무',
        //     subtitle: '~ 프로젝트 참여',
        //     period: '2021.01 ~ 2021.12',
        //     link: [],
        //     desc: [
        //         { main: '~ 사내 프로젝트 참여', sub: ['~ 라이브러리 사용', '~ 백엔드 개발자로 참여'] },
        //         { main: '~ 사내 프로젝트 참여', sub: [] },
        //     ],
        //     keywords: [],
        //     folder: '',
        //     images: [],
        //     videos:[],
        //     pdfs: [],
        // },

        {
            title: '구름톤 챌린지',
            subtitle:
                '4주 동안 매일 제한 시간안에 1문제씩 꾸준히 풀고, 우수 참여자 50명은 본선에서 오프라인 팀 챌린지 진행',
            period: '2023.08.14 ~ 2023.09.23',
            link: [
                {
                    text: 'velog - 구름톤 챌린지',
                    url: 'https://velog.io/@narcoker/series/%EA%B5%AC%EB%A6%84%ED%86%A4-%EC%B1%8C%EB%A6%B0%EC%A7%80',
                },
            ],
            desc: [
                { main: '매일 스스로 정한 시간에 문제를 풀고 문제 풀이를 velog에 작성', sub: [] },
                {
                    main: '참여자 972명 중 우수 참여자(50명)로 선발',
                    sub: ['React 오프라인 팀 챌린지 해커톤 진행'],
                },
            ],
            keywords: ['우수 참여자 선발', '알고리즘 문제 풀이', '오프라인 팀 챌린지 - React 해커톤'],
            folder: 'experiences/',
            images: [],
            videos: [],
            pdfs: [],
        },
        {
            title: '구름톤 트레이닝 풀스택 1기 - 옹기종기 스터디',
            subtitle: '구름톤 트레이닝 풀스택 과정에서 진행한 Computer Science, 알고리즘 문제 풀이, 프로젝트 스터디',
            period: '2023.05.24 ~ 2023.09.06',
            link: [
                {
                    text: 'velog - 자료구조 정리',
                    url: 'https://velog.io/@narcoker/series/%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0',
                },
                {
                    text: 'velog - 운영체제 정리',
                    url: 'https://velog.io/@narcoker/series/%EC%9A%B4%EC%98%81%EC%B2%B4%EC%A0%9C',
                },
                {
                    text: 'velog - 네트워크 정리',
                    url: 'https://velog.io/@narcoker/series/%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC',
                },
                {
                    text: 'velog - 데이터베이스 정리',
                    url: 'https://velog.io/@narcoker/series/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4',
                },
                {
                    text: 'velog - 디자인 패턴 정리',
                    url: 'https://velog.io/@narcoker/series/%EB%94%94%EC%9E%90%EC%9D%B8-%ED%8C%A8%ED%84%B4',
                },
                {
                    text: 'velog - 알고리즘 문제 풀이',
                    url: 'https://velog.io/@narcoker/series/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8',
                },
                {
                    text: 'velog - 1차 스터디 회고',
                    url: 'https://velog.io/@narcoker/%EA%B5%AC%EB%A6%84%ED%86%A4-%ED%8A%B8%EB%A0%88%EC%9D%B4%EB%8B%9D-%ED%92%80%EC%8A%A4%ED%83%9D-1%EA%B8%B0-6%EC%A3%BC%EC%B0%A8-%ED%9A%8C%EA%B3%A0-%EC%B2%AB%EB%B2%88%EC%A7%B8-%EC%84%B1%EA%B3%BC-1%EC%B0%A8-%EC%8A%A4%ED%84%B0%EB%94%94-1%EC%9C%84-%EC%8A%A4%ED%84%B0%EB%94%94-%EB%B2%A0%EC%8A%A4%ED%8A%B8-%ED%8C%80%EC%9B%90%EC%83%81',
                },
                {
                    text: 'velog - 2차 스터디 회고',
                    url: 'https://velog.io/@narcoker/%EA%B5%AC%EB%A6%84%ED%86%A4-%ED%8A%B8%EB%A0%88%EC%9D%B4%EB%8B%9D-%ED%92%80%EC%8A%A4%ED%83%9D-1%EA%B8%B0-16%EC%A3%BC%EC%B0%A8-%ED%9A%8C%EA%B3%A0-2%EC%B0%A8-%EC%8A%A4%ED%84%B0%EB%94%94-2%EC%9C%84-Web-IDE-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%8B%9C%EC%9E%91',
                },
            ],
            desc: [
                {
                    main: '스터디 팀장을 맡아 스터디가 올바른 방향으로 나아갈 수 있도록 선도',
                    sub: [
                        '스터디 시작 전, 스터디 기간 동안 매일 어떤 과목을 얼마 만큼의 분량으로 공부할지 수립',
                        '매일 스터디 회고를 통해 각자 정확한 지식을 습득했는지 발표',
                        '공부한 내용이 서로 다른 경우 어떤 자료를 통해 공부했는지 공개하고, 팀 내에서 해당 자료 검토 후 지식 통일',
                        '알고리즘 문제 풀이의 경우, 개인의 성장을 가시화하여 자극을 받기 위해 매일 문제 풀이 시간을 기록',
                        '기록한 시간들을 문제 난이도별로 묶은 후 그래프로 도식화하여 성장도 측정',
                    ],
                },

                {
                    main: '1차 스터디 - 우수 스터디 선발 - 16개의 스터디 그룹 중 1위',
                    sub: [
                        '산출물 1 : 공부한 지식을 모아 각자 CS 문서 생성 - 자료구조, 운영체제, 네트워크',
                        '산출물 2 : 모든 문제의 풀이 시간을 측정해서 성장 과정 기록',
                    ],
                },
                {
                    main: '2차 스터디 - 우수 스터디 선발 - 13개 스터디 그룹 중 2위',
                    sub: [
                        '산출물 1: 공부한 지식을 모아 각자 CS 문서 생성 - 데이터베이스, 디자인 패턴',
                        '산출물 2: 모든 문제의 풀이 시간을 측정해서 그래프로 성장 과정 도식화',
                        '산출물 3: Instagram 클론 코딩 - 팀 프로젝트',
                        '2차 스터디 이후 팀원 증가, 6명 -> 8명',
                    ],
                },
                {
                    main: '스터디 결과 발표를 통한 우수성 증명 후, 팀원 증가',
                    sub: ['1차 스터디 이후 팀원 2배 증가, 3명 -> 6명', '2차 스터디 이후 팀원 1.3배 증가,  6명 -> 8명'],
                },
            ],
            keywords: [
                '우수 스터디 선발',
                '스터디 1위',
                '스터디 2위',
                '자료구조',
                '운영체제',
                '네트워크',
                '데이터베이스',
                '디자인 패턴',
                '알고리즘 문제풀이',
                '프로젝트',
            ],
            folder: 'experiences/goorm-study',
            images: [],
            videos: [],
            pdfs: [
                { pdf: '1.pdf', thumbnail: '1-thumbnail.png' },
                { pdf: '2.pdf', thumbnail: '2-thumbnail.png' },
            ],
        },

        {
            title: '구름톤 트레이닝 풀스택 1기',
            subtitle: '구름 x 카카오 x 인프런에서 주최하는 6개월 과정의 풀스택 자율형 부트캠프',
            period: '2023.05.23 ~ 2023.11.28 - 진행중',
            link: [
                {
                    text: 'velog - 주차별 회고록',
                    url: 'https://velog.io/@narcoker/series/%EA%B5%AC%EB%A6%84%ED%86%A4-%ED%8A%B8%EB%A0%88%EC%9D%B4%EB%8B%9D-%ED%92%80%EC%8A%A4%ED%83%9D',
                },
            ],
            desc: [],
            keywords: [
                'HTML',
                'CSS',
                'JavaScript',
                'React',
                'Redux',
                'Redux-ToolKit',
                'Emotion',
                'TDD',
                'Java',
                'Spring',
                'Docker',
            ],
            folder: '',
            images: [],
            videos: [],
            pdfs: [],
        },
        {
            title: '영남대학교 RLRC(지역혁신연구선도센터) 프리랜서 근무',
            subtitle: 'RLRC 소개 웹 사이트 제작 프로젝트',
            period: '2023.01 ~ 2023.03',
            link: [
                { text: 'Github 링크', url: 'https://github.com/lee2963/RLRC_Project' },
                // { text: 'RLRC 웹 사이트 배포 링크', url: 'http://rlrc.co.kr/' },
            ],
            desc: [
                { main: 'RLRC 부서의 기존 프론트엔드 개발자의 부재로 중간 투입되어 프로젝트를 완성', sub: [] },
                {
                    main: '기여도',
                    sub: [
                        '메인 페이지 스크롤 애니메이션 개발 - Scroll Snap 사용',
                        '랜딩페이지, 지도/논문/특허 페이지 개발 - 카카오맵 API 사용',
                    ],
                },
                {
                    main: '클라이언트와 개발자의 커뮤니케이션 문제',
                    sub: [
                        '클라이언트가 의태어로 원하는 애니메이션을 설명',
                        '의태어만으로 요구사항을 정확히 파악하지 못해, 추측을 기반으로 한 프로토타입을 보여줌으로써 해결',
                    ],
                },
            ],
            keywords: ['React', 'Styled-Component', 'Spring', 'SpringBoot', 'MySQL', 'Amazon AWS'],
            folder: 'experiences/RLRC',
            images: ['1.png', '2.png', '3.png', '4.gif', '5.gif', '6.gif', '7.gif', '8.gif'],
            videos: [],
            pdfs: [],
        },
        {
            title: '우아한테크코스 프리코스',
            subtitle: '4주간 우아한테크코스 교육기관으로부터 받은 과제를 JavaScript를 활용해서 해결',
            period: '2022.11 ~ 2022.12',
            link: [
                {
                    text: 'Github 링크 - 1주차 과제, 온보딩',
                    url: 'https://github.com/Narcoker/javascript-onboarding/tree/Narcoker',
                },
                {
                    text: 'Github 링크 - 2주차 과제, 야구게임',
                    url: 'https://github.com/Narcoker/javascript-baseball/tree/Narcoker',
                },
                {
                    text: 'Github 링크 - 3주차 과제, 로또 추첨기',
                    url: 'https://github.com/Narcoker/javascript-lotto/tree/Narcoker',
                },
                {
                    text: 'Github 링크 - 4주차 과제, 다리 건너기',
                    url: 'https://github.com/Narcoker/javascript-bridge/tree/Narcoker',
                },
                {
                    text: 'velog - 주차별 회고록',
                    url: 'https://velog.io/@narcoker/series/%EC%9A%B0%EC%95%84%ED%95%9C%ED%85%8C%ED%81%AC%EC%BD%94%EC%8A%A4-%ED%94%84%EB%A6%AC%EC%BD%94%EC%8A%A4',
                },
            ],
            desc: [],
            keywords: ['JavaScript', 'TDD'],
            folder: '',
            images: [],
            videos: [],
            pdfs: [],
        },

        // {
        //     title: '모던 자바스크립트 딥다이브 스터디',
        //     subtitle: '프론트엔드 개발자를 희망하는, 3인의 구성으로 이루어진 스터디',
        //     period: '2022.09.16 ~ 2022.12.23',
        //     link: [
        //         {
        //             text: 'velog - 1장 ~ 24장 정리 및 발표 자료',
        //             url: 'https://zrr.kr/YGQJ',
        //         },
        //     ],
        //     desc: [
        //         { main: '본 스터디의 목적은 자바스크립트의 기본 개념 및 심화 내용을 습득하기 위함', sub: [] },
        //         { main: '각자 일주일에 정해진 분량 만큼 공부한 후 온/오프라인으로 리뷰', sub: [] },
        //         { main: '리뷰 당일 날, 제비뽑기를 통하여 인당 발표할 범위를 정하여 발표', sub: [] },
        //         { main: '각자 개인 사정으로 1장부터 24장까지만 진행되고 마무리', sub: [] },
        //     ],
        //     keywords: ['JavaScript'],
        //     folder: '',
        //     images: [],
        //     videos: [],
        //     pdfs: [],
        // },
        // {
        //     title: '육군 28사단 80연대 병장 만기 전역',
        //     subtitle: 'C4I 전문 특기병으로 입대하여 이중화 서버/체계 시스템 유지보수 및 관리 ',
        //     period: '2019.02 ~ 2020.09',
        //     link: [],
        //     desc: [
        //         {
        //             main: '4박 5일 연대장 포상 휴가 수여',
        //             sub: [
        //                 '직위: 전산분대 분대장',
        //                 '전군 Window 운영체제 전환 프로젝트 시 내려받은 방대한 전환 프로세스 자료를 간소화하여 분대원 교육',
        //                 '분대원 수행 속도 증가로 인해 본부 및 예하부대 중 가장 먼저 임무 완료',
        //                 '예하 부대에 분대 수행 능력이 소문이 나 여러 파견 요청을 받음',
        //                 '한 달동안 매주 주말에 파견을 나가 예하 부대 지원',
        //             ],
        //         },
        //     ],
        //     keywords: ['C언어 교육'],
        //     folder: '',
        //     images: [],
        //     videos: [],
        //     pdfs: [],
        // },

        {
            title: '@Xpert - C언어 교육',
            subtitle:
                '교내 학과 힉술 동아리 @Xpert에서 주최하는 C언어 교육 프로그램의 강사로 임명 받아, 여름 방학 동안 신입생 교육',
            period: '2018.07 ~ 2018.08',
            link: [],
            desc: [],
            keywords: ['멘토링', 'C언어 교육', '포인터', '연결리스트'],
            folder: '',
            images: [],
            videos: [],
            pdfs: [],
        },

        {
            title: '@Xpert - C언어, 네트워크, 리버싱, 웹 교육 수강',
            subtitle:
                '교내 학과 학술 동아리 @Xpert에 준회원으로 가입하여, 정회원 전환 필수 요건인 준회원 대상 여름 방학 교육 수료',
            period: '2017.07 ~ 2017.08',
            link: [],
            desc: [],
            keywords: ['C언어', '네트워크', '리버싱', '웹'],
            folder: '',
            images: [],
            videos: [],
            pdfs: [],
        },
        {
            title: '창원경상고등학교 전교 학생 회장',
            // subtitle: '학교 학생회 측에서 40년 간 실패한, 교내 온수기 설치 완료',
            subtitle: '',
            period: '2015.11 ~ 2016.11',
            link: [],
            desc: [],
            // keywords: ['교내 온수기 설치 완료'],
            keywords: [],
            folder: '',
            images: [],
            videos: [],
            pdfs: [],
        },
        {
            title: '창원경상고등학교 전교 학생 부회장',
            // subtitle: '교내 온수기 설치 시도를 위한 출마',
            subtitle: '',
            period: '2014.11 ~ 2015.11',
            link: [],
            desc: [],
            // keywords: ['교내 온수기 설치 시도'],
            keywords: [],
            folder: '',
            images: [],
            videos: [],
            pdfs: [],
        },
    ],
};

export const projects = {
    subject: 'Projects',
    contents: [
        // {
        //     title: 'Simple React Resume Template',
        //     subtitle: '심플한 리액트 이력서 템플릿',
        //     period: '2021.01 ~ 2021.12',
        //     link: [],
        //     desc: [{ main: '심플한 이력서 템플릿', sub: ['리액트로 제작됨'] }],
        //     keywords: ['React', 'HTML', 'CSS', 'JavaScript'],
        //     folder: 'projects/simple-react-resume-template',
        //     images: ['1.png'],
        //     pdfs: [
        //         { pdf: '1.pdf', thumbnail: '1-thumbnail.png' },
        //         { pdf: '1.pdf', thumbnail: '2-thumbnail.png' },
        //     ],
        // },

        {
            title: 'OGJG IDE - 실시간 동시 편집이 가능한 Web IDE',
            subtitle: `
            7인 팀 프로젝트 - 구름톤 트레이닝 풀스택

            팀장, 프론트엔드 개발, 발표자

            프론트엔드: 4명 / 백엔드: 3명 
            `,
            period: '2023.08.28 ~ 2023.10.10',
            link: [
                { text: 'Github 링크', url: 'https://github.com/Goorm-OGJG/Web-IDE' },
                { text: 'Youtube - 전체 기능 시연 영상', url: 'https://www.youtube.com/watch?v=JsfWMSpEHZI' },
                {
                    text: 'velog - 결과물 발표 및 평가 회고',
                    url: 'https://velog.io/@narcoker/%EA%B5%AC%EB%A6%84%ED%86%A4-%ED%8A%B8%EB%A0%88%EC%9D%B4%EB%8B%9D-%ED%92%80%EC%8A%A4%ED%83%9D-1%EA%B8%B0-20%EC%A3%BC%EC%B0%A8-%ED%9A%8C%EA%B3%A0-%EC%8B%A4%EC%8B%9C%EA%B0%84-%EB%8F%99%EC%8B%9C-%ED%8E%B8%EC%A7%91%EC%9D%B4-%EA%B0%80%EB%8A%A5%ED%95%9C-Web-IDE-%EA%B5%AC%ED%98%84-%EC%99%84%EB%A3%8C',
                },
            ],
            desc: [
                {
                    main: '구름톤 트레이닝 풀스택 과정에서 내준 팀 과제',
                    sub: [],
                },
                {
                    main: '차별성 있고 경쟁력 있는 Web IDE를 만들어내고자 팀 내부에서 자발적으로 기능 추가 구현',
                    sub: [
                        '주어진 요구 사항: 컴파일 기능이 없고, 로그인 기능과 채팅 기능이 있는 반응형 Web IDE',
                        '추가 구현: CRDT 기술을 활용한 실시간 동시 편집 기능, 음성 채팅',
                    ],
                },
                {
                    main: '기여도',
                    sub: [
                        '코드 편집 페이지 UI 및 기능',
                        'Yorkie 라이브러리를 사용하여 실시간 동시 편집 기능 구현',
                        'rc-tree 라이브러리를 사용하여 코드 편집 페이지 사이드 바의 파일 트리 구현',
                        'Drag and Drop을 통한 사이드 바 넓이 수정 기능 구현',
                        '파일 확장자에 따른 아이콘 생성 기능 구현',
                        '파일 트리에서 마우스 우클릭 시 나오는 Context Menu UI를 통한 폴더/파일 CRUD 구현',
                        '탭 구현 - 폴더/파일 CRUD 및 파일 트리 내부의 파일 클릭 시, 탭 생성/탭 삭제/활성화 탭 변경 기능 구현',
                        '단축키를 통한 사용자 편의 기능 구현 - 코드 자동 완성, 코드 검색 및 변경, Zoom-in/out',
                    ],
                },
                {
                    main: '결과물 발표 평가에서 9개의 팀 중 1위 달성',
                    sub: ['기획력: 18/20 | 기술성: 26/30 | 완성도: 29/30 | 발표 19/20'],
                },
            ],
            keywords: [
                'Self-Chellange',
                'Vite',
                'React',
                'Recoil',
                'TypeScript',
                'Styled-Component',
                'Yorkie-CRDT',
                'CodeMirror',
                'rc-tree',
                'StompJS',
                'connective-web-sdk',
                'Spring',
                'Spring Boot',
                'MySQL',
                'Amazon AWS',
                'Amazon S3',
            ],
            folder: 'projects/web-ide',
            images: ['1.png', '2.gif', '3.gif', '4.gif', '5.gif', '6.gif', '7.gif', '8.png', '9.png', '10.png'],
            videos: [],
            pdfs: [],
        },

        {
            title: 'MOCUMOCU - 소상공인들을 위한 쿠폰 발급/적립 및 매장 분석 앱',
            subtitle: `
            5인 팀 프로젝트 - IT 융합 프로젝트


            팀장, 프론트엔드 개발

            프론트엔드: 2명 / 백엔드: 2명 / 디자이너: 1명
            `,
            period: '2022.03 ~ 2022.11',
            link: [
                { text: 'Github 링크', url: 'https://github.com/oasis791/MOCUMOCU' },
                { text: 'Youtube - 전체 기능 시연 영상', url: 'https://www.youtube.com/watch?v=tI5TlavuTKk' },
                {
                    text: 'Notion - 협업 과정',
                    url: 'https://spangle-snake-985.notion.site/MOCU-MOCU-487e7d99ae764acd8ec8cf19e9616bd2?pvs=4',
                },
            ],
            desc: [
                { main: '소상공인들을 위한, QR 코드를 통한 쿠폰 발급/적립 및 매장 분석 앱', sub: [] },
                {
                    main: '실물 쿠폰을 없앰으로써 환경 문제를 개선함과 동시에 소상공인들의 마케팅 비용을 조금이나마 줄이고자 함',
                    sub: [],
                },
                {
                    main: '하나의 앱에서 로그인 회원 타입(점주, 고객)에 따라 다른 기능을 제공하는 앱',
                    sub: [],
                },
                {
                    main: '기여도',
                    sub: [
                        'Use Case Diagram 작성: 100%',
                        'Use Case Specification 점주 작성: 100%',
                        '관계형 데이터베이스 설계: 60%',
                        'Design Requirement Document 작성: 25%',
                        'Design Specification Document 작성: 25%',
                        '프론트엔드: 50%, 점주 모든 기능 및 UI 담당',
                    ],
                },
                {
                    main: '점주 기능',
                    sub: [
                        '회원가입 및 로그인/로그아웃',
                        '매장 CRUD',
                        '매장별 쿠폰 적립/사용 내역',
                        '시간/요일/월 별 매장 손님 방문 분석',
                        'QR 코드 또는 전화번호를 통한 쿠폰 적립',
                        'QR 코드를 통한 쿠폰 사용',
                        '쿠폰 사용 시 제공할 리워드 CRUD',
                        '매장 이벤트 등록 및 삭제',
                    ],
                },
                // {
                //     main: '쿠폰 적립 시스템 - QR 코드',
                //     sub: [
                //         '1. 점주가 QR 코드 스캐너로 고객의 QR 코드를 스캔',
                //         '2. 올바른 타입의 QR코드 인 경우, QR 코드에 담긴 회원 이름 점주 화면에 출력',
                //         '2-1. 올바르지 않은 타입의 QR 코드인 경우 에러 메세지 출력',
                //         '3. 점주가 회원 일치 여부를 구두로 확인하고 적립할 쿠폰 개수 입력 후 서버에 API 송신',
                //     ],
                // },
                // {
                //     main: '쿠폰 적립 시스템 - 전화번호',
                //     sub: [
                //         '1.  점주가 회원으로부터 전달받은 전화번호를 입력하면 전화번호에 매칭된 이름을 출력',
                //         '1-1. 데이터베이스에에 등록되지 않은 전화번호일 경우 에러메시지 출력',
                //         '2.  점주는 회원 일치 여부를 구두로 확인하고 적립할 쿠폰 개수 입력 후 서버에 API 송신',
                //     ],
                // },
                // {
                //     main: '이벤트 등록 - AWS S3',
                //     sub: [
                //         '1. 점주가 애플리케이션에 이벤트 사진을 등록하고 API를 송신하면 S3에 사진을 업로드하고 URI를 애플리케이션으로 반환',
                //         '2. URI 를 전달받은 애플리케이션은 서버로 URI를 등록 요청 API 송신',
                //         '3. 서버는 URI 를 데이터베이스에 저장',
                //         '4. 회원이 애플리케이션에 접속했을때 쿠폰을 발급받은 매장의 이벤트를 배너에 출력',
                //     ],
                // },
            ],
            keywords: [
                'React Native',
                'TypeScript',
                'Redux',
                'Styled-Component',
                'Spring',
                'SpringBoot',
                'MySQL',
                'Amazon AWS',
                'Amazon S3',
                'starUML',
            ],
            folder: 'projects/mocumocu',
            images: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png'],
            videos: [],
            pdfs: [
                { pdf: 'Use_Case_Diagram.pdf', thumbnail: 'Use_Case_Diagram-thumbnail.png' },
                { pdf: 'Use_Case_Specification_owner.pdf', thumbnail: 'Use_Case_Specification_owner-thumbnail.png' },
                {
                    pdf: 'Use_Case_Specification_customer.pdf',
                    thumbnail: 'Use_Case_Specification_customer-thumbnail.png',
                },
                { pdf: 'E-R-Diagram.pdf', thumbnail: 'E-R-Diagram-thumbnail.png' },
                { pdf: 'DRD.pdf', thumbnail: 'DRD-thumbnail.png' },
                { pdf: 'DSD.pdf', thumbnail: 'DSD-thumbnail.png' },
            ],
        },

        {
            title: 'PKSCL - 부경대학교 학과 장부 공개 및 관리 웹 사이트',
            subtitle: `
            4인 사이드 팀 프로젝트


            프론트엔드: 2명 / 백엔드: 2명


            팀원, 프론트엔드 개발`,
            period: '2022.01 ~ 2022.07',
            link: [
                { text: 'Github 링크 - 프론트엔드', url: 'https://github.com/Narcoker/PKSCL_front' },
                {
                    text: 'Gitbook - API 명세서',
                    url: 'https://doongu.gitbook.io/pkscl/project-design/api-document',
                },
                {
                    text: 'Notion - 회의록',
                    url: 'https://doongu.notion.site/PKSCL-Home-2ec6d63bba724ee29da28323f270907f?pvs=4',
                },
            ],
            desc: [
                {
                    main: '일반 학생 측에서는 학생회가 인스타그램을 통해 공지하고 있음에도, 이 사실을 모르는 사람들이 많아 지속적인 장부 공개 요구 발생',
                    sub: [],
                },
                {
                    main: '학생회 측에서는 인스타그램에 맞는 이미지를 매번 제작해서 올리는 번거로움이 존재해서 이를 해결하고자 함',
                    sub: [],
                },
                {
                    main: '기여도',
                    sub: [
                        '프론트엔드: 50% - 분기별 장부 CRUD, 학생회장/학생 정보 변경, 로그아웃, 회원 탈퇴',
                        'Use Case Diagram 작성: 100%',
                        '관계형 데이터베이스 설계: 70%',
                    ],
                },
                {
                    main: 'Issue #1: 행사별로 등록한 장부의 순서 변경 기능 구현의 어려움',
                    sub: [
                        '하나의 데이터베이스 테이블에서 모든 학과의 장부를 관리',
                        '해당 테이블에는 장부에는 순서를 관리하기 위한 속성이 있었는데 테이블에 추가될 때 마다 1씩 증가하게 구현',
                        '순서 값을 수정하면 다른 학과의 순서에도 영향을 미치꺼나 중복되는 문제 발생',
                        '데이터베이스 구조를 변경하기엔 대부분의 기능들이 구현이 완료된 상태',
                        '순서 수정 시 해당 학과의 모든 행사 장부의 데이터베이스를 삭제하고 재등록하는 방식 채택',
                        '2023.05.05 - 회고 : "학과 코드 + 순서" 의 값을 사용했다면 데이터베이스 오버 헤드를 줄일 수 있었을 것',
                    ],
                },
                {
                    main: '서비스 배포',
                    sub: ['부경대학교 총학생회를 거쳐 홍보하고 총 6개의 학과에 서비스를 유치'],
                },
            ],
            keywords: [
                'React',
                'React-sortablejs',
                'Styled-Component',
                'Spring',
                'SpringBoot',
                'MySQL',
                'Amazon AWS',
                'starUML',
            ],
            folder: 'projects/pkscl',
            images: ['1.png', '2.png', '3.png'],
            videos: [],
            pdfs: [{ pdf: 'Use_Case_Diagram.pdf', thumbnail: 'Use_Case_Diagram-thumbnail.png' }],
        },

        {
            title: '영남대학교 RLRC 웹 사이트',
            subtitle: '영남대학교 지역혁신연구선도센터 웹사이트 제작 외주',
            period: '2023.01 ~ 2023.03',

            link: [
                { text: 'Github 링크', url: 'https://github.com/lee2963/RLRC_Project' },
                { text: 'RLRC 웹 사이트 배포 링크', url: 'http://rlrc.co.kr/' },
            ],
            desc: [
                {
                    main: '리팩토링 - 파일 당 코드 70.6% 감소',
                    sub: [
                        '하나의 페이지를 담당하는 파일들의 평균 라인 수를 238.5 줄에서 평균 70줄로 감소',
                        '1. 중복 코드를 map을 사용하여 코드량 감소',
                        '2. Container-Presenter 패턴으로 리팩토링',
                        '3. CSS 와 Styled Component을 혼용해서 쓴 것을 Styled-Component로 통일',
                        '4. 하나의 페이지 구성이 JS, CSS 조합인 일반적인 구조를 Container & Presenter 패턴으로 변경',
                    ],
                },
                {
                    main: 'LightHouse 기준, 성능 70.25% 향상',
                    sub: [
                        'Contentful Paint 수치 8초 -> 2.2초',
                        '1. 리소스가 큰 이미지 파일을 Webp 형식으로 변환',
                        '2. 크로스 브라우징 해결을 위해 <picture> <source/> <img/> </picture> 구조 사용',
                    ],
                },
            ],
            keywords: ['React', 'Styled-Component', 'Container-Presenter 패턴'],
            folder: '',
            images: [],
            videos: [],
            pdfs: [],
        },


        {
            title: '근근근 - 운동일지/루틴 추천 및 커뮤니티',
            subtitle: `
            8인 팀 프로젝트 - 구름톤 트레이닝 풀스택

            팀장, 프론트엔드 개발

            프론트엔드: 4명 / 백엔드: 4명 
            `,
            period: '2023.10.11 ~ 2023.11.28 - 진행중',
            link: [{ text: 'Github 링크 - Frontend', url: 'https://github.com/Goorm-OGJG/Da-It-Gym-FE' }],
            desc: [
                {
                    main: '무자격 헬스 트레이너 문제를 해결하고, PT의 가격 부담을 줄여주기 위함',
                    sub: [],
                },
                {
                    main: '헬스장에 체육지도자가 1~2명만 있으면 나머지 트레이너들은 별다른 자격이 불필요',
                    sub: [],
                },
                {
                    main: '유저의 현재 신체 요건에 맞춘, 다른 사람의 루틴과 운동일지를 추천해주는 기능을 제공하고자 함 ',
                    sub: [],
                },
                {
                    main: '서비스 내부에서 자격증 및 신체 정보를 통해 트레이너를 검증하여 유저 간에 신뢰성 보장하고자 함',
                    sub: [],
                },
            ],
            keywords: [
                '카카오 크램폴린',
                '카카오 API',
                'Vite',
                'React',
                'Recoil',
                'TypeScript',
                'Styled-Component',
                'StompJS',
                'Spring',
                'Spring Boot',
                'MySQL',
                'Amazon AWS',
                'Amazon S3',
            ],
            folder: 'projects/',
            images: [],
            videos: [],
            pdfs: [],
        },




        // {
        //     title: 'Instgram 클론 코딩',
        //     subtitle: `
        //     6인 팀 프로젝트 - 구름톤 트레이닝 풀스택

        //     팀장, 프론트엔드 개발

        //     프론트엔드: 3명 / 백엔드: 3명 
        //     `,
        //     period: '2023.08.01 ~ 2023.08.27',
        //     link: [
        //         { text: 'Github 링크 - Frontend', url: 'https://github.com/Goorm-OGJG/PBL-Instagram-FE' },
        //         {
        //             text: 'velog - Issue #1 원인 조사 및 해결방안',
        //             url: 'https://velog.io/@narcoker/Spring-%ED%97%A4%EB%8D%94%EC%97%90-%EC%BF%A0%ED%82%A4%EB%A5%BC-%EB%84%A3%EC%97%88%EB%8A%94%EB%8D%B0-%EC%95%88%EB%B3%B4%EB%82%B4%EC%A7%80%EB%8A%94-%ED%98%84%EC%83%81',
        //         },
        //     ],
        //     desc: [
        //         {
        //             main: '구름톤 트레이닝 풀스택 과정의 팀 과제로, 13개 팀 중 실제 서비스와 가장 유사하게 구현',
        //             sub: [],
        //         },
        //         {
        //             main: '프론트엔드 협업 - Boiler Plate 구축',
        //             sub: [
        //                 '공통으로 사용할 이미지, 폰트 스타일, 컬러 팔레트를 각각 한 파일에 상수화해서 사전 정의',
        //                 '공통으로 사용할 아이콘을 한 파일에 컴포넌트로 미리 구현 후 협업 시 사용',
        //                 '구현될 페이지들을 미리 정의하고 페이지 라우팅을 미리 구현',
        //             ],
        //         },
        //         {
        //             main: '기여도',
        //             sub: [
        //                 'Refresh Token/Access Token을 사용한 로그인, 회원가입, 비밀번호 찾기 구현',
        //                 '추상화와 가독성을 위해 HOC 를 사용해서 로그인 유무에 따른 페이지 접근 권한을 제어',
        //                 '백엔드 팀원의 코로나 이슈로 인한 백엔드 버그 직접 해결 - Issue #1',
        //             ],
        //         },
        //         {
        //             main: 'Issue #1: Spring에서 Refresh Token을 쿠키에 담아서 보냈는데 응답에 쿠키가 없는 버그',
        //             sub: [
        //                 'Cookie 클래스를 ResponseCookie로 변경 후 SameSite 정책 변경',
        //                 'Domain 과 Path가 지정되어 있지 않는 문제를 발견하고 직접 수정',
        //             ],
        //         },
        //     ],
        //     keywords: [
        //         'Vite',
        //         'React',
        //         'Recoil',
        //         'TypeScript',
        //         'Styled-Component',
        //         'Spring',
        //         'Spring Boot',
        //         'MySQL',
        //         'Amazon AWS',
        //         'Amazon S3',
        //     ],
        //     folder: 'projects/instagram-clone',
        //     images: ['1.gif', '2.gif', '3.gif', '4.gif', '5.gif', '6.png', '8.png', '9.png'],
        //     videos: [],
        //     pdfs: [],
        // },

        // {
        //     title: 'Youtube 클론 코딩',
        //     subtitle: `개인 프로젝트 - 구름톤 트레이닝 풀스택`,
        //     period: '2023.07.17 ~ 2023.07.30',
        //     link: [{ text: 'Github 링크', url: 'https://github.com/Narcoker/Goorm_PBL_Youtube' }],
        //     desc: [
        //         {
        //             main: '구름톤 트레이닝 풀스택 과정에서 내준 과제에 스스로 챌린지를 부여',
        //             sub: [
        //                 '주어진 과제는 퍼블리싱이었으나 Node.js와 MongoDB를 사용해서 기능 구현',
        //                 '회원가입, 로그인, 업로드된 전체 비디오 보기, 구독한 유저들의 비디오 보기',
        //                 '비디오 업로드, 구독하기, 좋아요/싫어요, 댓글, 무한 Depth 대댓글',
        //                 '조회수 증가, 링크 복사, 동영상 분류 필터링',
        //             ],
        //         },
        //         { main: '무한 Depth 대댓글', sub: ['재귀적인 컴포넌트 구조로 기능 구현'] },
        //         {
        //             main: '조회수 증가',
        //             sub: ['유튜브 실제 방식을 벤치마킹, 재생시간 5초 초과시 조회수가 1 증가하게 구현 '],
        //         },
        //     ],
        //     keywords: ['Self-Challenge', 'React', 'Node.js', 'MongoDB', 'Styled-Component'],
        //     folder: 'projects/youtube-clone',
        //     images: ['1.gif', '2.gif'],
        //     videos: [],
        //     pdfs: [],
        // },




        {
            title: 'Todo List',
            subtitle: `개인 프로젝트 - 구름톤 트레이닝 풀스택`,
            period: '2023.07.10 ~ 2023.07.16',
            link: [
                { text: 'Github 링크', url: 'https://github.com/Narcoker/Goorm_PBL_Todo' },
                { text: 'Todo List 배포 링크', url: 'https://narcoker.github.io/Goorm_PBL_Todo/' },
                { text: 'velog - 챌린지를 부여하게된 계기', url: 'https://narcoker.github.io/Goorm_PBL_Todo/' },
                { text: 'velog - Issue #1 원인 조사 및 해결방안', url: 'https://zrr.kr/kPVA' },
            ],
            desc: [
                {
                    main: '구름톤 트레이닝 풀스택 과정에서 내준 과제에 스스로 챌린지를 부여',
                    sub: [
                        '계획 내 세부 계획이 존재하도록 재설계',
                        '세부 계획들의 진행 여부에 따라 전체 계획의 진행 여부가 능동적으로 변하도록 재설계',
                    ],
                },
                { main: '계획의 중요성을 자각할 수 있도록 20개의 명언 자동 상하 캐러셀을 Vallina JS로 구현', sub: [] },
                { main: '생성한 계획/세부 계획과 시작일, 종료일, 상태를 유지할 수 있도록 localStorage 사용', sub: [] },
                {
                    main: 'Props Drilling을 방지하기 위해 Redux와 Redux-Toolkit 상태 관리 라이브러리 사용',
                    sub: [],
                },
                {
                    main: 'Issue #1: 자식요소 onClick 실행 시 부모요소 onClick 도 같이 실행',
                    sub: ['velog - Issue #1 원인 조사 및 해결방안'],
                },
            ],
            keywords: ['Self-Challenge', 'React', 'Redux', 'Redux-Toolkit', 'Styled-Component', 'localStorage'],
            folder: 'projects/todo-list',
            images: ['1.gif', '2.gif', '3.gif', '4.gif'],
            videos: [],
            pdfs: [],
        },

        // {
        //     title: 'Do it, Puzzle',
        //     subtitle: `개인 사이드 프로젝트`,
        //     period: '2023.06.26 ~ 2023.06.28',
        //     link: [
        //         { text: 'Github 링크', url: 'https://github.com/Narcoker/PuzzleGame-with-VanillaJS' },
        //         { text: 'Do it, Puzzle 배포 링크', url: 'https://narcoker.github.io/PuzzleGame-with-VanillaJS/' },
        //         {
        //             text: 'velog - Issue #1: fisherYatesShuffle',
        //             url: 'https://velog.io/@narcoker/JavaScript-fisherYatesShuffle',
        //         },
        //     ],
        //     desc: [
        //         { main: 'Vanilla JS로 구현한 간단한 3X3 퍼즐 맞추기 게임', sub: [] },
        //         { main: '읽기 쉬운 코드를 만들어 내기 위해 오랜 시간 고민하고 리팩토링', sub: [] },
        //         // {
        //         //     main: '구름톤 트레이닝의 OFFICE HOUR를 통해 코치와의 코드 리뷰',
        //         //     sub: ['모범 코드라며 구름톤 트레이닝 커뮤니티를 통해 교육생들에게 코드 공유를 요청 받음'],
        //         // },
        //         { main: 'Issue #1: fisherYatesShuffle', sub: ['velog - Issue #1: fisherYatesShuffle'] },
        //     ],
        //     keywords: ['HTML', 'CSS', 'JavaScript'],
        //     folder: 'projects/do-it-puzzle',
        //     images: ['1.gif', '2.gif'],
        //     videos: [],
        //     pdfs: [],
        // },



        {
            title: '자취 공간 유비쿼터스 프로젝트 및 IoT 스위치 제작',
            subtitle: '일상 생활 개선 개인 사이드 프로젝트',
            period: '2022.07.12 ~ 2022.07.19',
            link: [
                {
                    text: 'velog - IoT 스위치 코드 및 회고록',
                    url: 'https://velog.io/@narcoker/series/HobbyIT',
                },
            ],
            desc: [
                {
                    main: '일반 가전 제품들로 구성된 자취 공간을, 최소 비용으로 IoT화하여 삶의 질을 향상시키고자 함',
                    sub: [],
                },
                // {
                //     main: '삼성, LG 등 IOT 를 탑재한 가전 제품들을 이미 판매중이나 학생 신분으로 구매하기에는 가격대가 높음',
                //     sub: [],
                // },
                // {
                //     main: '구형 가전들은 모두 적외선으로 제어되는 공통점 인식',
                //     sub: [],
                // },
                // {
                //     main: '음성 인식 AI로 적외선 송신을 요청할 수 있는 장비 아이디어 기획',
                //     sub: [],
                // },
                // {
                //     main: '시장 조사를 통해 비슷한 제품을 약 3만원에 판매 중인 것을 확인 - 시간 절약을 위해 구매',
                //     sub: [],
                // },
                // {
                //     main: '비용적으로 구매하기 부담스러운 기기인 IoT 스위치를 배운 내용을 활용하여 직접 제작',
                //     sub: [],
                // },
                {
                    main: '96%의 비용 절감',
                    sub: [
                        '[ IoT 제품 구매 시 발생 비용 ]',
                        '125만원 = 70만원(에어컨) + 30만원(TV) + 15만원(선풍기) + 5만원(무드등) + 5만원(스위치)',
                        '[ 목적 실현 비용 ]',
                        '5만원 = 2.8만원(리모컨 허브) + 1만원(IoT 스위치 제작비용) + 1.2만원(스마트 플러그)',
                    ],
                },
            ],
            keywords: ['IoT', 'Arduino', '2.4ghz 적외선', 'Google Assistant'],
            folder: 'projects/IoT-switch',
            images: ['1.png', '2.gif'],
            videos: [],
            pdfs: [],
        },


        {
            title: 'My Shortcut App - 빠른 어플 실행을 위한 유틸리티 앱',
            subtitle: '모바일 프로그래밍 - 창의력 요구 개인 프로젝트 과제',
            period: '2021.11.07 ~ 2021.12.09',
            link: [{ text: 'Github 링크', url: 'https://github.com/Narcoker/ShortCutApp' }],
            desc: [
                {
                    main: '4개의 버튼으로 이뤄진 위젯을 홈화면에 배치하여 패턴을 입력하면 매핑된 앱이 실행되는 어플',
                    sub: [],
                },
                {
                    main: '당시 시장에 존재하지 않던 앱, 과거 LG의 2x2 패턴 패스워드를 벤치마킹한 아이디어',
                    sub: [],
                },
                {
                    main: '스마트폰의 발전에 따라 필수불가결 앱이 많아짐 ',
                    sub: [],
                },
                {
                    main: '홈 화면에 바로가기를 너무 많이 배치하면 앱 서랍과 다를 게 없기 때문에 이를 개선하고자 함',
                    sub: [],
                },
                {
                    main: '확장성',
                    sub: [
                        '앱 서랍에서 매핑된 앱을 숨긴다면 위장 어플리케이션을 만드는 앱으로도 사용 가능',
                        '앱 실행 뿐만아니라 전화걸기, 알람 설정 등 각종 매크로 행위도 가능하도록 확장 가능',
                    ],
                },
                {
                    main: '구현 방법',
                    sub: [
                        '위젯에서 바로 앱을 실행하고자 했으나 위젯 클래스인 AppWidgetProvider Class는 앱 실행 기능이 없었음',
                        '1. xml 파일(UI)이 존재하지 않고 기능만 존재하는 StartApp 이라는 Class 를 생성',
                        '2. 위젯에서 입력받은 패턴을 Intent를 사용해 StartApp 으로 전달과 동시에 StartApp 실행',
                        '3. 패턴을 전달받은 StartApp은 SQLite에서 패턴에 매핑된 앱을 실행하고 즉시 종료',
                    ],
                },
            ],
            keywords: ['Android', 'Java', 'XML', 'SQLite'],
            folder: 'projects/my-shortcut-app',
            images: ['1.gif', '2.gif', '3.gif'],
            videos: [],
            pdfs: [],
            // pdfs: [{ pdf: '1.pdf', thumbnail: '1-thumbnail.png' }],
        },
    ],
};

export const awards = {
    subject: 'Awards',
    contents: [
        // {
        //     title: '대상',
        //     subtitle: '~ 프로젝트',
        //     period: '2021.01.01',
        //     link: [],
        //     desc: [{ main: '~ 프로젝트로 입상', sub: ['~ 라이브러리 사용'] }],
        //     keywords: [],
        //     folder: '',
        //     images: [],
        //     videos:[],
        //     pdfs: [],
        // },
        {
            title: '영남대학교 PRIME 컴퓨터 사업단 프로그래밍 경진대회',
            subtitle: '영남대학교 PRIME 컴퓨터 사업단 주관 프로그래밍 경진대회에서 장려상 수상',
            period: '2018.11.17',
            link: [],
            desc: [],
            keywords: ['알고리즘'],
            folder: 'awards/프로그래밍-경진대회',
            images: ['1.png'],
            videos: [],
            pdfs: [],
        },
    ],
};

// export const research = {
//     subject: 'Research',
//     contents: [
//         {
//             title: '~ Journal',
//             subtitle: '~ 연구',
//             period: '2021.01.01',
//             link: [],
//             desc: [{ main: '~ 에 관한 연구', sub: [] }],
//             keywords: [],
//             folder: '',
//             images: [],
//             videos:[],
//             pdfs: [],
//         },
//         {
//             title: '',
//             subtitle: '',
//             period: '',
//             link: [],
//             desc: [],
//             keywords: [],
//             folder: '',
//             videos:[],
//             images: [],
//             videos:[],
//             pdfs: [],
//         },
//     ],
// };

export const education = {
    subject: 'Education',
    contents: [
        {
            title: '영남대학교 졸업',
            subtitle: '컴퓨터공학과 - 학점: 3.88 전공 학점: 4.26',
            period: '2017.03 ~ 2023.02',
            link: [],
            desc: [],
            keywords: [],
            folder: '',
            images: [],
            videos: [],
            pdfs: [],
        },
        {
            title: '창원경상고등학교 졸업',
            subtitle: '',
            period: '2014.03 ~ 2017.02',
            link: [],
            desc: [],
            keywords: [],
            folder: '',
            images: [],
            videos: [],
            pdfs: [],
        },
    ],
};

export const certificate = {
    subject: 'Certificate',
    contents: [
        {
            title: '정보처리기사',
            subtitle: '한국산업인력공단: 22202040748Y',
            period: '2022.09.02',
            link: [],
            desc: [],
            keywords: [],
            folder: '',
            images: [],
            videos: [],
            pdfs: [],
        },
        {
            title: '워드프로세서 1급',
            subtitle: '대한상공회의소: 10-I9-109217',
            period: '2010.09.10',
            link: [],
            desc: [],
            keywords: [],
            folder: '',
            images: [],
            videos: [],
            pdfs: [],
        },
        // {
        //     title: '한자실력급수 2급',
        //     subtitle: '한자교육진흥회: 064-20-00054',
        //     period: '2013.04.13',
        //     link: [],
        //     desc: [],
        //     keywords: [],
        //     folder: '',
        //     images: [],
        //     videos: [],
        //     pdfs: [],
        // },
    ],
};

export const footer = { updated: '2024. 01. 11.' };

export const main = [projects, experience, awards, education, certificate];
