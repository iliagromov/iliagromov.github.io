(() => {
    const cnv = document.querySelector('canvas');
    const ctx = cnv.getContext('2d');

    const numberOfRings = 3;
    const ringRadiusOffset = 10;
    let ringRadius = 325;
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
        
        if(cnv.height <= 700){
            ringRadius = 280;
        }
        else if(cnv.height <= 750){
            ringRadius = 290;
        }
        else if(cnv.height <= 800){
            ringRadius = 300;
        }
        else{
            ringRadius = 325;
        }
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjYW52YW5zLXJpbmdzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIigoKSA9PiB7XHJcbiAgICBjb25zdCBjbnYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKTtcclxuICAgIGNvbnN0IGN0eCA9IGNudi5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgIGNvbnN0IG51bWJlck9mUmluZ3MgPSAzO1xyXG4gICAgY29uc3QgcmluZ1JhZGl1c09mZnNldCA9IDEwO1xyXG4gICAgbGV0IHJpbmdSYWRpdXMgPSAzMjU7XHJcbiAgICBjb25zdCB3YXZlT2Zmc2V0ID0gMTU7XHJcbiAgICBjb25zdCBjb2xvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGhlbWUtY29sb3InKTtcclxuICAgIGxldCBzdGFydEFuZ2xlID0gMDtcclxuXHJcbiAgICBjb25zdCBtYXhXYXZlc0FtcGxpdHVkZSA9IDE3O1xyXG4gICAgY29uc3QgbnVtYmVyT2ZXYXZlcyA9IDc7XHJcblxyXG4gICAgbGV0IGNlbnRlclg7XHJcbiAgICBsZXQgY2VudGVyWTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgICAgIC8vIGNudi53aWR0aCA9IGlubmVyV2lkdGgtNTtcclxuICAgICAgICBjbnYud2lkdGggPSBjbnYub2Zmc2V0UGFyZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgICAgIGNudi5oZWlnaHQgPSBpbm5lckhlaWdodCAtIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKS5vZmZzZXRIZWlnaHQgKiAyO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGNudi5oZWlnaHQgPD0gNzAwKXtcclxuICAgICAgICAgICAgcmluZ1JhZGl1cyA9IDI4MDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihjbnYuaGVpZ2h0IDw9IDc1MCl7XHJcbiAgICAgICAgICAgIHJpbmdSYWRpdXMgPSAyOTA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoY252LmhlaWdodCA8PSA4MDApe1xyXG4gICAgICAgICAgICByaW5nUmFkaXVzID0gMzAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICByaW5nUmFkaXVzID0gMzI1O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjZW50ZXJYID0gY252LndpZHRoIC8gMjtcclxuICAgICAgICBjZW50ZXJZID0gY252LmhlaWdodCAvIDI7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGluaXQoKTtcclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVSaW5ncygpIHtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZSaW5nczsgaSsrKXtcclxuICAgICAgICAgICAgbGV0IHJhZGl1cyA9IGkgKiByaW5nUmFkaXVzT2Zmc2V0ICsgcmluZ1JhZGl1cztcclxuICAgICAgICAgICAgbGV0IG9mZnNldEFuZ2xlID0gaSAqIHdhdmVPZmZzZXQgKiBNYXRoLlBJIC8gMTgwO1xyXG4gICAgICAgICAgICBkcmF3UmluZyhyYWRpdXMsIGNvbG9yc1tpXSwgb2Zmc2V0QW5nbGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdGFydEFuZ2xlID49IDM2MCA/IHN0YXJ0QW5nbGUgPSAwIDogc3RhcnRBbmdsZSsrO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRyYXdSaW5nKHJhZGl1cywgY29sb3IsIG9mZnNldEFuZ2xlKXtcclxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGNvbG9yKS5jb2xvcjtcclxuICAgICAgICBjdHgubGluZVdpZHRoID0gMTE7XHJcblxyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgZm9yKCBsZXQgaiA9IC0xODA7IGogPCAxODA7IGorKyl7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50QW5nbGUgPSAoaiArIHN0YXJ0QW5nbGUpICogTWF0aC5QSSAvIDE4MDsgXHJcbiAgICAgICAgICAgIGxldCBkaXNwbGFjZW1lbnQgPSAwOyBcclxuICAgICAgICAgICAgbGV0IG5vdyA9IE1hdGguYWJzKGopO1xyXG4gICAgICAgICAgICBpZihub3cgPiA3MCApe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxhY2VtZW50ID0gKG5vdyAtIDcwKSAvIDcwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGRpc3BsYWNlbWVudCA+PSAxICl7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGFjZW1lbnQgPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCB3YXZlQW1wbGl0dWRlID0gcmFkaXVzICsgZGlzcGxhY2VtZW50ICogTWF0aC5zaW4oKGN1cnJlbnRBbmdsZSArIG9mZnNldEFuZ2xlKSAgKiBudW1iZXJPZldhdmVzKSAqIG1heFdhdmVzQW1wbGl0dWRlO1xyXG4gICAgICAgICAgICBsZXQgeCA9IGNlbnRlclggKyBNYXRoLmNvcyhjdXJyZW50QW5nbGUpICogd2F2ZUFtcGxpdHVkZTtcclxuICAgICAgICAgICAgbGV0IHkgPSBjZW50ZXJZICsgTWF0aC5zaW4oY3VycmVudEFuZ2xlKSAqIHdhdmVBbXBsaXR1ZGU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBqID4gLTE4MCA/IGN0eC5saW5lVG8oeCwgeSkgOiBjdHgubW92ZVRvKHgsIHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxvb3AoKSB7XHJcbiAgICAgICAgLy8gY252LndpZHRoID0gMDsgIC8vIFxyXG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY252LndpZHRoLCBjbnYuaGVpZ2h0KTtcclxuICAgICAgICB1cGRhdGVSaW5ncygpO1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcclxuICAgIH1cclxuICAgIGxvb3AoKTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaW5pdCk7XHJcbn0pKCk7Il0sImZpbGUiOiJjYW52YW5zLXJpbmdzLmpzIn0=
