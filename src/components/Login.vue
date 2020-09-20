<template>
    <div id="login">  
        <a-modal v-model="visible" :footer="null" dialogClass="centerClass">
            <div class="telLogin" v-show="loginWay === 'tel'">
              <a-tabs default-active-key="tel">
                  <a-tab-pane key="tel" tab="手机号登录">
                      <a-form-model ref="ruleForm" :model="ruleForm" :rules="rules" v-bind="layout">
                          <a-form-model-item has-feedback>
                            <a-input v-model="ruleForm.tel">
                              <a-icon slot="prefix" type="mobile" style="color:rgba(0,0,0,.25)" />
                            </a-input>
                          </a-form-model-item>                     
                          <a-form-model-item has-feedback>
                            <a-row :gutter="16">
                              <a-col class="gutter-row" :span="16">
                                <a-input v-model="ruleForm.verificationCode" autocomplete="off" />
                              </a-col>
                              <a-col class="gutter-row" :span="8">
                                <a-button type="primary" ghost>获取验证码</a-button>
                              </a-col>
                            </a-row>
                          </a-form-model-item>           
                          <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
                            <a-button type="primary" html-type="submit" :disabled="ruleForm.username === '' || ruleForm.password === ''" @click="submitForm('ruleForm')">
                              登录
                            </a-button>                         
                          </a-form-model-item>                                          
                        </a-form-model>
                  </a-tab-pane>
                  <a-tab-pane key="email" tab="邮箱登录">
                      <a-form-model ref="ruleForm" :model="ruleForm" :rules="rules" v-bind="layout">
                          <a-form-model-item has-feedback label="Username" prop="username">
                            <a-input v-model.number="ruleForm.username" />
                          </a-form-model-item>
                          <a-form-model-item has-feedback label="Password" prop="password">
                            <a-input v-model="ruleForm.password" type="password" autocomplete="off" />
                          </a-form-model-item>           
                          <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
                            <a-button type="primary" html-type="submit" :disabled="ruleForm.username === '' || ruleForm.password === ''" @click="submitForm('ruleForm')">
                              登录
                            </a-button>    
                            <a-button style="margin-left: 10px" @click="resetForm('ruleForm')">
                              重置
                            </a-button>                     
                          </a-form-model-item>
                        </a-form-model>
                  </a-tab-pane>                
              </a-tabs>
              <div>
                <div>
                  <a-checkbox>
                    十天内免登陆
                  </a-checkbox>
                </div>
                <span class="otherWay">其他登录方式</span>
                <div>
                  <a class="weixinLink" @click="toWeixinLogin">
                    <span class="weixinIcon"></span>
                    <p>微信</p>
                  </a>
                </div>
              </div> 
            </div>
            <div class="weixinLogin" v-show="loginWay === 'weixin'">
              <div class="back" @click="backToTel">
                <span class="icon"></span>
                <span>其他登录方式</span>
              </div>
              <div class="qrcodePanel">
                <div class="qrcodeContainer">
                  <img :src="qrCodeurl" width="160" height="160"/>
                </div>
                <div class="info">
                  <span class="normal">
                    微信扫码关注即可登录
                  </span>
                </div>
              </div>
            </div>           
        </a-modal>
    </div>
</template>
<script>
   import { FormModel ,Button,Input,Modal,Tabs,Icon,Row,Col,Checkbox} from 'ant-design-vue';  
    export default {
        name:'Login',
        props:{
            isLoginVisible:Boolean
        },
        components:{AFormModel:FormModel,AFormModelItem:FormModel.Item,AButton:Button,
                    AInput:Input,AModal:Modal,ATabs:Tabs,ATabPane:Tabs.TabPane,AIcon:Icon,ARow:Row,ACol:Col,
                   ACheckbox:Checkbox},
        data(){
            return {
                layout: {
                    labelCol: { span: 4 },
                     wrapperCol: { span: 14 },
                 },
                ruleForm:{
                    tel:'',
                    verificationCode:'',
                    username:'',
                    password:''
                },
                loginWay:'tel',
                qrCodeurl:'',
               // visible:this.isLoginVisible
            }
        },  
        computed:{
            visible:{
                get:function(){
                    return this.isLoginVisible
                },
                set:function(value){
                    this.$emit('visibleChange',value);
                }
            }
        } ,
        mounted(){
          let qrcodeConfig = {
            appid:'wxf134b4b5f2edc558',
            state:new Date().getTime(),
            redirect_uri:encodeURIComponent('http://localhost:8081/'),
            scope:'snsapi_login'
          };
          this.qrCodeurl = 'https://open.weixin.qq.com/connect/qrconnect?appid='+qrcodeConfig.appid+'&redirect_uri='+qrcodeConfig.redirect_uri+'&response_type=code&scope='+qrcodeConfig.scope+'&state='+qrcodeConfig.state+'#wechat_redirect';
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
            },
            backToTel(){
              this.loginWay = 'tel';
            },
            toWeixinLogin(){
              this.loginWay = 'weixin';
            }         
        }
    }
</script>
<style> 
.centerClass  {
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
}
.otherWay{
    margin-right: -6px;
    width: 72px;
    padding-top: 8px;
}
.weixinIcon{
    background: url('../assets/img/weixin.png');
    height: 34px;
    width: 34px;
    background-size: 100% 100%;
    margin-bottom: 6px;
    display: inline-block;
}
.normal::before{
  background: url('../assets/img/weinxinIcon.png');
  position: absolute;
  top:2px;
  left:-18px;
  content:'';
  background-size: 15px 13px;
  width: 15px;
  height:13px;
}
.back{

}
.back .icon{
  background:url('../assets/img/back.png');
  width:20px;
  height:16px;
  display:inline-block;
  cursor: pointer;
}
</style>