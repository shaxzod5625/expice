                                        // ТАК ДЕЛАТЬ НЕЛЬЗЯ !!!
   
// // ____________CONNECTIONS____________________________
// let navLogo = document.querySelector('.nav-logo'),
//     headerRightBg = document.querySelector('.header-content_right__bg'),
//     searchSubmit = document.querySelector('.search-submit'),
//     headerContentMap = document.querySelector('.header-content_map'),
//     mainTitleRect = document.querySelector('.main-title_rectangle'),
//     mainCarCont = document.querySelector('.main-carousel_controls__img'),
//     bookingTitleBefore = document.querySelector('.booking-title'),
    
// //____________CONNECTIONS_____________________________
// redTheme = document.querySelector('.theme-changer_btn__red').addEventListener('click', function () {
//     navLogo.style.color = '#FE043C';
//     headerRightBg.style.background = '#FE043C';
//     searchSubmit.style.background = '#FE043C';
//     headerContentMap.style.background = '#FE043C';
//     mainTitleRect.style.background = '#FE043C';
//     document.getElementById("tcb").src="/img/See More.png"; 
//     bookingTitleBefore.style.background = '#FE043C';
    
// })
// greenTheme = document.querySelector('.theme-changer_btn__green').addEventListener('click', function () {
//     navLogo.style.color = '#35CD8C';
//     headerRightBg.style.background = '#35CD8C';
//     searchSubmit.style.background = '#35CD8C';
//     headerContentMap.style.background = '#35CD8C';
//     mainTitleRect.style.background = '#35CD8C';
//     document.getElementById("tcb").src="/img/See More_green.png"; 
//     bookingTitleBefore.style.background = '#35CD8C';
    
                            // ТАК ДЕЛАТЬ НЕЛЬЗЯ !!!
    
// })

// ПОДКЛЮЧЕНИЯ --------------------------------------------
const imgs = document.getElementsByTagName('img');
for(let i = 0; i < imgs.length; i++ ) {
    imgs[i].setAttribute("ondragstart", "return false")
}
const arrowDown = document.querySelector('.arrow-down_icon')
const themeChanger = document.querySelector('.theme-changer')
const menuBurger = document.querySelector('.menu-burger_icon');
let body = document.querySelector('body');
let greenThemeButt = document.querySelector('.theme-changer_btn__green');
let redThemeButt = document.querySelector('.theme-changer_btn__red');
const navList = document.querySelector('.nav-list');
const userContent = document.querySelector('.user-icon_content');
const headerNav = document.querySelector('.header-nav');
let sidebarEpta = document.querySelector('.sidebar-epta_active');
const redTheme = document.querySelector('.red-theme');
const greenTheme = document.querySelector('.green-theme');
// ПОДКЛЮЧЕНИЯ --------------------------------------------\\\\\\\
// ОКНО ИЗМЕНЕНИЯ ТЕМЫ -------------------------------------
window.addEventListener('click', e => {
    if(e.target == arrowDown || (e.target !== themeChanger 
        && arrowDown !== e.target && themeChanger.classList.contains('theme-changer_active'))){
        themeChanger.classList.toggle('theme-changer_active')
    }
})
// ОКНО ИЗМЕНЕНИЯ ТЕМЫ -------------------------------------\\\\\\\
// ЗЕЛЕНАЯ ТЕМА --------------------------------------------
greenThemeButt.addEventListener('click', function () {
       body.classList.add('green-theme');
       document.getElementById("tcb").src="img/See More_green.png"; 
       document.getElementById("oscf").src="img/osifirstgreen.png";
       document.getElementById("oscs").src="img/osthirdgreen.png";
       document.getElementById("oscs").src="img/osthirdgreen.png";
       document.getElementById("osct").src="img/ossecondthird.png";
})
// ЗЕЛЕНАЯ ТЕМА --------------------------------------------\\\\\\
// КРАСНАЯ ТЕМА ---------------------------------------------
redThemeButt.addEventListener('click', function () {
       body.classList.remove('green-theme');
       document.getElementById("tcb").src="img/See More.png"; 
       document.getElementById("oscf").src="img/osifirst.png";
       document.getElementById("oscs").src="img/osthird.png";
       document.getElementById("osct").src="img/ossecond.png";
})
// КРАСНАЯ ТЕМА ---------------------------------------------\\\\\\

