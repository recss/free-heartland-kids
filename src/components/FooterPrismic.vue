<template>
  <footer class="dsa-footer">
    <!-- <a href="https://prismic.io" target="_blank" rel="noopener">
      <img class="logo" src="../assets/img/prismic-logo.svg" alt="Prismic">
    </a> -->

    <a href="mailto:FreeHeartlandKids@gmail.com">
      <svg class="dsa-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
        
        <path fill="none" d="M0 0h24v24H0z"></path>
      </svg>
    </a>

    <a href="https://twitter.com/ChicagoCityDSA" target="_blank">
      <svg class="dsa-icon" stroke="#fff" fill="#fff" stroke-width="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
      </svg>
    </a>

    <a href="https://www.facebook.com/ChicagoDemSocialists/" target="_blank">
      <svg class="dsa-icon" stroke="#fff" fill="#fff" stroke-width="0" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
      </svg>
    </a>

    <a href="https://chicagodsa.org/" target="_blank" class="dsa-made">
      <p>MADE BY</p>
      <p>CHI DSA</p>
    </a>
  </footer>
</template>

<script>
export default {
  name: 'FooterPrismic'
}
</script>

<style scoped>
.dsa-footer {
  height: 75px;
  background-color: #e1251b;
  display: flex;
    justify-content: center;
    align-items: center;
}

.dsa-footer > * {
  height: 100%;
  width: calc(100% / 8);
  fill: #fff;
  display: flex;
    justify-content: center;
    align-items: center;
  transition: 0.25s;
}

.dsa-footer > *:focus,
.dsa-footer > *:hover {
  background-color: rgba(0, 0, 0, 0.25);
}

.dsa-footer .dsa-icon {
  height: 1.5em;
  width: 1.5em;
}

.dsa-footer .dsa-made {
  color: #fff;
  text-decoration: none;
  display: flex;
    flex-flow: column nowrap;
}

#app .dsa-footer .dsa-made p {
  margin-bottom: 0;
  font-size: 0.75em;
}
</style>
