import gsap from "gsap";


class GScroll {
	constructor(option = {}) {
		this.option = {
			el: option.el,
			speed: option.speed / 10 || 0.06,
			isWheeling: null,
			deltaY: 0,
			update: option.onUpdate,
		};
		this.init();
		this.wheel();
	}



	init() {
		this.current = this.scrollTop = 0;
		this.height =
			document.querySelector(this.option.el).clientHeight - window.innerHeight;
		this.deplacement = gsap.quickSetter(this.option.el, "y", "px");
		this.addTicker = () => this.playTicker();
		gsap.ticker.add(this.addTicker);
		gsap.set("body", { overflow: "hidden" }); //  it'll disable default scroll
	}



	playTicker() {
		const dt = 1.0 - Math.pow(1.0 - this.option.speed, gsap.ticker.deltaRatio());

		if (this.scrollTop + this.option.deltaY > this.height) {
			this.scrollTop = this.height;
		} else if (this.scrollTop + this.option.deltaY < 0) {
			this.scrollTop = 0;
		} else if (this.option.deltaY !== 0) {
			this.scrollTop += this.option.deltaY;
		}

		const diff = -this.scrollTop - this.current;
		if (Math.round(100 * diff) / 100 != 0) {
			this.current += diff * dt;
			this.deplacement(this.current);
		}
		this.option.update();
	}



	wheel() {
		window.addEventListener("wheel", (this.ref = (e) => {
			this.option.deltaY = e.deltaY;
			window.clearTimeout(this.option.isWheeling);
			this.option.isWheeling = setTimeout((e) => {
				this.option.deltaY = 0;
			}, 66);
		})
		);
	}



	unwheel() {
		window.removeEventListener("wheel", this.ref);
	}



	resize() {
		this.height =
			document.querySelector(this.option.el).clientHeight - window.innerHeight;
	}



	scrollTo(section, dur) {
		const duration = dur || 1;
		gsap.to(this, {
			scrollTop:
				document.querySelector(section).getBoundingClientRect().top -
				this.current,
			duration,
			ease: "power3.inOut",
		});
	}



	destroy() {
		gsap.killTweensOf(this.option.el);
		window.removeEventListener("wheel", this.ref);
		gsap.ticker.remove(this.addTicker);
	}
}

export { GScroll };

// vite causing issue so export like this
