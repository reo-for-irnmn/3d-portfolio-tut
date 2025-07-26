import React from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 } ,
      { opacity: 1, duration: 1.5 }
    );

  const projects = [project1Ref.current, project2Ref.current, project3Ref.current];
  
    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
        {/* LEFT */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div>
              <img src="/images/project1.JPG" alt="Gothic" />
            </div>
            <div className="text-content">
              <h2>中世ヨーロッパのゴシック建築風</h2>
              <p className="text-white-50 md:text-xl">
                制作期間：1ヶ月<br />
                制作ツール：Blender, Photoshop
              </p>
            </div>
          </div>

        {/* RIGHT */}
        <div className="project-list-wrapper overflow-hidden">
          <div className="project" ref={project2Ref}>
            <div className="image-wrapper bg-[#FFEFDB]">
              <img src="/images/project2.JPG" alt="Modern room" />
            </div>
            <div className="text-content">
              <h2>フォトリアルモダンルーム</h2>
              <p className="text-white-50 md:text-xl">
                  制作期間：2週間<br />
                  制作ツール：Blender
              </p>
            </div>
          </div>

          <div className="project" ref={project3Ref}>
            <div className="image-wrapper bg-[#FFE7EB]">
              <img src="/images/project3.JPG" alt="Macbook" />
            </div>
            <div className="text-content">
              <h2>M1 Macbook</h2>
              <p className="text-white-50 md:text-xl">
                  制作期間：1日<br />
                  制作ツール：Blender
              </p>
            </div>
          </div>

        </div>
        </div>
      </div>
    </div>
  )
}

export default ShowcaseSection