(() => {
    const cnv = document.querySelector('canvas');
    const ctx = cnv.getContext('2d');

    const numberOfRings = 3;
    const ringRadiusOffset = 10;
    const ringRadius = 325;
    const waveOffset = 15;
    const colors = document.querySelectorAll('.theme-color');
    let startAngle = 0;

    const maxWavesAmplitude = 17;
    const numberOfWaves = 7;

    let centerX;
    let centerY;

    function init() {
        // cnv.width = innerWidth-5;
        cnv.width = cnv.offsetParent.offsetWidth;
        cnv.height = innerHeight - document.querySelector('.header').offsetHeight * 2;

        centerX = cnv.width / 2;
        centerY = cnv.height / 2;
    }
    
    init();

    function updateRings() {
        for(let i = 0; i < numberOfRings; i++){
            let radius = i * ringRadiusOffset + ringRadius;
            let offsetAngle = i * waveOffset * Math.PI / 180;
            drawRing(radius, colors[i], offsetAngle);
        }
        startAngle >= 360 ? startAngle = 0 : startAngle++;
    }

    function drawRing(radius, color, offsetAngle){
        ctx.strokeStyle = getComputedStyle(color).color;
        ctx.lineWidth = 11;

        ctx.beginPath();
        

        for( let j = -180; j < 180; j++){
            let currentAngle = (j + startAngle) * Math.PI / 180; 
            let displacement = 0; 
            let now = Math.abs(j);
            if(now > 70 ){
                displacement = (now - 70) / 70;
            }
            if(displacement >= 1 ){
                displacement = 1;
            }
            let waveAmplitude = radius + displacement * Math.sin((currentAngle + offsetAngle)  * numberOfWaves) * maxWavesAmplitude;
            let x = centerX + Math.cos(currentAngle) * waveAmplitude;
            let y = centerY + Math.sin(currentAngle) * waveAmplitude;
            
            j > -180 ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
        }
        ctx.closePath();
        ctx.stroke();
    }

    function loop() {
        // cnv.width = 0;  // 
        ctx.clearRect(0, 0, cnv.width, cnv.height);
        updateRings();
        requestAnimationFrame(loop);
    }
    loop();

    window.addEventListener('resize', init);
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjYW52YW5zLXJpbmdzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIigoKSA9PiB7XHJcbiAgICBjb25zdCBjbnYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKTtcclxuICAgIGNvbnN0IGN0eCA9IGNudi5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgIGNvbnN0IG51bWJlck9mUmluZ3MgPSAzO1xyXG4gICAgY29uc3QgcmluZ1JhZGl1c09mZnNldCA9IDEwO1xyXG4gICAgY29uc3QgcmluZ1JhZGl1cyA9IDMyNTtcclxuICAgIGNvbnN0IHdhdmVPZmZzZXQgPSAxNTtcclxuICAgIGNvbnN0IGNvbG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aGVtZS1jb2xvcicpO1xyXG4gICAgbGV0IHN0YXJ0QW5nbGUgPSAwO1xyXG5cclxuICAgIGNvbnN0IG1heFdhdmVzQW1wbGl0dWRlID0gMTc7XHJcbiAgICBjb25zdCBudW1iZXJPZldhdmVzID0gNztcclxuXHJcbiAgICBsZXQgY2VudGVyWDtcclxuICAgIGxldCBjZW50ZXJZO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAgICAgLy8gY252LndpZHRoID0gaW5uZXJXaWR0aC01O1xyXG4gICAgICAgIGNudi53aWR0aCA9IGNudi5vZmZzZXRQYXJlbnQub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgY252LmhlaWdodCA9IGlubmVySGVpZ2h0IC0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpLm9mZnNldEhlaWdodCAqIDI7XHJcblxyXG4gICAgICAgIGNlbnRlclggPSBjbnYud2lkdGggLyAyO1xyXG4gICAgICAgIGNlbnRlclkgPSBjbnYuaGVpZ2h0IC8gMjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW5pdCgpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZVJpbmdzKCkge1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBudW1iZXJPZlJpbmdzOyBpKyspe1xyXG4gICAgICAgICAgICBsZXQgcmFkaXVzID0gaSAqIHJpbmdSYWRpdXNPZmZzZXQgKyByaW5nUmFkaXVzO1xyXG4gICAgICAgICAgICBsZXQgb2Zmc2V0QW5nbGUgPSBpICogd2F2ZU9mZnNldCAqIE1hdGguUEkgLyAxODA7XHJcbiAgICAgICAgICAgIGRyYXdSaW5nKHJhZGl1cywgY29sb3JzW2ldLCBvZmZzZXRBbmdsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0YXJ0QW5nbGUgPj0gMzYwID8gc3RhcnRBbmdsZSA9IDAgOiBzdGFydEFuZ2xlKys7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZHJhd1JpbmcocmFkaXVzLCBjb2xvciwgb2Zmc2V0QW5nbGUpe1xyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoY29sb3IpLmNvbG9yO1xyXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAxMTtcclxuXHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBmb3IoIGxldCBqID0gLTE4MDsgaiA8IDE4MDsgaisrKXtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRBbmdsZSA9IChqICsgc3RhcnRBbmdsZSkgKiBNYXRoLlBJIC8gMTgwOyBcclxuICAgICAgICAgICAgbGV0IGRpc3BsYWNlbWVudCA9IDA7IFxyXG4gICAgICAgICAgICBsZXQgbm93ID0gTWF0aC5hYnMoaik7XHJcbiAgICAgICAgICAgIGlmKG5vdyA+IDcwICl7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGFjZW1lbnQgPSAobm93IC0gNzApIC8gNzA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoZGlzcGxhY2VtZW50ID49IDEgKXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYWNlbWVudCA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHdhdmVBbXBsaXR1ZGUgPSByYWRpdXMgKyBkaXNwbGFjZW1lbnQgKiBNYXRoLnNpbigoY3VycmVudEFuZ2xlICsgb2Zmc2V0QW5nbGUpICAqIG51bWJlck9mV2F2ZXMpICogbWF4V2F2ZXNBbXBsaXR1ZGU7XHJcbiAgICAgICAgICAgIGxldCB4ID0gY2VudGVyWCArIE1hdGguY29zKGN1cnJlbnRBbmdsZSkgKiB3YXZlQW1wbGl0dWRlO1xyXG4gICAgICAgICAgICBsZXQgeSA9IGNlbnRlclkgKyBNYXRoLnNpbihjdXJyZW50QW5nbGUpICogd2F2ZUFtcGxpdHVkZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGogPiAtMTgwID8gY3R4LmxpbmVUbyh4LCB5KSA6IGN0eC5tb3ZlVG8oeCwgeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcclxuICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbG9vcCgpIHtcclxuICAgICAgICAvLyBjbnYud2lkdGggPSAwOyAgLy8gXHJcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjbnYud2lkdGgsIGNudi5oZWlnaHQpO1xyXG4gICAgICAgIHVwZGF0ZVJpbmdzKCk7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xyXG4gICAgfVxyXG4gICAgbG9vcCgpO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBpbml0KTtcclxufSkoKTsiXSwiZmlsZSI6ImNhbnZhbnMtcmluZ3MuanMifQ==
