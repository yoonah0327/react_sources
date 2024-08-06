(function(){

    const {createApp} = Vue;
    
    createApp({
        data(){
            return{
                name: '',
                java: 0,  //기본값을 0으로 설정
                react: 0,
                vue: 0,
                count:0,
                student : [], 
                sum: 0,
                totalSum:0
    
            }
        },
        methods:{
            onClick(){
                this.count++; // 인원수 
                
                const sum = this.java + this.react + this.vue;
                this.student.push({name:this.name, java:this.java, react:this.react, vue:this.vue, sum: sum})
                
                this.totalSum += sum;

                //입력칸 초기화
                this.name= "";
                this.java= 0;
                this.react= 0;
                this.vue= 0;
               
            }
        }
    }).mount('#app3event');
    
})();
