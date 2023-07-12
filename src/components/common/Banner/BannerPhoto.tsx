import React, { FC, useEffect, useRef, useState } from 'react';

import './Banner.sass';
import { StaticImage } from 'gatsby-plugin-image';
import { ReactSVG } from 'react-svg';
import { graphql, useStaticQuery } from 'gatsby';


const CanvasRings: React.FC = (props) => {
  //https://hashnode.blainegarrett.com/html-5-canvas-react-refs-and-typescript-ckf4jju8r00eypos1gyisenyf
  // Typed useRef usage
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null);

  let state = {
    canvasWidth: 1920,
    canvasHeight: 1024,
  }
  useEffect(() => {
    if (canvasRef.current) {


      canvasCtxRef.current = canvasRef.current.getContext('2d');

      const cnv = canvasCtxRef.current;
      const ctx = canvasCtxRef.current;

      const numberOfRings = 3;
      const ringRadiusOffset = 10;
      let ringRadius = 400;
      const waveOffset = 15;
      const colors = ['#D03AFF', '#9724ba', '#560d6d'];
      // const colors = ['#CEF500', '#89be21', '#70a900'];
      let startAngle = 0;

      const maxWavesAmplitude = 17;
      const numberOfWaves = 7;

      let centerX: any;
      let centerY: any;

      function init() {
        cnv!.canvas.width = cnv!.canvas.offsetParent.offsetWidth;
        cnv!.canvas.height = window.innerHeight - document.querySelector('.header').offsetHeight * 2;

        let selfCnvHeight = (cnv && cnv!.canvas) ? cnv!.canvas.height : state.canvasHeight;
        let selfCnvWidth = (cnv && cnv!.canvas) ? cnv!.canvas.width : state.canvasWidth;
        // console.log(cnv!.canvas.height);
        // console.log("🚀 ~ file: Banner.tsx:43 ~ init ~ selfCnvHeight:", selfCnvHeight)

        if (selfCnvHeight <= 700  || selfCnvWidth <= 768) {
          ringRadius = 200;
          // console.log("🚀 ~ file: Banner.tsx:46 ~ init ~ ringRadius:", ringRadius)
        }
        else if (selfCnvHeight <= 750) {
          ringRadius = 320;
          // console.log("🚀 ~ file: Banner.tsx:49 ~ init ~ ringRadius:", ringRadius)
        }
        else if (selfCnvHeight <= 1050 || selfCnvWidth <= 768) {
          ringRadius = 350;
          // console.log("🚀 ~ file: Banner.tsx:52 ~ init ~ ringRadius:", ringRadius)
        }
        else {
          ringRadius = 380;
          // console.log("🚀 ~ file: Banner.tsx:55 ~ init ~ ringRadius:", ringRadius)

        }
        centerX = cnv!.canvas.width / 2;
        centerY = cnv!.canvas.height / 2;

      }

      init();

      function updateRings() {
        for (let i = 0; i < numberOfRings; i++) {
          let radius = i * ringRadiusOffset + ringRadius;
          let offsetAngle = i * waveOffset * Math.PI / 180;
          drawRing(radius, colors[i], offsetAngle);
        }
        startAngle >= 360 ? startAngle = 0 : startAngle++;
      }

      function drawRing(radius: any, color: any, offsetAngle: any) {
        ctx!.strokeStyle = color;
        ctx!.lineWidth = 11;

        ctx!.beginPath();


        for (let j = -180; j < 180; j++) {
          let currentAngle = (j + startAngle) * Math.PI / 180;
          let displacement = 0;
          let now = Math.abs(j);
          if (now > 70) {
            displacement = (now - 70) / 70;
          }
          if (displacement >= 1) {
            displacement = 1;
          }
          let waveAmplitude = radius + displacement * Math.sin((currentAngle + offsetAngle) * numberOfWaves) * maxWavesAmplitude;
          let x = centerX + Math.cos(currentAngle) * waveAmplitude;
          let y = centerY + Math.sin(currentAngle) * waveAmplitude;

          j > -180 ? ctx!.lineTo(x, y) : ctx!.moveTo(x, y);
        }
        ctx!.closePath();
        ctx!.stroke();
      }

      function loop() {
        ctx!.clearRect(0, 0, state.canvasWidth, state.canvasHeight);
        updateRings();
        requestAnimationFrame(loop);
      }

      loop();


      window.addEventListener('resize', init);
    }
  }, []);


  return (
    <canvas ref={canvasRef}></canvas>
  );
};


export const BannerImg: FC = () => {
    const { photo } = useStaticQuery(
        graphql` 
          query  {
            photo: file(relativePath: { eq: "avatar-transparent.svg" }) {
                publicURL
                name
            }
          }
        `);
  return (
    <section className="banner">

      <div className="canvas">
        <CanvasRings />
      </div>
      <div className="banner__logo">
        {/* <StaticImage
            src={'../../../assets/images/banner1.png'}
            alt='img'
        /> */}
        <ReactSVG 
          src={photo.publicURL} 
            title={'title'}
            desc="Description"
            className="wrapper-class-name"
            useRequestCache={false}
            wrapper="span"

            beforeInjection={(svg) => {
              svg.classList.add('banner__logo-svg')
            }}
          />
      </div>
    </section>
  )
}
