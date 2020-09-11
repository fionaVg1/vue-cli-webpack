<template>
    <div id="login">  
 
            <a-form-model ref="ruleForm" :model="ruleForm" :rules="rules" v-bind="layout">
                <a-form-model-item has-feedback label="Username" prop="username">
                  <a-input v-model.number="ruleForm.username" />
                </a-form-model-item>
                <a-form-model-item has-feedback label="Password" prop="password">
                  <a-input v-model="ruleForm.password" type="password" autocomplete="off" />
                </a-form-model-item>           
                <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
                  <a-button type="primary" html-type="submit" :disabled="ruleForm.username === '' || ruleForm.password === ''" @click="submitForm('ruleForm')">
                    Submit
                  </a-button>
                  <a-button style="margin-left: 10px" @click="resetForm('ruleForm')">
                    Reset
                  </a-button>
                </a-form-model-item>
              </a-form-model>
     
    </div>
</template>
<script>
   import { FormModel ,Button,Input} from 'ant-design-vue';
    export default {
        name:'Login',
        components:{AFormModel:FormModel,AFormModelItem:FormModel.Item,AButton:Button,AInput:Input},
        data(){
            return {
                layout: {
                    labelCol: { span: 4 },
                     wrapperCol: { span: 14 },
                 },
                ruleForm:{
                    username:'',
                    password:''
                }
            }
        },   
        methods:{
            submitForm(formName){
                console.log(this.ruleForm);
                this.axios.post('/api/user/login',this.ruleForm).then((response)=>{
                    var isExist = response.data.isExist;
                    if(isExist){
                        this.$router.push({path: '/home'});
                    }
                });
            },
            resetForm(formName){
                this.$refs[formName].resetFields();
            } 
        }
    }
</script>
<style>
    #login{
        background:url('../assets/img/login.jpg');
        height:100%;        
    }
    form{
        width: 500px;
        position:absolute;       
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
    }
</style>