<template>
  <div id="app">
    <router-view/>
   <img class="myImg" src="./assets/logo.png" @click="change">
   <!--  <div class="row">
      <div class="row-item">row1</div>
      <div class="row-item">row2</div>
      <div class="row-item">row3</div>
      <div class="row-item">row4</div>
    </div>
    <div class="column">
      <div class="column-item">column1</div>
      <div class="column-item">column2</div>
      <div class="column-item">column3</div>
      <div class="column-item">column4</div>
    </div>
    <div>
      <span>解决高度坍塌问题有3个解决方案：1、加dom元素clear:both  2、利用伪元素::after  3、利用bfc原理</span>
      <div class="box">
        <div class="inner-nofloat"></div>
        <div class="inner-nofloat"></div>
        <div class="inner-float"></div>
      </div>
    </div>
    <div>
      <span>background-image和background-color一起使用的问题</span>
      <div class="myDiv"></div>
    </div>-->
  </div>
</template>

<script>
import {mutations}  from './myStore';
export default {
  name: 'App',
  methods:{
    change:function(e){      
      mutations.changeDep('789');     
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.row {
  display: flex;
  flex-direction: column;
}
.row-item {
  background-color: yellow;
  margin-bottom: 10px;
}
.column {
  display: flex;
  flex-direction: row;
}
.column-item {
  background-color: green;
  flex:1;
  margin-right: 10px;
}
.box{
		width: 100%;
		height: 200px;
		background-color: #ececdd;
	  margin-left: auto;
		margin-right: auto;
    overflow:auto;
	}
	
	.inner-nofloat {
		width: 100%;
		height: 20px;
		background: #f7c3c3;
		margin-bottom: 40px;
		margin-top: 20px;     /*两个nofloat之间的外边距是40px，进行了合并处理*/
	}
	
	.inner-float {
		width: 100%;
		height: 20px;
		background: #d3cff7;
		float: left;
		margin-bottom: 40px;  /*float和nofloat之间的外边距是60px，并没有进行合并处理*/
		margin-top: 20px;
	}

  .myDiv{
    background-color: aqua;
    background-image: url("./assets/logo.png")
  }
</style>
