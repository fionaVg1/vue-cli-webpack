<template>
    <div class="eightQueue">
        <div class="row" v-for="(row,r_index) in grids" :key="r_index">
            <div class="cell" v-for="(cell,c_index) in row" :key="cell.key" @click.stop="select(r_index,c_index)">
                <div v-if="cell.ok">Q</div>
            </div>
        </div>
    </div>
</template>
<script>
const grids = new Array(8).fill(1).map((rValue,rIndex)=>{
    return new Array(8).fill(1).map((cValue,cIndex)=>{
        return{
            key:`key-${rIndex*8+cIndex}`,
            ok:false
        }
    });
});
export default {
    data(){
        return{
            grids:grids
        }
    },
    methods:{
        select(rIndex,cIndex){
            this.grids[rIndex][cIndex].ok = true;
        }
    }
}
</script>
<style scoped>
.eightQueue{
    width: 400px;
    margin:0 auto;
    margin-top:50px;
    
}
.cell{
    width: 50px;
    height: 50px;
    line-height:50px;
    text-align: center;
    background: #999;
    float: left;
    cursor: pointer;
}
.cell:nth-child(2n){
    background:#efefef;
}
.row{
    height:50px;
    width:400px;
    display: flow-root;
}
.row:nth-child(2n) .cell:nth-child(2n){
    background:#999;
}
.row:nth-child(2n) .cell:nth-child(2n-1){
    background: #efefef;
}
</style>