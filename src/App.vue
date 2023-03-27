<template>
   <div>
       <Login></Login>
       <!-- <div class="toasts"> -->
        <TransitionGroup name="slide-left" tag="div" class="toasts">
         <TheToast
           v-for="(toast, i) in toasts"
           :toastType="toast.type" 
           :message="toast.message"
         ></TheToast>
        </TransitionGroup>
         
       <!-- </div> -->
      
   </div>
</template>

<script>
 import Login from  "./components/Login.vue";
 import TheToast from "./components/TheToast.vue";
export default{
   data:()=>({
           toasts:[
            //{
         //    type:'Success',
         //    message:'Succefully done'

         //  },
         //  {
         //    type:'Error',
         //    message:'Somethinf Wrong '

         //  }
          ]

   }),
  components:{
   Login,TheToast
  },
  mounted(){
    this.$eventBus.on('toast',(data)=>{
      //console.log(data);
      this.toasts.push(data);
      this.removeOneToast();
    })
  },
  methods:{
      removeOneToast(){
      setTimeout(()=>{
         this.toasts.shift();
      },2222)
   }
  }
  
}
</script>

<style>
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.25s ease;
}
.slide-left-enter-from,
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
</style>