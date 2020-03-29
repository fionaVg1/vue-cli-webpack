import vue from 'vue';
export const store = vue.observable({a:123});
export const mutations = {
    changeDep(msg){
        store.a = msg;
    }
}