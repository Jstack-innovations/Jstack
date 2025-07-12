 //-----------------STICKY NAV----------
 const topContainer = document.getElementById('topContainer');  
    const bottomWrapper = document.getElementById('bottomWrapper');  
    const navWrapper = document.getElementById('navWrapper');  
  
    topContainer.addEventListener('click', (e) => {  
      e.stopPropagation();  
      topContainer.classList.toggle('shrink');  
      bottomWrapper.classList.toggle('show');  
    });  
  
    document.addEventListener('click', (e) => {  
      if (!navWrapper.contains(e.target)) {  
        topContainer.classList.remove('shrink');  
        bottomWrapper.classList.remove('show');  
      }  
    });  
//‐--------------------END STICKY NAV ----------    
    
    
 //----------------- HERO SECTION----------------
   const containers = [
    document.getElementById('img1'),
    document.getElementById('img2'),
    document.getElementById('img3'),
    document.getElementById('img4')
  ];

  // Helper: reset all containers to initial states
  function resetContainers() {
    containers.forEach((c, i) => {
      c.style.opacity = '1';
      c.style.zIndex = 10 + i;
      c.className = 'img-container';
      // Position and size
      if(i===0) {
        c.style.top = '40px'; c.style.left = '40px';
        c.style.bottom = ''; c.style.right = '';
        c.style.width = '180px'; c.style.height = '130px';
      } else if(i===1) {
        c.style.top = '60px'; c.style.right = '40px';
        c.style.left = ''; c.style.bottom = '';
        c.style.width = '130px'; c.style.height = '100px';
      } else if(i===2) {
        c.style.bottom = '40px'; c.style.left = '60px';
        c.style.top = ''; c.style.right = '';
        c.style.width = '220px'; c.style.height = '160px';
      } else if(i===3) {
        c.style.bottom = '60px'; c.style.right = '60px';
        c.style.top = ''; c.style.left = '';
        c.style.width = '150px'; c.style.height = '120px';
      }
      // Caption reset
      const caption = c.querySelector('.caption');
      caption.style.opacity = '1';
      caption.style.fontSize = '1.1rem';
      caption.style.fontWeight = '600';
      caption.classList.remove('fade-away', 'grow-center');
    });
  }

  let current = 0;

  function animateCycle() {
    resetContainers();

    // Step 1: all images move & shrink center
    containers.forEach(c => {
      c.style.top = '50%';
      c.style.left = '50%';
      c.style.bottom = '';
      c.style.right = '';
      c.style.width = '120px';
      c.style.height = '90px';
      c.style.transform = 'translate(-50%, -50%)';
      c.style.opacity = '1';
      c.style.zIndex = '15';
      // Caption smaller fade
      const caption = c.querySelector('.caption');
      caption.classList.remove('grow-center');
      caption.style.opacity = '0.8';
      caption.style.fontSize = '1rem';
    });

    // Step 2: after 2s fade 3 away, keep current grow big
    setTimeout(() => {
      containers.forEach((c, i) => {
        const caption = c.querySelector('.caption');
        if (i !== current) {
          c.style.opacity = '0';
          caption.classList.add('fade-away');
          c.style.zIndex = '5';
        } else {
          // grow center
          c.style.width = '320px';
          c.style.height = '240px';
          c.style.zIndex = '30';
          // caption grows
          caption.classList.add('grow-center');
          caption.style.opacity = '1';
        }
      });
    }, 2000);

    // Step 3: custom animation per image start (after 4s)
    setTimeout(() => {
      const c = containers[current];
      const caption = c.querySelector('.caption');

      // Reset transform so we can animate next
      c.style.transition = 'all 1.5s ease';
      caption.style.transition = 'all 1.5s ease';

      if (current === 0) {
        // slide top-left and smaller
        c.style.top = '40px';
        c.style.left = '40px';
        c.style.width = '180px';
        c.style.height = '130px';
        c.style.transform = 'scale(1)';
        c.style.opacity = '1';
        caption.classList.remove('grow-center');
        caption.style.opacity = '1';
        caption.style.fontSize = '1.1rem';

      } else if (current === 1) {
        // appear from bottom-left and fade away
        c.style.bottom = '40px';
        c.style.left = '40px';
        c.style.top = '';
        c.style.right = '';
        c.style.width = '140px';
        c.style.height = '105px';
        c.style.transform = 'scale(1)';
        c.style.opacity = '1';
        caption.classList.remove('grow-center');
        caption.style.opacity = '1';
        caption.style.fontSize = '1.1rem';

      } else if (current === 2) {
        // special 3rd image fadeInGrowSlide animation
        c.style.top = '50%';
        c.style.left = '50%';
        c.style.bottom = '';
        c.style.right = '';
        c.style.width = '220px';
        c.style.height = '160px';
        c.style.opacity = '1';
        c.style.zIndex = '40';
        c.style.animation = 'fadeInGrowSlide 4s forwards';

        caption.style.opacity = '1';
        caption.style.fontSize = '1.4rem';
        caption.style.fontWeight = '700';

        // Remove animation after complete to reset
        setTimeout(() => {
          c.style.animation = '';
          caption.style.opacity = '0';
        }, 4000);

        return; // skip rest because of animation

      } else if (current === 3) {
        // slide top-right, normal size
        c.style.top = '40px';
        c.style.right = '40px';
        c.style.left = '';
        c.style.bottom = '';
        c.style.width = '130px';
        c.style.height = '100px';
        c.style.transform = 'scale(1)';
        c.style.opacity = '1';
        caption.classList.remove('grow-center');
        caption.style.opacity = '1';
        caption.style.fontSize = '1.1rem';
      }
    }, 4000);

    // Step 4: fade out and move to next image
    setTimeout(() => {
      const c = containers[current];
      const caption = c.querySelector('.caption');
      c.style.opacity = '0';
      caption.style.opacity = '0';

      current = (current + 1) % containers.length;
      setTimeout(() => {
        animateCycle();
      }, 1000);
    }, 7500);
  }

  setTimeout(animateCycle, 1500);
  
  
  const backgroundSlices = document.querySelectorAll('.bg-slice');
