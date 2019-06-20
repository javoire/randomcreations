// const element = document.querySelector.bind(document);
// const $body = document.body;
// const $home = element('.home');
// const lightboxLayout =
//   '<div class="lightbox-layout grow scalable"><button class="lightbox-close">close</button>---content---</div>';

// async function loadCreationArticle(creation) {
//   const creationArticleContent = await fetch(`/c/${creation}.html`);
//   return creationArticleContent.text();
// }

// const router = new Navigo(null, true);

// router
//   .on('/c/:creation', async function(params) {
//     const creationArticle = await loadCreationArticle(params.creation);
//     const creationLightbox = lightboxLayout.replace('---content---', creationArticle);
//     const c = $(creationLightbox)[0];
//     $body.appendChild(c);
//     $body.classList.add('no-scroll');
//     $home.classList.add('shrink');

//     setTimeout(function() {
//       c.classList.remove('grow');
//     }, 10);
//     element('.lightbox-close').addEventListener('click', function clickClose() {
//       router.navigate('/');
//     });
//   })
//   .notFound(function() {
//     $body.classList.remove('no-scroll');
//     $home.classList.remove('shrink');
//     const lightbox = element('.lightbox-layout');
//     if (lightbox) {
//       lightbox.remove();
//     }
//   })
//   .resolve();
