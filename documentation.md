1. kreiramo react jsx aplikaciju - npx create-react-app 
2. brisemo nepotrebne fajlove
3. instaliramo embla paket u terminalu - npm install embla-carousel-react --save
4. kreiramo components folder
5. unutar components foldera kreiramo EmblaCarousel.jsx komponentu
6. unutar EmblaCarousel.jsx komponente kopiramo kod sa stranice 
7. EmblaCarousel.jsx komponentu importujemo unutar App.js fajla
8. u EmblaCarouse.jsx komponenti dodajemo img elemente unutar div elemenata sa klasom embla_slide
9. dodajemo css kod za embla carousel
10. u terminalu instaliramo autoplay plugin za embla carousel - npm install embla-carousel-autoplay --save
11. kreiramo EmblaCarousel2.jsx komponentu unutar koje se nalazi Autoplay plugin
12. u EmblaCarousel2 komponenti mozem oumjesto loop: false  da npravimo izmjenu i napisemo loop: true


Github pages:

1. npm i gh-pages --save-dev
2. package.json -> "homepage": "https://kimamovic21.github.io/image-carousel-embla-reactjs-cc-2023"
3. package.json -> "predeploy": "npm run build"
4. package.json -> "deploy": "gh-pages -d build"
5. git remote add origin  https://github.com/kimamovic21/image-carousel-embla-reactjs-cc-2023.git
6. npm run deploy