const bgImages = [
  'imgg/bg1.jpg',
  'imgg/bg2.jpg',
  'imgg/bg3.jpg',
  'imgg/bg4.jpg',
  'imgg/bg5.jpg'
];

function randomizeBackgrounds() {
  backgroundSlices.forEach((slice) => {
    const randomImage = bgImages[Math.floor(Math.random() * bgImages.length)];
    slice.style.backgroundImage = `url('${randomImage}')`;
 });
}

// Change backgrounds every 15 seconds
setInterval(() => {
  randomizeBackgrounds();
}, 2000);

//---------------END HERO SECTION--------------

//------------------ABOUT US------------------
const scrollImage = document.getElementById("scrollImage");
  const defaultImage = document.getElementById("defaultImage");
  const imageText = document.getElementById("imageText");

  window.addEventListener("scroll", () => {
    const rect = scrollImage.getBoundingClientRect();
    const inView = rect.top < window.innerHeight * 0.8;

    if (inView) {
      scrollImage.classList.add("active");
      defaultImage.classList.add("hide");

      if (imageText) {
        imageText.classList.add("active");
      }
    } else {
      scrollImage.classList.remove("active");
      defaultImage.classList.remove("hide");

      if (imageText) {
        imageText.classList.remove("active");
      }
    }
  });
  //---------------END ABOUT US-------------
  //--------------NEUTRALY STYLING ABOUT US DEFAULT MGE----
  const faders = document.querySelectorAll('.f-in');

  function checkFadeIn() {
    faders.forEach(el => {
      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight - 100 && rect.bottom > 0;

      if (inView) {
        el.classList.add('visible');
      } else {
        el.classList.remove('visible'); // Remove class to reverse animation
      }
    });
  }

  window.addEventListener('scroll', checkFadeIn);
  window.addEventListener('load', checkFadeIn);
