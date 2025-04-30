            const swiperQuiz = new Swiper(".animeslide", {
                // Optional parameters
                // effect: "fade",
                loop: true,

                autoplay: {

                },
                speed: 1500,
                autoplay: true,
                centeredSlides: true,
                watchSlidesProgress: true,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                    dynamicBullets: true,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });
            const tl = gsap.timeline({
                paused: true
            });
            let path = document.querySelector("path");
            let spanBefore = CSSRulePlugin.getRule("#hamburger .line-2");

            gsap.set(spanBefore, { background: "#000" });
            gsap.set(".menu", { visibility: "hidden" });

            function revealMenu() {
                revealMenuItems();

                const hamburger = document.getElementById("hamburger");
                const toggleBtn = document.getElementById("toggle-btn");

                toggleBtn.onclick = (e) => {
                    hamburger.classList.toggle("active");
                    tl.reversed(!tl.reversed());
                };
                element.style.transition = "0.1s";
                element.style.width = 0;
                alert(123);
                element.style.width = 100;

            }
            revealMenu();

            function revealMenuItems() {
                const start = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
                const end = "M0, 1005S175, 995, 500, 995s500, 5, 500, 5V0H0Z";

                const power2 = "power2.inout";
                const power4 = "power4.inout";

                tl.to("#hamburger", 1.25, {
                    marginTop: "-5px",
                    x: -30,
                    y: 30,
                    ease: power4
                });
                tl.to(
                    "#hamburger .line",
                    1,
                    {
                        background: "#fff",
                        ease: power2
                    },
                    "<"
                );
                tl.to(
                    spanBefore,
                    1,
                    {
                        background: "#fff",
                        ease: power2
                    },
                    "<"
                );

                tl.to(
                    ".btn .btn-outline",
                    1.25,
                    {
                        x: -30,
                        y: 30,
                        width: "80px",
                        height: "80px",
                        border: "1px solid #e2e2dc",
                        ease: power4,

                    },
                    "<"
                );
                tl.to(
                    path,
                    0.8,
                    {
                        attr: {
                            d: start
                        },
                        ease: power2
                    },
                    "<"
                ).to(
                    path,
                    0.8,
                    {
                        attr: { d: end },
                        ease: power2
                    },
                    "-=0.2"
                );

                tl.to(
                    ".menu",
                    1,
                    {
                        visibility: "visible",


                    },
                    "-=0.2"
                );

                tl.to(
                    ".menu-item>a",
                    1,
                    {
                        top: 0,
                        ease: "power3.out",
                        stagger: {
                            amount: 0.2
                        }
                    },
                    "-=1"
                ).reverse();
            }

            // loop through each element
            $(".feature").each(function (i, el) {

                var featureTitle = $(el).find(".featureText strong"),
                    featureText = $(el).find(".featureText cite"),
                    featureReadMore = $(el).find(".featureLink"),
                    featureOthers = $(".feature").not(this).find(".featureText strong")

                // create a timeline for this element in paused state
                var featureHoverTl = new TimelineMax({
                    paused: true
                });

                // create your tween of the timeline in a variable

                let mySplitText = new SplitText(featureText, {
                    type: "words,chars"
                }),
                    chars = mySplitText.chars,
                    t = featureHoverTl

                        .from(chars, {
                            delay: 0.5,
                            duration: 0.5,
                            scale: 1.2,
                            opacity: 0,
                            y: -10,
                            ease: Power2.easeOut,
                            stagger: {
                                from: "random",
                                amount: 0.1
                            }
                        }, 0)

                        .to(featureOthers, {
                            opacity: 0,
                            ease: Power2.easeOut
                        }, 0);

                // store the tween timeline in the javascript DOM node
                //el.animation = t;

                $(el).data('featureHoverTl', t);

                //create the event handler

                $(el).on("mouseenter", function () {

                    gsap.set(featureText, {
                        opacity: 1
                    })

                    $(el).data('featureHoverTl').restart();

                }).on("mouseleave", function () {

                    gsap.to(featureText, .2, {
                        opacity: 0,
                        ease: Power2.easeOut
                    }, 0)

                    $(el).data('featureHoverTl').reverse();

                });

            });
            
            AOS.init();
          