// САЙДБАР ------------------------------------------------
window.addEventListener('click', e => {
  if (e.target == menuBurger || (e.target !== sidebarEpta && menuBurger !== e.target && navList.classList.contains('sidebar-epta_active'))) {
      navList.classList.toggle('sidebar-epta_active')
  }
})
// САЙДБАР ------------------------------------------------\\\\\\
// МЕДИА ЗАПРОС --------------------------------------------
const mediaQuery = window.matchMedia('(max-width: 1200px)')
function handleTabletChange(e) {
  if (e.matches) {
         navList.classList.add('sidebar-epta')
        userContent.remove()
        navList.appendChild(redThemeButt)
        navList.appendChild(greenThemeButt)
       menuBurger.classList.remove('menu-burger_none')
      let brokoli = document.getElementById("brokoli")
      let letuce = document.getElementById("letuce")
      brokoli.src="img/brokoli-small.png"
      letuce.src="img/letuce-small.png"
  }else if(mediaQuery <= 'max-width: 1201px'){
    menuBurger.classList.add('menu-burger_none')
  }
}
mediaQuery.addListener(handleTabletChange)
handleTabletChange(mediaQuery)
// МЕДИА ЗАПРОС ---------------------------------------------\\\\\\\\

// ===============================СЛАЙДЕР=================================== //
class SLIDER{
  constructor(options){
      this.slider = document.querySelector(options.slider);
      this.sliderLine = document.querySelector(options.sliderLine)
      this.slides = this.sliderLine.children;
      this.next = this.slider.querySelector(options.leftBtn);
      this.prev = this.slider.querySelector(options.rightBtn);
      this.dir = options.direction.toUpperCase() == 'X' ? 'X' : 'Y';
      this.timeMove = options.time != undefined ? options.time : 1000;
      this.width = this.slider.clientWidth;
      this.height = this.slider.clientHeight;
      this.moveSize = "X" === this.dir ? this.width : this.height;
      this.activeSlide = (options.activeSlide);
      this.sliderLine.style = `
                          position:relative;
                          height:${this.height}px;
                          ;
      `
      for (let i = 0; i < this.slides.length; i++) {
          const sl = this.slides[i];
          sl.style = ` position:absolute;
                      width:${this.width}px;
                      height:${this.height}px;`;
          if (i != this.activeSlide) {
              sl.style.transform = `translate${this.dir}(${this.moveSize}px)`
          }
          if (i === this.slides.length - 1) {
              sl.style.transform = `translate${this.dir}(${-this.moveSize}px)`
          }
      }
      if (options.autoplay) {
          let interval = setInterval(() => {
              this.move(this.next);
          }, this.timeMove + 1000);
          this.slider.addEventListener('mouseenter', () => { clearInterval(interval) })
          this.slider.addEventListener('mouseleave', () => {
              interval = setInterval(() => {
                  this.move(this.next);
              }, this.timeMove)
          })
      }
           window.addEventListener('keydown', (e) =>{
        if (!this.next.disabled && !this.prev.disabled) {
          if (e.code == 'ArrowRight') {
            this.move(this.next)
        }else if(e.code == 'ArrowLeft') {
            this.move(this.prev)
        }
        }
      })
if (this.prev !== null) {
    this.prev.addEventListener('click', () => this.move(this.prev))
}
if (this.next !== null) {
    this.next.addEventListener('click', () => this.move(this.next))
}
  }
  move(btn){
      if (this.next !== null) {
        this.next.disabled = true;
      }
      if (this.prev !== null) {
           this.prev.disabled = true;
      }
     
      setTimeout(() => {
          if (this.next !== null) {
            this.next.disabled = false;
          }
            if (this.prev !== null) {
                this.prev.disabled = false;
            }
            
      }, this.timeMove);
      
      let btnLeftOrRight = btn == this.next ? this.moveSize * -1 : this.moveSize;
      
      for (let i = 0; i < this.slides.length; i++) {
          const slide = this.slides[i];
          slide.style.transition = '0ms';
          
          if (i != this.activeSlide) {
              slide.style.transform = `translate${this.dir}(${btnLeftOrRight * -1}px)`
              
          }
      }
      this.slides[this.activeSlide].style.transform = `translate${this.dir}(${btnLeftOrRight}px)`
      this.slides[this.activeSlide].style.transition = this.timeMove + `ms`;

      
      if (btn == this.next) {
          this.activeSlide++;
          if (this.activeSlide >= this.slides.length) {
              this.activeSlide = 0;
          }
      }else if(btn == this.prev){
          this.activeSlide--;
          if (this.activeSlide < 0) {
              this.activeSlide = this.slides.length -1;
          }
      }
      this.slides[this.activeSlide].style.transform = `translate${this.dir}(0px)`;
      this.slides[this.activeSlide].style.transition = this.timeMove + `ms`;
  }
  
}
// ===============================СЛАЙДЕР=================================== //
const slider = new SLIDER({
  slider : '.header-carousel',
  sliderLine : '.header-carousel_list',
  leftBtn : '#left',
  rightBtn : '#right',
  direction: 'X',
  time: 1000,
  autoplay: true,
  activeSlide : 0
})
