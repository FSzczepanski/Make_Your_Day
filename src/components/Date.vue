<template>
    <div>
        <div style="display: flex; justify-content: center; overflow: auto; margin-bottom: 10px;">
            <div class="dateElementHour" style="float:left; ">
                <h2 class="txts">{{dateTime.hour1}}</h2>
            </div>
            <div class="dateElementHour" style="float:left; ">
                <h2 class="txts">{{dateTime.hour2}}</h2>
            </div>
            <div class="dateElementHour" style="float:left;margin-left:14px; ">
                <h2 class="txts">{{dateTime.minute1}}</h2>
            </div>
            <div class="dateElementHour" style=" ">
                <h2 class="txts">{{dateTime.minute2}}</h2>
            </div>
        </div>
        <div style="display: flex; justify-content: center; overflow: auto;">
            <div class="dateElementDate">
                <h3 style="font-size: 40px;">{{dateTime.date}}</h3>
            </div>
        </div>
    </div>

</template>
<script>

export default {
  name: "App",
  data() {
    return {
      dateTime: {
         hour1: '',
         hour2: '',
         minute1: '',
         minute2: '',
         date: ''
      },
      timer: undefined,
    };
  },
  methods: {
    setDateTime() {
       var dat = new Date();
                var hours = new Date().getHours().toString();
                var minutes = dat.getMinutes().toString();

                var splitHours = hours.split("");
                if(splitHours.length>1){
                var hours1 = splitHours[0];
                var hours2 = splitHours[1];
                }else{
                    hours1= "0";
                    hours2= splitHours[0];
                }


                var splitMinutes = minutes.split("");
                if(splitMinutes.length>1){
                var minutes1 = splitMinutes[0];
                var minutes2 = splitMinutes[1];
                }else{
                    minutes1= "0";
                    minutes2= splitMinutes[0];
                }

                const monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
                ];

               

                var currentDate = dat.getDay()+9 +" "+ monthNames[dat.getMonth()]+ " "+ dat.getFullYear();
      this.dateTime = {
        hour1: hours1,
         hour2: hours2,
         minute1: minutes1,
         minute2: minutes2,
         date: currentDate
      };
    },
  },
  beforeMount() {
    this.timer = setInterval(this.setDateTime, 1000);
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
};
</script>


<style scoped>
    .weather{
        font-size: 15px;
    }

    .dateElementHour{
        display: flex;
        justify-content: center;
        overflow: auto;
        background: rgba(250,250,250,0.5);
        border-radius: 49px;
        margin:3px;
        height: 90px;
        margin-top: 15px;
        width: 80px;
        padding: 20px;
        font-size: 30px;
    }
    .dateElementDate{
        display: flex;
        justify-content: center;
        overflow: auto;
        background: rgba(250,250,250,0.5);
        border-radius: 49px;
        height: 85px;
        width: 330px auto;
        min-width: 360px;
        float:unset;
        padding: 20px;
        font-size: 50px;
    }
    .txts{
        margin-top:4px;
    }
</style>
