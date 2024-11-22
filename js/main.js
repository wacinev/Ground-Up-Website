let sectionImgArr = document.querySelectorAll('section img');
		console.log(sectionImgArr.length);
		console.log(sectionImgArr[0]);
		console.log(sectionImgArr);
let sectionTxtArr = document.querySelectorAll('section div')
		console.log(sectionTxtArr.length);
		console.log(sectionTxtArr[0]);
		console.log(sectionTxtArr);

		for(let i=0; i<sectionImgArr.length; i++){
			let img = sectionImgArr[i];
			let txt = sectionTxtArr[i];

			let xStartPos = 200;
			if(i % 2 == 0){
				xStartPos *= -1;
			}
			gsap.from(img, {
				scrollTrigger: {
				trigger: img, start: 'top 85%', end: 'bottom 80%', scrub:1, markers:false,
		 		},
				x:xStartPos, opacity: 0
			});
			gsap.from(txt, {
			scrollTrigger: {
				trigger: txt, start: 'top 85%', end: 'bottom 80%', scrub:1, markers:false,
		 	},
		 		x:-xStartPos, opacity: 0
		});
		}
