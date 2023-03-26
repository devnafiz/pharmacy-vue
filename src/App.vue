<template>
   <div>
       <Login></Login>
       <div class="toasts">
         <TheToast
           v-for="(toast, i) in toasts"
           :toastType="toast.type" 
           :message="toast.message"
         ></TheToast>
         
       </div>
      
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
</style>