<template>
    <div class="moduleThink">
        <div>
            <button id="left" @click="toLeft">左移动</button>
            <input type="text" name="" id="num"/>
            <button id="right" @click="toRight">右移动</button>
        </div>
        <div class="wrapper">
            <div id="content">这是个移动的div</div>
        </div>
        <div>
            <button id="back" @click="goBack">后退</button>
            <button id="font" @click="goFont">前进</button>
        </div>
    </div>
</template>
<script>
    class DataManager {
        constructor() {
            this.stateArr = [{
                property: 'left',
                num: 0
            }];
            this.stateIndex = 0;
        }
        pushState(obj) {
            this.stateArr.push(obj);
            this.stateIndex = this.stateArr.length - 1;
        }
        getBack() {
            if (this.stateIndex > 0) {
                this.stateIndex--;
            }
        }
        getFont() {
            if (this.stateIndex < this.stateArr.length - 1) {
                this.stateIndex++;
            }
        }
        getData() {
            return this.stateArr[this.stateIndex];
        }
    }

    export default {
        name: 'ModuleThink',
        data() {
            return {

                dataManager: new DataManager()
            }
        },
        methods: {
            changeDiv: function() {
                var _data = this.dataManager.getData();
                var element = document.getElementById('content');
                element.style[_data.property] = _data.num;
            },
            toLeft: function() {
                var value = document.getElementById('num').value || 0;
                var left = document.getElementById('content').style.left || 0;

                this.handleDiv.excute({
                    property: 'left',
                    num: (parseInt(left) - parseInt(value)) + 'px'
                });
            },
            toRight: function() {
                var value = document.getElementById('num').value || 0;
                var left = document.getElementById('content').style.left || 0;
                this.handleDiv.excute({
                    property: 'left',
                    num: parseInt(value) + parseInt(left) + 'px'
                });
            },
            goBack: function() {
                this.handleDiv.excute('back');
            },
            goFont: function() {
                this.handleDiv.excute('font');
            }
        },
        mounted() {
            var vm = this;
            vm.handleDiv = (function() {
                return {
                    //命令模式
                    excute: function(commander) {
                        var commanderArr = ['back', 'font', 'left', 'right'];
                        if (typeof commander === 'object') {
                            vm.dataManager.pushState(commander);
                            vm.changeDiv();

                        } else {
                            var has = false;
                            if (commanderArr.indexOf(commander) != -1) {
                                has = true;
                                //策略模式
                                var state = {
                                    font: function() {
                                        vm.dataManager.getFont();
                                        vm.changeDiv();
                                    },
                                    back: function() {
                                        vm.dataManager.getBack();
                                        vm.changeDiv();
                                    }
                                };
                                state[commander]();
                            } else {
                                throw new Error('命令不合法');
                            }
                        }
                    }
                }
            })();
        }
    }
</script>
<style scoped>
    .wrapper {
        position: relative;
    }
    
    #content {
        position: absolute;
    }
</style>