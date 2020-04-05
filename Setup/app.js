new Vue({
  el: ('#app'),
  data:{
    healthCounterHero:100,
    healthCounterMonster:100,
    attack:false,
    special:false,
    heal:false,
    showBar:false,
    showBarStart:true,
    logs:[]
  },
  methods:{
    start:function(){
      this.showBar = true;
      this.showBarStart = false;
    },
    reset:function(){
      this.healthCounterHero = 100;
      this.healthCounterMonster = 100;
      this.showBar = false;
      this.showBarStart = true;
      this.logs=[];
    },
    giveUp:function(){
      this.reset();
    },
    attackFunc:function() {
      this.healthCounterHero -= 5;
      this.healthCounterMonster -= 7;
      this.logs.push("Monster attacked you loose 5");
      this.logs.push("You attacked monster loose 7");
    },
    specialAttackFunc:function() {
      this.healthCounterHero -= 15;
      this.healthCounterMonster -= 20;
      this.logs.push("Monster attacked you loose 15");
      this.logs.push("You attacked monster loose 20");
    },
    healFunc:function() {
      this.healthCounterHero += 2;
      this.healthCounterMonster -= 5;
      this.logs.push("Monster attacked you loose 5");
      this.logs.push("You healed by 7");
    }
  },
  computed:{
    heroBar:function() {
      return {
        width:this.healthCounterHero + "%"
      }
    },
    monsterBar:function() {
       return {
         width:this.healthCounterMonster + "%"
       }
    }
  },
  watch:{
    healthCounterMonster: function(healthCounterMonster){
      if(this.healthCounterMonster <= 0 ){
        alert("Congratulations you won!!!");
        this.reset();
        }
      }
    }
}
)
