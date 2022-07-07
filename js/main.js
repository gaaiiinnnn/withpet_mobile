
//메인슬라이드
const swiper1 = new Swiper(".main_slider", {
    loop: true,
    autoplay: {
        delay: 1500,
    },
});

//인기여행지
const swiper2 = new Swiper(".tourist", {
    slidesPerView: "auto",
    spaceBetween:10,
});

//추천해줄개 메뉴
const swiper3 = new Swiper(".recommend_menu", {
    slidesPerView: "auto",
    spaceBetween:5,
});

//추천해줄개 이미지
const swiper4 = new Swiper(".recommend_hotel", {
    slidesPerView: "auto",
    spaceBetween:10,
});




