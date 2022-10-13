// Vue3 component

export default {
  name: 'user-msg',
  emits: [],
  props: ['msg'],
  template: `

       <section :class="className">
        <h4>{{msg}}</h4>
       </section>

        `,
  created() {
    setTimeout(this.setClass, 2500, false)
    setTimeout(this.restMsg, 3000)
  },

  updated() {},
  data() {
    return {
      className: 'user-msg open',
    }
  },
  methods: {
    restMsg() {
      this.$store.commit('setUserMsg', { msg: '' })
    },

    setClass(isOpen = true) {
      this.className = `${isOpen ? 'open user-msg' : 'user-msg'}`
    },
  },
}

// CSS
.user-msg {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  background: #333;
  border-radius: 0.4em;
  padding: 0.1rem 2rem;
  transition: 0.3s ease-in-out;
  transform: translateX(150%);
  color: #fff;
  opacity: 0;
}

.user-msg.open {
  opacity: 1;
  transform: translateX(0);
}

