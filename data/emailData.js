const aEmailData = [
    {
        sender : '티켓몬스터', // 보낸사람
        title : '환불 내용입니다', // 제목
        date : '2018.4.10', // 날짜
        content : '단순변심에 의한 환불은 제품 수령 후 7일 이내 까지만 가능\n단, 상품 특성, 상태에 따라 단순변심 환불 불가할 수 있음\n포장 개봉/훼손 등으로 상품 가치 현저히 상실한 경우 ' // 내용
    },
    {
        sender : 'PAYPAL', // 보낸사람
        title : 'About you Assistant', // 제목
        date : '2018.6.4', // 날짜
        content : 'This mailbox is not monitored and you will not receive a response.\nFor assistance, log in to your PayPal account and click Help in the top right corner of any PayPal page' // 내용
    },
    {
        sender : 'Pixel Film Studio',
        title : 'ProFreeze Wedding',
        date : '2018.6.2',
        content : 'With our sites built-in bundle tool you can save more on your next order by bundling\nyou want and instantly start saving! As soon as you place 5 or more products in your cart'
    },
    {
        sender : '삼성카드',
        title : '고지서받아라',
        date : '2016.6.2',
        content : '축하합니다.\n이번달에 엄청많이 쓰셨네요.ㅋㅋㅋㅋㅋㅋ\n담달에도 잘부탁해요'
    },
    {
        sender : '여행사',
        title : '필리핀 여행의 모든것',
        date : '2018.5.20',
        content : '10월이후 보라카이 항공권 판매\n\n\n아래 링크를 클릭하세요\nhttp://www.ticketmonster.co.kr'
    },
    {
        sender : '전여친',
        title : '나 결혼해...',
        date : '2018.3.6',
        content : '오빠 안녕 잘지냈어?\n나 요번달말에 결혼해.\n와서 축해해주면 좋겠어\n축의금도 두둑히...^^'
    },
    {
        sender : '부모님',
        title : '옆집 아들은..',
        date : '2018.3.16',
        content : '옆집 철수네 아들은 요번에 냉장고 사왔다드라\n머 문제 4짝이나 달렸대.\n우린 그런거 다 필요없다.\n수박이 냉장고에 안들어가는데. 다땃하게 먹으면돼지머'
    },
    {
        sender : '김아름',
        title : '오뽜~~~~~',
        date : '2018.2.6',
        content : 'g아＊담하고 와h꾸좋고 섹H시한 바Y디\nI작은 얼K굴에 늘씬한 몸＊매\n연s락주k세요!!'
    },
    {
        sender : 'happyday', // 보낸사람
        title : '피지오겔 페이셜크림 75ml', // 제목
        date : '2018.6.2', // 날짜
        content : '5개 묶음 택배비포함 53,000원\n유효기한 2020년9월1일' // 내용
    },
    {
        sender : '백솔이', // 보낸사람
        title : '버츠비 카멕스 블리스텍스 립밤', // 제목
        date : '2017.12.20', // 날짜
        content : '향료, 색소, 파라벤 등 피부에 유해한\n성분을 깔끔하게 배제하고 만들어\n남녀노고 누구나 순하게 바를 수 있어요' // 내용
    },
    {
        sender : '쿵쿵따리쿵쿵따', // 보낸사람
        title : '클리엣 하이드라 컨센트레이트 앰플', // 제목
        date : '2018.1.20', // 날짜
        content : '색소/향료 등 21가지 피부 유해 성분 일체 없이\n이온화된 3중 히알루론산을 담은 앰플이에요' // 내용
    },
    {
        sender : '호스트', // 보낸사람
        title : '투룸 오피스텔 공실', // 제목
        date : '2018.2.8', // 날짜
        content : '투룸 오피스텔 공실을 airbnb 로 활용해보면 어떨까 하는 생각이 들어서요.\n물론 지역에 따라 다르겠지만 서울, 경기 보통 4,50 하는 월세보단 낫지 않을까 생각이 듭니다.\n지역 특성 상 외국인 거주자 및 관광객이 꽤 많은 지역입니다.' // 내용
    },
    {
        sender : 'GNDR', // 보낸사람
        title : 'Crossfit Schedule', // 제목
        date : '2018.2.12', // 날짜
        content : '크로스핏 수업은\n다양한 움직임 운동을 통한\n고강도의 기능적인 운동 추구하는 수업입니다.' // 내용
    },
    {
        sender : '비기너', // 보낸사람
        title : '코리아게임즈', // 제목
        date : '2018.2.15', // 날짜
        content : '크로스핏 국내 대회 중\n최대 규모로 진행되는\n코리아게임즈가 곧 개최됩니다. ' // 내용
    },
    {
        sender : '리지', // 보낸사람
        title : '립밤 6종 리뷰', // 제목
        date : '2018.2.22', // 날짜
        content : '버츠비는 향이 좀 별로긴 한데\n립밤의 재능이있는 아이\n국민립밤 카멕스가 미국이라면\n니베아는 우리나라학생들의 국민립밤' // 내용
    },
    {
        sender : '발리발리', // 보낸사람
        title : '덴파사르', // 제목
        date : '2018.2.3', // 날짜
        content : '덴파사르(인도네시아어: Kota Denpasar)는 인도네시아 발리 주의 주도이다. 발리 섬의 주요 관문인 응우라 라이 공항이 있다. 인구는 49만1500명이다.(2002년)' // 내용
    },
    {
        sender : 'papa', // 보낸사람
        title : '빠당빠당', // 제목
        date : '2018.3.13', // 날짜
        content : '[북한어] 건드리면 소리가 날 정도로 몹시 팽팽한 모양' // 내용
    },
    {
        sender : '김반장님', // 보낸사람
        title : '일산 카페, 화이트브릭', // 제목
        date : '2018.5.12', // 날짜
        content : '오픈 즈음에 전원속의 내집 4월호 핫플레이스 면에 화이트브릭의 오픈기사가 실린 적이 있었습니다.\n잡지사측의 요청에 이미지와 간략한 서면자료를 보내드렸더니 한국 최대 규모의 플래그쉽 스토어를 선보인 무지코리아 오픈 소식과 함께 기사로 다뤄주셨네요.' // 내용
    },
    {
        sender : '트윙클써니', // 보낸사람
        title : '유지어터와 다이어터', // 제목
        date : '2018.5.12', // 날짜
        content : '사진 왼쪽은 100% 호밀빵\n오른쪽은 햄버거 번!\n말그대로 그냥 밀가루!\n밀가루는 다이어트중에 드시면 안됩니다!\n유지어터때도 잘 참았다 일주일아님\n이주에 한번만..먹어야합니당' // 내용
    },
    {
        sender : 'sang', // 보낸사람
        title : '5월8일', // 제목
        date : '2014.5.8', // 날짜
        content : '선식 (120k)\n오예스 1봉 (140k)\n아메리카노 1잔(10k)' // 내용
    },
    {
        sender : 'sang', // 보낸사람
        title : '5월16일', // 제목
        date : '2018.5.16', // 날짜
        content : '오예스 1봉 (140k)\n아메리카노 2잔 (20k)\n딸기아보카도주스 (277k)\n곱창 (315k)\n청하 (300k)' // 내용
    },
    {
        sender : 'sang', // 보낸사람
        title : '5월17일', // 제목
        date : '2014.5.17', // 날짜
        content : '그린티라떼 1잔 (260k)\n고구마 1개 (200k)\n닭가슴살 소세지 2개 (160K)\n코코넛워터 (92k)\n모츠나베+맥주1잔 (??)' // 내용
    },
    {
        sender : 'sang', // 보낸사람
        title : '5월15일', // 제목
        date : '2014.5.15', // 날짜
        content : '카스테라 1봉(110k)\n황성주두유 1개(105k)\n잠바수즈 1개(270k)\n고구마 반개(100k)\n닭가슴살 소세지 1개(80k)\n황성주두유 1개(105k)' // 내용
    }
];