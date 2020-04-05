new Vue({
        el: "#app",
        data: {
            value: 0,
            result:""
        },
        methods:{
          check: function(step){
            this.value += step;
            this.result = this.value < 37 ? "not there yet": "done";
          }
        },
        watch:{
          value: function(value){
            var vm = this;
            if(this.value >= 37 ){
          setTimeout(function(){
            vm.result = "";
            vm.value = 0;
          }, 5000)
        }
        }
      }
    });
