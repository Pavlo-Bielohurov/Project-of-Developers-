document.addEventListener('DOMContentLoaded', function () {
  const apiUrl = 'https://portfolio-js.b.goit.study/api/reviews'; 

  fetch(apiUrl)
    .then(response => {
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      return response.json();
    })
    .then(data => {
      if (data.length === 0) throw new Error('Not found');
      renderReviews(data);
      initializeSwiper();
    })
    .catch(error => {
      console.error('Error fetching reviews:', error);
      // Optional: Handle the error display in the HTML
    });

  function renderReviews(reviews) {
    const reviewsContainer = document.querySelector('.reviews-list');
    reviewsContainer.innerHTML = ''; // Clear previous content if any

    reviews.forEach(review => {
      const reviewElement = document.createElement('li');
      reviewElement.classList.add('swiper-slide', 'list-item');
      reviewElement.innerHTML = `
        <img src="${review.avatar_url}" alt="${review.author}'s avatar" class="person-avatar" />
        <p class="person-name">${review.author}</p>
        <p class="person-review">${review.review}</p>
      `;
      reviewsContainer.appendChild(reviewElement);
    });
  }

  function initializeSwiper() {
    const swiperInstance = new Swiper('.swiper-container', {
      slidesPerView: 1,
      navigation: {
        nextEl: '.btn-go-right',
        prevEl: '.btn-go-left',
      },
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1440: {
          slidesPerView: 4,
        },
      },
      on: {
        slideChangeTransitionEnd: function () {
          const { navigation } = this;
          const prevButton = navigation.prevEl;
          const nextButton = navigation.nextEl;

          if (prevButton && nextButton) {
            if (this.isBeginning) {
              prevButton.classList.add('disabled');
              nextButton.classList.remove('disabled');
            } else if (this.isEnd) {
              prevButton.classList.remove('disabled');
              nextButton.classList.add('disabled');
            } else {
              prevButton.classList.remove('disabled');
              nextButton.classList.remove('disabled');
            }
          }
        },
        reachBeginning: function () {
          const { navigation } = this;
          if (navigation.prevEl) {
            navigation.prevEl.classList.add('disabled');
          }
        },
        reachEnd: function () {
          const { navigation } = this;
          if (navigation.nextEl) {
            navigation.nextEl.classList.add('disabled');
          }
        },
      },
    });
  }
});
