<template>
  <div class>
    <user-list-item
      v-for="(item,index) in userList"
      :key="'userList'+index"
      :item="item"
      :index="index"
      :focusClick="focusClick"
    ></user-list-item>
  </div>
</template>

<script>
import UserListItem from "components/userListItem/UserListItem";
export default {
  name: "SearchUser",
  components: { UserListItem },
  data() {
    return {
      userList: [
        {
          headImg:
            "https://i0.hdslb.com/bfs/face/ce65c4f02427ba1162921f15607892f82eb0c294.jpg@52w_52h.webp",
          name: "老王",
          manuscriptCount: 123,
          fansCount: 234,
          introduce: "计算机系的一位靓仔",
          isFocus: false, //是否已关注
          gender: 2 //性别参数 2 女 1 男 3 保密
        },
        {
          headImg:
            "https://i0.hdslb.com/bfs/face/edf1a2794b882ade01ec78dbd98b2a267e813037.jpg@180w_180h.webp",
          name: "老刘",
          manuscriptCount: 123,
          fansCount: 234,
          introduce: "计算机系的一位老板",
          isFocus: true,
          gender: 1
        },
        {
          headImg:
            "https://i2.hdslb.com/bfs/face/598aff963ea03d0e086fd757a82e507dec743ce4.jpg@180w_180h.webp",
          name: "老郑",
          manuscriptCount: 123,
          fansCount: 234,
          introduce: "计算机系的一位大佬",
          isFocus: false,
          gender: 2
        },
        {
          headImg:
            "https://i0.hdslb.com/bfs/face/6b540ea92562065869c31955437b2b9f0b6712eb.jpg@180w_180h.webp",
          name: "老黄",
          manuscriptCount: 123,
          fansCount: 234,
          introduce: "阿斯顿法国红酒看来",
          isFocus: true,
          gender: 1
        }
      ]
    };
  },
  computed: {},
  methods: {
    focusClick(index) {
      this.userList[index].isFocus = !this.userList[index].isFocus;
    }
  },
  mounted() {}
};
</script>

<style scoped>
</style>