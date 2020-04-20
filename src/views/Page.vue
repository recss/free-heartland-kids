<!-- Create file src/views/Page.vue -->

<template>
  <article class="dsa-page">

    <h2 class="dsa-title">
      {{ $prismic.richTextAsPlain(fields.title) }}
    </h2>

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
						console.log(document);

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
    this.getContent(this.$route.params.uid)
  },
  beforeRouteUpdate (to, from, next) {
    this.getContent(to.params.uid)
    next()
  }
}
</script>

<style>
.dsa-page {
  min-height: calc(100vh - 200px);
  max-width: 1000px;
  margin: -50px auto 0;
  padding: 2em 1em 5em;
  display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
}

.dsa-page a {
  color: #e1251b;
}

.dsa-title {
  color: rgba(0, 0, 0, 0.25);
  /* align-self: baseline; */
}
</style>