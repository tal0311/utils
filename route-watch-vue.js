 watch: {
        $route: {
            handler(newValue, oldValue) {
               console.log(newValue)
               console.log(oldValue)
            },
            deep: true
        }
    }
