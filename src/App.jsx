import Banner from "./components/Banner";
import Contact from "./components/Contact";
import SkillsComponent from "./components/SkillsComponent";
import Education from "./components/Education";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import Testimonial from "./components/Testimonial";
import Watch from "./components/Watch";
import Cards from "./components/Cards";
function App() {
  return (
    <main className="font-bodyFont h-auto">
      <Navbar />
      <div className="w-full">
      <div>
      <Banner />
      <SkillsComponent/>
      <Watch/>
      <Education/>
      <Testimonial/>
      <Partners/>
      <Cards/>
        <Contact/>
      
        </div>
      </div>
    </main>
  );
}

export default App;
// import { useRef, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import gsap from 'gsap';

// import Banner from "./components/Banner";
// import Contact from "./components/Contact";
// import SkillsComponent from "./components/SkillsComponent";
// import Education from "./components/Education";
// import Navbar from "./components/Navbar";
// import Partners from "./components/Partners";
// import Testimonial from "./components/Testimonial";
// import Watch from "./components/Watch";
// import Cards from "./components/Cards";

// function App() {
//   const headerRef = useRef<HTMLHeadingElement>(null);

//   useEffect(() => {
//     const header = headerRef.current;

//     if (!header) return;

//     function adjustTilt(e: MouseEvent) {
//       let width = header.offsetWidth;
//       let mouseX = e.clientX;
//       let rotationY = 20 * ((mouseX / width) - 0.5);
//       header.style.transform = `rotateY(${rotationY}deg)`;
//     }

//     function handleHeaderClick() {
//       if (!header) return;

//       header.style.opacity = '0';
//       setTimeout(() => {
//         header.classList.add('clicked');
//         header.style.opacity = '1';
//       }, 500);
//       setTimeout(() => {
//         header.classList.remove('clicked');
//       }, 1500);
//     }

//     header.addEventListener('mousemove', adjustTilt);
//     header.addEventListener('click', handleHeaderClick);

//     return () => {
//       if (!header) return;

//       header.removeEventListener('mousemove', adjustTilt);
//       header.removeEventListener('click', handleHeaderClick);
//     };
//   }, []);

//   useEffect(() => {
//     let sections = document.querySelectorAll(".section"),
//         lastTap = 0,
//         images = document.querySelectorAll(".background"),
//         headings = document.querySelectorAll(".section-title"),
//         outerWrappers = document.querySelectorAll(".wrapper-outer"),
//         innerWrappers = document.querySelectorAll(".wrapper-inner"),
//         currentIndex = -1,
//         wrap = (index: number, max: number) => (index + max) % max,
//         animating: boolean;

//     gsap.set(outerWrappers, { yPercent: 100 });
//     gsap.set(innerWrappers, { yPercent: -100 });

//     function gotoSection(index: number, direction: number) {
//       index = wrap(index, sections.length);
//       animating = true;

//       let fromTop = direction === -1,
//           dFactor = fromTop ? -1 : 1,
//           tl = gsap.timeline({
//               defaults: { duration: 1.25, ease: "power1.inOut" },
//               onComplete: () => (animating = false),
//           });

//       if (currentIndex >= 0) {
//           gsap.set(sections[currentIndex], { zIndex: 0 });
//           tl.to(images[currentIndex], { yPercent: -15 * dFactor }).set(
//               sections[currentIndex],
//               { autoAlpha: 0 }
//           );
//       }

//       gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
//       tl.fromTo(
//           [outerWrappers[index], innerWrappers[index]],
//           { yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor) },
//           { yPercent: 0 },
//           0
//       )
//       .fromTo(
//           images[index],
//           { yPercent: 15 * dFactor },
//           { yPercent: 0 },
//           0
//       )
//       .fromTo(
//           headings[index],
//           {
//               autoAlpha: 0,
//               yPercent: 150 * dFactor,
//           },
//           {
//               autoAlpha: 1,
//               yPercent: 0,
//               duration: 1,
//               ease: "power2",
//               stagger: {
//                   each: 0.02,
//                   from: "random",
//               },
//           },
//           0.2
//       );

//       currentIndex = index;
//     }

//     function handleTap(event: TouchEvent) {
//       let currentTime = new Date().getTime();
//       let tapLength = currentTime - lastTap;
//       if (tapLength < 500 && tapLength > 0) {
//           if (!animating) {
//               gotoSection(currentIndex + 1, 1);
//           }
//       }
//       lastTap = currentTime;
//     }

//     sections.forEach(section => {
//       section.addEventListener('touchend', handleTap);
//     });

//     window.addEventListener("wheel", (event) => {
//       if (event.deltaY < 0 && !animating) {
//           gotoSection(currentIndex - 1, -1);
//       } else if (event.deltaY > 0 && !animating) {
//           gotoSection(currentIndex + 1, 1);
//       }
//     });

//     gotoSection(0, 1);
//   }, []);

//   return (
//     <main className="font-bodyFont h-auto">
//       <Navbar />

//       <div className="w-full">
//         <Banner />
//         <SkillsComponent/>
//         <Watch/>
//         <Education/>
//         <Testimonial/>
//         <Partners/>
//         <Cards/>
//         <Contact/>
//       </div>
//     </main>
//   );
// }

// ReactDOM.render(<App />, document.getElementById("root"));
