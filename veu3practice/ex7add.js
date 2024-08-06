const {createApp} = Vue;

createApp({
    data(){
        return{
            list: ['플랫화이트', '오렌지쥬스', '밀크티', '콜드브루'],
            objArr: [
                {site: '경주', taketime: '4시간'},
                {site: '통영', taketime: '5시간반'},
                {site: '청주', taketime: '2시간'},
            ],
            myArr: ['일', '이', '삼', '사', '오'],
            numArr: [1, 2, 3, 4, 5],
        }
    },
    methods: {
        addList(){
            this.myArr.push('추가');
        },
        addListIndex(arg){
            this.myArr.splice(arg, 0, '삽입'); //배열요소를 제거하고 새 요소로 대체
        },
        changeList(arg){
            this.myArr.splice(arg, 1, '수정');
        },
        deleteList(arg){
            this.myArr.splice(arg, 1);
        }
        
    },
}).mount('#app');