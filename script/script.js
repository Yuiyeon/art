$(() => {
  //대한은행 객체 생성자 방식

  const bank = {
    init() {
      // 초기값을 지정 = 전체를 실행 (이름은 임의로 지정한 거임, initialize)

      this.header(); //bank 에서 header만 실행
      this.section1(); // 섹션1을 실행
      this.section2(); // 섹션2을 실행
      this.footer(); // 푸터를 실행
      this.modal(); // 모달을 실행
    },

    header() {
      // 매서드 (함수)
      //////////////////////////////헤더영역////////////////////
      // [1] 네비게이션
      // 메인버튼 위에 마우스를 가져가면
      // 초기화 먼저
      // .main-btn(this) 클래스에 on 추가
      // .main0btn(this)아래 .sub 슬라이드 다운
      // focus 이벤트

      $(".main-btn").on({
        mouseenter() {
          $(".main-btn").removeClass("on");
          $(".sub").stop().slideUp(0);

          $(this).addClass("on");
          $(this).next().stop().slideDown(300);
        },
        focus() {
          $(".main-btn").removeClass("on");
          $(".sub").stop().slideUp(0);

          $(this).addClass("on");
          $(this).next().stop().slideDown(300);
        },
      });
      // 마우스가 gnb를 벗어나면 초기화하기 (부드럽게)
      $("#gnb").on({
        mouseleave() {
          $(".main-btn").removeClass("on");
          $(".sub").stop().slideUp(300);
        },
      });
    },
    section1() {
      //////////////////////////////섹션 1 영역////////////////////
      // [2] 메인슬라이드
      // 1. 변수 2. 메인슬라이드 함수 3. 카운트 함수 4. 셋인터벌
      let cnt = 0;
      function mainSlide() {
        $(".slide-wrap")
          .stop()
          .animate({ top: `${-300 * cnt}` }, 600, function () {
            if (cnt >= 3) {
              cnt = 0;
              $(".slide-wrap")
                .stop()
                .animate({ top: `${-300 * cnt}` }, 0);
            }
          });
      }
      function nextCount() {
        cnt++;
        mainSlide();
      }
      setInterval(nextCount, 3000);
    },
    section2() {
      //////////////////////////////섹션 2영역////////////////////
      // [3] 공지사항 갤러리 탭버튼
      //공지사항 클릭할 떄
      $(".notice-btn").on({
        click(e) {
           e.preventDefault();
          $(".tab-btn,.contents").removeClass("on"); //버튼 2개, 박스 2개 총 4개 다 변함
        },
      });

      // 갤러리 버튼 클릭할 때
      $(".gallery-btn").on({
        click(e) {
           e.preventDefault();
          $(".tab-btn,.contents").addClass("on"); //버튼 2개, 박스 2개 총 4개 다 변함
        },
      });
      //////////////////////////////모달영역////////////////////
      // [4] 모달 버튼
      // 공지사항 첫글 클릭해서 열기
      $(".modal-open").on({
        click(e) {
           e.preventDefault();
          $(".modal").addClass("on");
        },
      });
    },
    footer() {},
    modal() {
      // 모달창 닫기 버튼 클릭
      $(".close-btn").on({
        click(e) {
          e.preventDefault();
          $(".modal").removeClass("on");
        },
      });
    },
  };

  bank.init();
});
