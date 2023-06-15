const canvasdiv = document.getElementById("canvaDiv");
        const canvas = document.getElementById("canvas");
        const resetBtn = document.getElementById("resetBtn");
        const saveBtn = document.getElementById("saveBtn");
        var count = 1;
        
        function imgClick(imgSrc){
            const imgWrapper = document.createElement("div");
            const delBtn = document.createElement("button");
            const rotBtn = document.createElement("button");
            const img = document.createElement("img");
            imgWrapper.className = "char"
            imgWrapper.id = count;
            count += 1;
            imgWrapper.style.position = "absolute";
            imgWrapper.style.width = "20%";
            imgWrapper.style.top = "60px";
            imgWrapper.style.left = "380px";
            imgWrapper.style.padding = "15px";
            imgWrapper.style.border = "2px solid rgba(100, 131, 107, 1)";
            delBtn.style.position = "relative"
            delBtn.style.top = "-35px";
            delBtn.style.left = "-35px";
            delBtn.style.width = "40px";
            delBtn.style.height = "40px";
            delBtn.style.borderRadius = "25px";
            delBtn.style.border = "none";
            delBtn.style.backgroundImage = "url(\"button/delBtn.png\")"
            delBtn.style.backgroundSize = "contain"
            rotBtn.style.position = "relative"
            rotBtn.style.top = "-35px";
            rotBtn.style.right = "-165px";
            rotBtn.style.width = "40px";
            rotBtn.style.height = "40px";
            rotBtn.style.rotate = "220deg"
            rotBtn.style.borderRadius = "25px";
            rotBtn.style.border = "none";
            rotBtn.style.backgroundImage = "url(\"button/rotBtn.png\")"
            rotBtn.style.backgroundSize = "contain"
            img.src = imgSrc;
            img.style.width = "100%";

            canvas.appendChild(imgWrapper);
            imgWrapper.appendChild(delBtn);
            imgWrapper.appendChild(rotBtn);
            imgWrapper.appendChild(img);
        }

        // 이동 func
        // canvas.addEventListener("mousedown", dragStart, false);
        // canvas.addEventListener("mouseup", dragEnd, false);
        // canvas.addEventListener("mousemove", drag, false);

        // var active = false;
        // var currentX;
        // var currentY;
        // var initialX;
        // var initialY;
        // var xOffset = 0;
        // var yOffset = 0;

        // container.addEventListener("touchstart", dragStart, false);
        // container.addEventListener("touchend", dragEnd, false);
        // container.addEventListener("touchmove", drag, false);

        // container.addEventListener("mousedown", dragStart, false);
        // container.addEventListener("mouseup", dragEnd, false);
        // container.addEventListener("mousemove", drag, false);

        // function dragStart(e) {
        //     if (e.type === "touchstart") {
        //         initialX = e.touches[0].clientX - xOffset;
        //         initialY = e.touches[0].clientY - yOffset;
        //     } else {
        //         initialX = e.clientX - xOffset;
        //         initialY = e.clientY - yOffset;
        //     }

        //     if (e.target === dragItem) {
        //         active = true;
        //     }
        // }

        // function dragEnd(e) {
        //     initialX = currentX;
        //     initialY = currentY;

        //     active = false;
        // }

        // function drag(e) {
        //     if (active) {

        //         e.preventDefault();

        //         if (e.type === "touchmove") {
        //             currentX = e.touches[0].clientX - initialX;
        //             currentY = e.touches[0].clientY - initialY;
        //         } else {
        //             currentX = e.clientX - initialX;
        //             currentY = e.clientY - initialY;
        //         }

        //         xOffset = currentX;
        //         yOffset = currentY;

        //         setTranslate(currentX, currentY, dragItem);
        //     }
        // }

        // function setTranslate(xPos, yPos, el) {
        //     el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
        // }
        // 2안
        // const charSection = document.querySelectorAll(".char");

        // const moveContainer = (e) => {
        //     if (!e.target.class.contains("char")) return;
        //     let shiftX = e.clientX - e.target.getBoundingClientRect().left;
        //     let shiftY = e.clientY - e.target.getBoundingClientRect().top;

        //     e.target.style.position = 'absolute';
        //     e.target.style.zIndex = 1000;
        //     canvas.append(e.target);

        //     moveAt(e.pageX, e.pageY);

        //     function moveAt(pageX, pageY) {
        //         e.target.style.left = pageX - shiftX + 'px';
        //         e.target.style.top = pageY - shiftY + 'px';
        //     }

        //     function onMouseMove(event) {
        //         moveAt(event.pageX, event.pageY);

        //         e.target.hidden = true;
        //         let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        //         e.target.hidden = false;

        //     }

        //     canvasdiv.addEventListener('mousemove', onMouseMove);
        //     e.target.onmouseup = function(){
        //         canvasdiv.removeEventListener('mousemove', onMouseMove);
        //         e.target.onmouseup = null;
        //     };
        // };

        // canvasdiv.ondragstart = function(){
        //     return flase;
        // }

        // canvasdiv.addEventListener('mousedown', moveContainer);
        
        import html2canvas from './node_modules/html2canvas'
        resetBtn.addEventListener("click", () => {canvas.innerHTML = "";})
        saveBtn.addEventListener("click", saveData);

        function saveData() {
            html2canvas(canvas).then(canvas => {
                const frame = canvas.toDataURL("img/png")
            })
            localStorage.setItem('frameImg', frame);
            print('do')
            location.href='cam.html'
        }