//-------------END NEUTRAL STYLING---------
  
  //-----------------SERVICE STAMP SECTION-----------
   const boxes = document.querySelectorAll('.stamp-box');

    boxes.forEach((box, index) => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, index * 120);
          } else {
            entry.target.classList.remove('visible');
          }
        });
      }, { threshold: 0.3 });

      observer.observe(box);
    });
  //------------------END SERVICE STAMPING SECTION------
  
  //-----------------360 DEGREES IMAGE ROTATION------
   const rotateImage = document.getElementById("rotateImage");

  window.addEventListener("scroll", () => {
    const rect = rotateImage.getBoundingClientRect();
    const inView = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;

    if (inView) {
      rotateImage.classList.add("active");
    } else {
      rotateImage.classList.remove("active"); // stops animation
    }
  });
  //-----------------END 360 DEGREES IMAGE ROTATION----
  
  //------------------TOTAL SECTIONS-----------
  document.addEventListener('DOMContentLoaded', () => {
      const sections = document.querySelectorAll('.floating-section');

      window.addEventListener('scroll', () => {
        let maxVisibleHeight = -1;
        let activeSection = null;

        sections.forEach(section => {
          const rect = section.getBoundingClientRect();
          const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

          // Check visibility
          if (visibleHeight > maxVisibleHeight && visibleHeight > 0) {
            maxVisibleHeight = visibleHeight;
            activeSection = section;
          }

          // Reset section style
          section.classList.remove('in-view');
          section.style.zIndex = 1;
        });

        if (activeSection) {
          activeSection.classList.add('in-view');
        }
      });

      // Reset transform if hover ends and not in view
      sections.forEach(section => {
        section.addEventListener('mouseleave', () => {
          if (!section.classList.contains('in-view')) {
            section.style.transform = 'translate(0, 0)';
            section.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
            section.style.zIndex = 1;
          }
        });
      });
    });
  //----------------------END TOTAL SECTION------
  
  //---------------PLAN SECTION----------
  const cards = document.querySelectorAll('.plan-card');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible'); // optional: for reverse animation
      }
    });
  }, {
    threshold: 0.1
  });

  cards.forEach(card => {
    observer.observe(card);
  });
  //---------------END PLAN SECTION----------
  
  //-----------------ZOOM COURSES SECTION---------
   const section = document.querySelector('.courses-section');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        section.classList.add('zoomed');
      } else {
        section.classList.remove('zoomed');
      }
    });
  }, { threshold: 0.2 });

  sectionObserver.observe(section); 
  //--------------END COURSES SECTION--------
  
   //---------PREVIEW YOUR PROFIT------------
   
    const startSlider = document.getElementById("start");
    const monthlySlider = document.getElementById("monthly");
    const yearsSlider = document.getElementById("years");

    const startValue = document.getElementById("startValue");
    const monthlyValue = document.getElementById("monthlyValue");
    const yearValue = document.getElementById("yearValue");

    const investedResult = document.getElementById("investedResult");
    const notInvestedResult = document.getElementById("notInvestedResult");

    function formatCurrency(num) {
      return num.toLocaleString('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      });
    }

    function calculateGrowth() {
      const start = parseFloat(startSlider.value);
      const monthly = parseFloat(monthlySlider.value);
      const years = parseInt(yearsSlider.value);

      const annualReturnRate = 0.07; // 7% average annual return
      const months = years * 12;

      // Compounded formula
      let futureValue = start * Math.pow(1 + annualReturnRate, years);
      for (let i = 1; i <= months; i++) {
        futureValue += monthly * Math.pow(1 + annualReturnRate, (months - i) / 12);
      }

      const notInvested = start + (monthly * months);

      startValue.textContent = formatCurrency(start);
      monthlyValue.textContent = formatCurrency(monthly);
      yearValue.textContent = years;

      investedResult.textContent = formatCurrency(futureValue);
      notInvestedResult.textContent = formatCurrency(notInvested);
    }

    // Event listeners
    [startSlider, monthlySlider, yearsSlider].forEach(slider => {
      slider.addEventListener("input", calculateGrowth);
    });

    // Initial calculation
    calculateGrowth();

   
   //---------END PREVIEW YOUR PROFIT------------
   
   //-------MONEY STORIES-----------
   
   const videos = [
    {
      thumbnail: "imgg/story1mge.jpg",
      video: "imgg/story1.mp4",
      quote: "INVESTING TO ME IS ABOUT THE OPPORTUNITY TO HAVE FREEDOM AND FUN IN THE FUTURE"
    },
    {
      thumbnail: "imgg/story2mge.jpg",
      video: "imgg/story2.mp4",
      quote: "FINANCIAL INDEPENDENCE IS BEING ABLE TO CHOOSE THE LIFE I WANT"
    },
    {
      thumbnail: "imgg/story3mge.jpg",
      video: "imgg/story3.mp4",
      quote: "I INVEST TO CREATE A LEGACY FOR MY CHILDREN"
    },
    {
      thumbnail: "imgg/story4mge.jpg",
      video: "imgg/story4.mp4",
      quote: "MONEY GIVES ME CONFIDENCE TO TAKE RISKS IN LIFE"
    }
  ];

  const track = document.getElementById("sliderTrack");

  function createCard(item) {
    const card = document.createElement("div");
    card.className = "story-card";
    card.innerHTML = `
      <img src="${item.thumbnail}" class="story-thumbnail" alt="Thumbnail">
      <div class="play-button">&#9658;</div>
      <div class="story-text">"${item.quote}"</div>
    `;
    card.onclick = () => openModal(item.video);
    return card;
  }

  // Append two copies for seamless loop
  [...videos, ...videos].forEach(item => {
    track.appendChild(createCard(item));
  });

  function openModal(videoSrc) {
    const modal = document.getElementById("videoModal");
    const video = document.getElementById("storyVideo");
    const source = document.getElementById("videoSource");
    modal.style.display = "flex";
    source.src = videoSrc;
    video.load();
    video.play();
  }

  function closeModal() {
    const modal = document.getElementById("videoModal");
    const video = document.getElementById("storyVideo");
    modal.style.display = "none";
    video.pause();
    video.currentTime = 0;
  }

   
   //---------END MONEY STORIES---------
   
  //----------GLOBAL COVERAGE----------
  
   function handleMapFade() {
    const mapSection = document.querySelector('.fade-map');
    const rect = mapSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      mapSection.classList.add('visible');
    } else {
      mapSection.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', handleMapFade);
  window.addEventListener('load', handleMapFade);
//----------------------
  function handleSlideFade() {
    const elements = document.querySelectorAll('.slide-fade');
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('visible');
      } else {
        el.classList.remove('visible'); // Reverses when out of viewport
      }
    });
  }

  window.addEventListener('scroll', handleSlideFade);
  window.addEventListener('load', handleSlideFade);
  
  //-----------END GLOBAL COVERAGE---------
  
  //--------FAQ--------
  
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
      item.querySelector('.faq-question').addEventListener('click', () => {
        item.classList.toggle('active');
      });
    });
    
//-------END FAQ------------

//--------------CONTACT US---------

 const form = document.getElementById('contactForm');
    const popup = document.getElementById('popupMessage');

    form.addEventListener('submit', function(e) {
      e.preventDefault(); // prevent actual submission
      popup.style.display = 'block';

      setTimeout(() => {
        popup.style.display = 'none';
        form.reset();
      }, 4000);
    });
    
    
  