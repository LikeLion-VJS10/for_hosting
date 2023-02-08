import { swiperSlide, swiper, swiper2, swiper3, hero } from "./taing-swiper.js";
import {
  attr,
  tiger,
  delayP,
  insertLast,
  getNode as $,
  renderLiveRankProgram,
} from "../lib/index.js";

// const swiper = new Swiper(".mySwiper", {
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });

// async function getData() {
//   let response = await fetch('http://localhost:3000/tivingFun%27')
//     .then(response => response.json())
//     .then(
//       data =>
//         data.map(item => {
//           // let listItem = list.innerHTML(<li>${item.name}</li>)
//           // list.appendChild(listItem)
//           // // document.body.appendChild(jbBtn)
//           console.log(item)
//         })
//       // console.log(data)
//     )
// }

// const userCardContainer = $('.user-card-inner');

// async function rendingUserList() {

//   renderSpinner(userCardContainer)

//   try{
//     await delayP(2000)

//     $('.loadingSpinner').remove();

//     let response = await tiger.get( 'http://localhost:3000/users' );

//     let userData = response.data;
//     // userData.forEach(data=> renderUserCard(userCardContainer,data))
//     userData.forEach((data)=> {
//       renderUserCard(userCardContainer,data)
//     })

//     changeColor('.user-card');

//     gsap.to(gsap.utils.toArray('.user-card'),{
//       x:0,
//       opacity:1,
//       duration:1.5,
//       stagger: 0.2,
//     })
//   }catch(err){
//     // console.log(err);
//     renderEmptyCard(userCardContainer)

//   }
// }

// rendingUserList();

// // 삭제 버튼을 클릭하면 콘솔창에 '삭제' 글자가 출력이 될 수 있도록 만들어 주세요.

// function handler(e){
//   let deleteButton = e.target.closest('button');
//   let article = e.target.closest('article');

//   if(!deleteButton || !article) return; // 버튼이 아니면 실행 안함
//   // if(!article) return; // 누른 대상의 인접한 대상이 article이 아니면 실행 안함.

//   let id = attr(article,'data-index').slice(5);

//   // await tiger.delete(`http://localhost:3000/users/${id}`)

//   // userCardContainer.innerHTML = '';
//   // rendingUserList();

//   tiger.delete(`http://localhost:3000/users/${id}`).then(()=>{
//     userCardContainer.innerHTML = '';
//     rendingUserList();
//   })
// }

// userCardContainer.addEventListener('click',handler)
// let listdesk = document.querySelector('.desk .contents__list')
// let listtablet = document.querySelector('.tablet .contents__list')

// function settingSwipers() {
//   let swiper = new Swiper('.slow', {
//     slidesPerView: 5,
//     spaceBetween: 10,

//     autoplay: {
//       delay: 0 //add
//     },
//     speed: 7000,
//     loop: true,
//     allowTouchMove: false, //드래그 슬라이드 막음
//     loopAdditionalSlides: 1,
//     loopFillGroupWithBlank: true,
//     breakpoints: {
//       768: {
//         slidesPerView: 3,
//         slidesPerGroup: 3
//       },
//       1024: {
//         slidesPerView: 5,
//         slidesPerGroup: 5
//       }
//     }
//   })

//   let swiper2 = new Swiper('.fast', {
//     slidesPerView: 5,
//     spaceBetween: 10,

//     autoplay: {
//       delay: 0 //add
//     },
//     speed: 6000,
//     loop: true,
//     allowTouchMove: false, //드래그 슬라이드 막음
//     loopAdditionalSlides: 1,
//     loopFillGroupWithBlank: true,

//     breakpoints: {
//       768: {
//         slidesPerView: 3,
//         slidesPerGroup: 3
//       },
//       1024: {
//         slidesPerView: 5,
//         slidesPerGroup: 5
//       }
//     }
//   })
// }

