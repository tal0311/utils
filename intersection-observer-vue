<template>
  <section class="observe"></section>
  <section ref="section" class="observe"></section>
  <section :class="{ sticky: isSticky }" class="observe">
    <h1>sticky</h1>
  </section>
  <section class="observe"></section>
  <section class="observe"></section>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      isSticky: false,
      condition: false,
    }
  },

  mounted() {
    console.log(this.$refs.section)
    this.headerObserver = new IntersectionObserver(this.onHeaderObserved, {
      rootMargin: '150px',
      threshold: 1.0,
    })
    this.headerObserver.observe(this.$refs.section)
  },
  methods: {
    onHeaderObserved(entries) {
      entries.forEach((entry) => {
        console.log(entry.isIntersecting)
        this.isSticky = entry.isIntersecting ? false : true
      })
    },
  },
}
</script>
<style>
.observe {
  text-align: center;
  height: 150px;
  border: 1px solid black;
}
.sticky {
  position: sticky;
  top: 0px;
  background-color: blueviolet;
}
</style>
