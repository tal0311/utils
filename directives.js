import { svgService } from './services/svg.service'

const edit = {
  mounted: (el, binding) => {
    el.setAttribute('contenteditable', binding.value)
  },
  updated: (el, binding) => {
    el.setAttribute('contenteditable', binding.value)
  },
}

const icon = {
  mounted: (el, binding) => {
    const icon = svgService.getSvg(binding.value)
    el.innerHTML = icon
  },
}


const clickOutside = {
  mounted(el, { value: cb }) {
    el.clickOutside = (ev) => {
      if (!el.contains(ev.target)) {
        cb()
        console.log('closing')
      }
    }
    setTimeout(() => {
      document.addEventListener('click', el.clickOutside)
    }, 0)
  },
  unmounted(el) {
    document.removeEventListener('click', el.clickOutside)
  },
}

/*

    v-throttle Directive

        v-throttle:eventname.duration="handler" 

        This will throttle the { handler } for { eventname } 
        calling it a maximum of once every { duration } ms.

        i.e. v-throttle:mousemove.500="onMouseMove"
        will call onMouseMove when mousemove events occur
        but not more than once every 500ms.

*/

export const throttle = {
    mounted(el, binding){
        _setHandler(binding)
    },
    unmounted(el, binding){
        _removeHandler(binding)
    },
}

function _setHandler({ value: handler, arg, modifiers, dir }){
    
    if(!handler) return 
    const limit = +Object.keys(modifiers)[0]

    if(isNaN(limit)) return

    dir._handler = _throttle(handler, limit)
    dir._trackedEvent = arg

    window.addEventListener(arg, dir._handler)
}

function _removeHandler({ modifiers, dir }){
    window.removeEventListener(dir._trackedEvent, dir._handler)

    delete dir._handler
    delete dir._trackedEvent
}

function _throttle(func, limit) {

    let inThrottle
    return function () {
        const args = arguments
        const context = this
        
        if (!inThrottle) {
            func.apply(context, args)
            inThrottle = true
            setTimeout(() => (inThrottle = false), limit)
        }
    }
}

/*

    v-debounce Directive

        v-debounce:eventname.duration="handler" 

        This will debounce the { handler } for { eventname } 
        calling it only after { duration } ms have passed
        since it was last requested.

        i.e. v-throttle:mousemove.500="onMouseMove"
        will call onMouseMove when a mousemove event
        has not re-occured for 500ms.

*/

export const debounce = {
    mounted(el, binding){
        _setHandler(binding)
    },
    unmounted(el, binding){
        _removeHandler(binding)
    },
}

function _setHandler({ value: handler, arg, modifiers, dir }){
    
    if(!handler) return 
    const wait = +Object.keys(modifiers)[0]

    if(isNaN(wait)) return

    dir._handler = _debounce(handler, wait)
    dir._trackedEvent = arg

    window.addEventListener(arg, dir._handler)
}

function _removeHandler({ modifiers, dir }){
    window.removeEventListener(dir._trackedEvent, dir._handler)

    delete dir._handler
    delete dir._trackedEvent
}

function _debounce(func, wait) {
    let timer

    return function (...args) {
        if (timer) {
            clearTimeout(timer) // clear any pre-existing timer
        }
        const context = this // get the current context
        timer = setTimeout(() => {
            func.apply(context, args) // call the function if time expires
        }, wait)
    }
}

export { edit, icon , clickOutside, throttle, debounce}
