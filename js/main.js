$(document).ready(function () {
    // Variables
    var change_theme = $(".change_theme");
    const track=$('.carousel__track');
    const sgtBTn=$('.carousel__button--right');
    const prevBTn=$('.carousel__button--left');
    const dotsNav=$('.carousel__nav');
    const dots=Array.from(dotsNav.children());    
    const slides= Array.from(track.children());
    //const slideWidth= slides[0].getBoundingClientRect().width;
    

//     //Alineamiento de las slides
//     const setSlidePosition =(slides, index) =>{
//         slides.style.left=slideWidth * index +'px';
//     }
//     slides.forEach(setSlidePosition);

//     const movimientoSlide =(track ,Slideactiva, SlideObjetivo) =>{
//                 track.css('transform','translateX(-'+SlideObjetivo.css('left')+')');
//                 Slideactiva.removeClass("activa");
//                 SlideObjetivo.addClass("activa");
//     }; 
//     //Click en la flecha derecha, mover las slides en dicha dirección
//     sgtBTn.click(function(e){
//         const Slideactiva = $('.activa');
//         const SgtSlide = Slideactiva.next();
//         //Mover slide
//             movimientoSlide(track,Slideactiva,SgtSlide);
        
//     });
//     prevBTn.click(function(){
//         const Slideactiva = $('.activa');
//         const AnteriorSlide = Slideactiva.prev();
//         console.log(AnteriorSlide);
//         //Mover Slide
//         movimientoSlide(track,Slideactiva,AnteriorSlide);
//     });
//    /* dotsNav.click(function(e){
//         const targetDot=e.target.closest('button');
//         const Slideactiva = $('.activa');
//         const BTnactivo =$('.activa');
//         const targetIndex= dots.findIndex(dot => dot === targetDot);
//         const targetSlide =slides[targetIndex];
//         movimientoSlide(track,Slideactiva,targetSlide);
//         BTnactivo.removeClass("activa");
//         targetDot.addClass("activa");
//     });*/

//     // Cambiar Theme
//     change_theme.click(function () {
//         if (change_theme.val() == "Dark") {
//             $('.home').addClass("light");
//             change_theme.val("Light");
//         } else {
//             $('.home').removeClass("light");
//             change_theme.val("Dark");
//         };
//     });
 });