// async function tivingFun() {
//   let response = await fetch('http://localhost:3000/tivingFundDesk')
//     .then(response => response.json())
//     .then(data =>
//       data.map(item => {
//         let onLi = document.createElement('li')
//         let onImg = document.createElement('img')
//         onLi.classList.add('contents__item')
//         onImg.setAttribute('src', `${item.image}`)
//         onImg.setAttribute('alt', `${item.description}`)
//         onLi.appendChild(onImg)
//         listdesk.appendChild(onLi)
//       })
//     )
//     .then(() => {
//       settingSwipers()
//     })
// }
// tivingFun()
// async function tivingFun1() {
//   let response = await fetch('http://localhost:3000/tivingFundTablet')
//     .then(response => response.json())
//     .then(data =>
//       data.map(item => {
//         let onLi = document.createElement('li')
//         let onImg = document.createElement('img')
//         onLi.classList.add('contents__item')
//         onImg.setAttribute('src', `${item.image}`)
//         onImg.setAttribute('alt', `${item.description}`)
//         onLi.appendChild(onImg)
//         listtablet.appendChild(onLi)
//       })
//     )
//     .then(() => {
//       settingSwipers()
//     })
// }
// tivingFun1()

// let doubleList = document.querySelector('.slow-swiper')
// console.log(doubleList)
// async function wantFun1() {
//   let response = await fetch('http://localhost:3000/wantFun')
//     .then(response => response.json())
//     .then(data =>
//       data.map(item => {
//         let onLi = document.createElement('li')
//         let onImg = document.createElement('img')
//         onLi.classList.add('swiper-slide')
//         onImg.setAttribute('src', `${item.image}`)
//         // onImg.setAttribute('alt', `${item.description}`)
//         onLi.appendChild(onImg)
//         doubleList.appendChild(onLi)
//       })
//     )
//     .then(() => {
//       settingSwipers()
//     })
// }
// wantFun1()

// let doubleList2 = document.querySelector('.fast-swiper ')
// console.log(doubleList2)
// async function wantFun2() {
//   let response = await fetch('http://localhost:3000/wantFun')
//     .then(response => response.json())
//     .then(data =>
//       data.map(item => {
//         let onLi = document.createElement('li')
//         let onImg = document.createElement('img')
//         onLi.classList.add('swiper-slide')
//         onImg.setAttribute('src', `${item.image}`)
//         // onImg.setAttribute('alt', `${item.description}`)
//         onLi.appendChild(onImg)
//         doubleList2.appendChild(onLi)
//       })
//     )
//     .then(() => {
//       settingSwipers()
//     })
// }
// wantFun2()
/* global gsap */

import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

import { getNode, setCss } from "../lib/index.js";

var thumbnailSwiper = new Swiper(".thumbnail-window", {
  slidesPerView: 2,
  spaceBetween: 30,
  centeredSlides: true,
  //allowTouchMove: false,
});

const upperSwiper = new Swiper(".upper-wrapper", {
  loop: true,
  loopedSlidesLimit: false,

  autoplay: {
    delay: 1,
    disableOnInteraction: true,
  },
  spaceBetween: 10,
  speed: 3000,
  grabCursor: false,
  mousewheelControl: false,
  keyboardControl: true,
  allowTouchMove: false,
  breakpoints: {
    320: {
      width: 900,
      slidesPerView: 5,
    },
    1200: {
      width: 1400,
      slidesPerView: 3,
    },
  },
});

const lowerSwiper = new Swiper(".lower-wrapper", {
  loop: true,
  loopedSlidesLimit: false,

  autoplay: {
    delay: 1,
    disableOnInteraction: true,
  },
  spaceBetween: 10,
  speed: 2300,
  grabCursor: false,
  mousewheelControl: false,
  keyboardControl: true,
  allowTouchMove: false,
  breakpoints: {
    320: {
      width: 900,
      slidesPerView: 5,
    },
    1200: {
      width: 1400,
      slidesPerView: 3,
    },
  },
});

let horizontal_scroll_tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".scroll-section-1",
    scrub: 0.5,
    pin: ".scroll-section-1",
    start: "top top",
    end: () => `+=${3000}`,
    onUpdate: (self) => {
      //console.log(self.progress);

      if (self.progress < 0.2) {
        thumbnailSwiper.slideTo(0);
      } else if (self.progress >= 0.2 && self.progress < 0.4) {
        thumbnailSwiper.slideTo(1);
      } else if (self.progress >= 0.4 && self.progress < 0.6) {
        thumbnailSwiper.slideTo(2);
      } else if (self.progress >= 0.6 && self.progress < 0.8) {
        thumbnailSwiper.slideTo(3);
      } else if (self.progress >= 0.8) {
        let cnt = parseInt((self.progress * 100 - 80) * 5);
        getNode(".scroll-section-1").style.filter = `brightness(${100 - cnt}%)`;
      }
    },
  },
});
