<template>
  <div>
  <div id="TodoList">
    <input v-model="val"/>
    <br/>
    <el-button @click="insertItem">submit</el-button>
    <el-button @click="searchItem">search</el-button>
  </div>
    <ul>
      <TodoListItem
        v-show="itemBoolean"
        v-for="(item,index) of  list"
        :key="index"
        :content="item"
        :index="index"
        @delete="deleteItem"
      />
    </ul>
    <div v-show="!itemBoolean">{{ list[index] }}</div>
  </div>
</template>

<script>
import TodoListItem from './components/TodoListItem'
import {getLineInfo} from './api/test'
export default {
  name: 'TodoList',
  data () {
    return {
      val: '',
      list: [],
      itemBoolean: true,
      index: 0
    }
  },
  methods: {
    insertItem: function () {
      if (this.itemBoolean === false) {
        this.itemBoolean = true
      }
      this.list.push(this.val)
      this.val = ''
      this.$axios
        .get('/main/getLineInfo')
        .then(successResponse => {
          this.responseResult = JSON.stringify(successResponse.data)
        })
        .catch(failResponse => {
        })
    },
    deleteItem: function (index) {
      this.list.splice(index, 1)
    },
    searchItem: function () {
      this.index = this.val
      this.itemBoolean = !this.itemBoolean
      getLineInfo().then(response => {
        debugger
      })
    }
  },
  components: {
    TodoListItem
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
</style>
