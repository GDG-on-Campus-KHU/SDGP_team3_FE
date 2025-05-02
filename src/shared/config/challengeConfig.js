export const CHALLENGE_ICONS = {
  tumbler: "/icons/challenge/tumberIcon.svg",
  transportation: "/icons/challenge/transportationIcon.svg",
  basket: "/icons/challenge/basketIcon.svg",
  spoon: "/icons/challenge/spoonIcon.svg",
  plogging: "/icons/challenge/ploggingIcon.svg",
};

export const CHALLENGE_MOCK_DATAS_1 = [
  // 진행 중인 챌린지 리스트
  {
    id: 1,
    is_done: false,
    type: "tumbler",
    title: "텀블러 사용하기",
    description: "일회용 컵 대신 텀블러를 사용해요",
    started_at: "2025.03.04",
    due_at: "2025.03.11",
    ach: 3,
    obj: 7,
  },
  {
    id: 4,
    is_done: false,
    type: "spoon",
    title: "일회용 수저 받지 않기",
    description: "배달 어플 이용 시, ‘일회용 수저 안 받기'에 체크해요",
    started_at: "2025.03.04",
    due_at: "2025.03.11",
    ach: 2,
    obj: 10,
  },
  {
    id: 6,
    is_done: false,
    type: "spoon",
    title: "일회용 수저 받지 않기",
    description: "배달 어플 이용 시, ‘일회용 수저 안 받기'에 체크해요",
    started_at: "2025.03.04",
    due_at: "2025.03.11",
    ach: 2,
    obj: 10,
  },
];

export const CHALLENGE_MOCK_DATAS_2 = [
  // 완료한 챌린지 리스트
  {
    id: 2,
    is_done: true,
    type: "transportation",
    title: "대중교통 이용하기",
    description: "자가용 대신 버스나 지하철을 이용해요",
    started_at: "2025.03.04",
    due_at: "2025.03.11",
    ach: 2,
    obj: 8,
  },
  {
    id: 3,
    is_done: true,
    type: "basket",
    title: "장바구니 사용하기",
    description: "일회용 봉투 대신 장바구니를 사용해요",
    started_at: "2025.03.04",
    due_at: "2025.03.11",
    ach: 6,
    obj: 10,
  },

  {
    id: 5,
    is_done: true,
    type: "plogging",
    title: "줍깅 참여하기",
    description: "조깅을 하며 길거리의 쓰레기를 주워요",
    started_at: "2025.03.04",
    due_at: "2025.03.11",
    ach: 6,
    obj: 10,
  },
  {
    id: 7,
    is_done: true,
    type: "plogging",
    title: "줍깅 참여하기",
    description: "조깅을 하며 길거리의 쓰레기를 주워요",
    started_at: "2025.03.04",
    due_at: "2025.03.11",
    ach: 10,
    obj: 10,
  },
];

export const CREATE_CHALLENGE_MOCK_DATAS = [
  {
    id: 10,
    is_done: true,
    type: "transportation",
    title: "대중교통 이용하기",
    description: "자가용 대신 버스나 지하철을 이용해요",
  },
  {
    id: 11,
    is_done: true,
    type: "basket",
    title: "장바구니 사용하기",
    description: "일회용 봉투 대신 장바구니를 사용해요",
  },
  {
    id: 13,
    is_done: true,
    type: "plogging",
    title: "줍깅 참여하기",
    description: "조깅을 하며 길거리의 쓰레기를 주워요",
  },
];
