<template>
    <div>   
      <a-menu
        style="width: 256px"
        :default-selected-keys="['1']"
        :default-open-keys="['sub1']"
        mode="inline"
        :theme="light"
        :selected-keys="[current]"
        @click="handleClick"
      >
        <a-menu-item key="1">
          <a-icon type="mail" />
          Navigation One
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="calendar" />
          Navigation Two
        </a-menu-item>
        <a-sub-menu key="sub1">
          <span slot="title"><a-icon type="appstore" /><span>Navigation Three</span></span>
          <a-menu-item key="3">
            Option 3
          </a-menu-item>
          <a-menu-item key="4">
            Option 4
          </a-menu-item>
          <a-sub-menu key="sub1-2" title="Submenu">
            <a-menu-item key="5">
              Option 5
            </a-menu-item>
            <a-menu-item key="6">
              Option 6
            </a-menu-item>
          </a-sub-menu>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title"><a-icon type="setting" /><span>Navigation Four</span></span>
          <a-menu-item key="7">
            Option 7
          </a-menu-item>
          <a-menu-item key="8">
            Option 8
          </a-menu-item>
          <a-menu-item key="9">
            Option 9
          </a-menu-item>
          <a-menu-item key="10">
            Option 10
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </div>
  </template>
  <script>
  import {Menu} from 'ant-design-vue';
  export default {
    name:'SideBar',
    components:{AMenu:Menu,AMenuItem:Menu.Item,ASubMenu:Menu.SubMenu},
    data() {
      return {
        current: '1',       
      };
    },
    methods: {
      handleClick(e) {
        console.log('click ', e);
        this.current = e.key;
      },     
    },
  };
  </script>