<!-- Create file src/views/Page.vue -->

<template>
  <article class="dsa-page">

    <h2 class="dsa-title">
      {{ $prismic.richTextAsPlain(fields.title) }}
    </h2>

      <prismic-link :field="fields.ctaLink" class="cta">
        {{ $prismic.richTextAsPlain(fields.ctaText) }}
      </prismic-link>

    <prismic-rich-text :field="fields.body" />

    <!-- <prismic-edit-button :documentId="documentId"/> -->

    <!-- <div class="cta-wrapper">
      <prismic-link :field="fields.ctaLink" class="cta">
        {{ $prismic.richTextAsPlain(fields.ctaText) }}
      </prismic-link>
    </div> -->

    <!-- <div class="icon-wrapper">
      <prismic-image :field="fields.icon" class="icon"/>
    </div> -->

  </article>
</template>

<script>
export default {
  name: 'Page',
  data () {
    return {
      documentId: '',
      fields: {
				title: null,
				date: null,
        body: null
      }
    }
  },

  methods: {
    getContent (uid) {
			let vm = this;

      this.$prismic.client.getByUID('pages', uid)
        .then((document) => {
          if (document) {
						console.log('Page.vue', document);

            vm.documentId = document.id;
            vm.fields.title = document.data.title;
            vm.fields.body = document.data.body;

          } else {
            this.$router.push({ name: 'not-found' });
          }
        })
    }
  },

  created () {
    this.getContent(this.$route.params.uid);
  },

  beforeRouteUpdate (to, from, next) {
    this.getContent(to.params.uid)
    next();
  }
}
</script>

<style>
.dsa-page {
  min-height: calc(100vh - 200px);
  max-width: 1000px;
  margin: -50px auto 0;
  padding: 2em 2em 5em;
  display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
}

.dsa-page > * {
  margin: 0 auto;
}

.dsa-page > div:first-of-type {
  width: 760px;
}

.dsa-page a {
  color: #e1251b;
}

.dsa-page a:focus,
.dsa-page a:hover {
  color: hsl(3, 79%, 29%);
}

.dsa-page h3,
.dsa-page h4,
.dsa-page h5,
.dsa-page h6 {
  width: 720px;
  margin: 2em 1em 1em;
}

.dsa-title {
  color: rgba(0, 0, 0, 0.25);
  /* align-self: baseline; */
}

img {
  margin: 2em 0;
  /* box-shadow: 5px 5px 0 0 rgba(0, 0, 0, 0.25); */
}
</style>