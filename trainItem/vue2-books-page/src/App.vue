<template>
  <div id="app" class="container">
    <div class="page-header">
      <h1>vue.js2 & firebase smaple application</h1>
    </div>

    <div class="panel panel-default">
      <div class="panel-heading">
        <h3>Add Book</h3>
      </div>
      <div class="panel-body">
        <form id="form" class="form-inline" v-on:submit.prevent="addBook">
          <div class="form-group">
            <label for="bookTitle">Title:</label>
            <input type="text" id="bookTitle" class="form-control" v-model="newBook.title">
          </div>
           <div class="form-group">
            <label for="bookAuthor">Author:</label>
            <input type="text" id="bookAuthor" class="form-control" v-model="newBook.author">
          </div>
           <div class="form-group">
            <label for="bookUrl">Url:</label>
            <input type="text" id="bookUrl" class="form-control" v-model="newBook.url">
          </div>
          <input type="submit" class="btn btn-primary" value="Add Book">
        </form>
      </div>
    </div>


    <div class="panel panel-default">
      <div class="panel-heading">
        <h3>Books List</h3>
      </div>
      <div class="panel-body">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Delete</th>
            </tr>
          </thead>
        </table>
        <tbody>
          <tr v-for="book in books">
            <td>
              <a v-bind:href="book.url">{{ book.title }}</a>
            </td>
            <td style="padding:0 300px;">
              {{ book.author }}
            </td>
            <td>
              <span class="glyphicon glyphicon-trash" v-on:click="removeBook(book)"></span>
            </td>
          </tr>
        </tbody>
      </div>
    </div>
  </div>
</template>

<script>
import Firebase from 'firebase'
import toastr from 'toastr'
import 'toastr/build/toastr.css'

//定义配置对象，访问firebase数据库
let config = {   //firebase项目->Overvuew->网页SDK
  apiKey: "AIzaSyDReJl6R7xAh_OczlKGq6Y5LcQM65XCWhw",
  authDomain: "vue2-books-page.firebaseapp.com",
  databaseURL: "https://vue2-books-page.firebaseio.com",
  projectId: "vue2-books-page",
  storageBucket: "vue2-books-page.appspot.com",
  messagingSenderId: "287805183622",
  appId: "1:287805183622:web:2bac7ca7fb14a0cc"
};
let apps = Firebase.initializeApp(config);
let db = apps.database();


//获得books节点
let booksRef = db.ref('books');
//console.log(books);
console.log(booksRef);

export default {
  name: 'App',
  firebase: {
      books: booksRef		
  },
  data() {
    return {
      newBook: {
        title: '',
        author: '',
        url: ''
      }
    }
  },
  methods: {
    addBook: function() {
      booksRef.push(this.newBook);
      this.newBook.title = '';
      this.newBook.author = '';
      this.newBook.url = '';
    },
    removeBook: function(book) {
      booksRef.child(book['.key']).remove();
      //toastr无法安装
      toastr.success("Books Removed");
      //alert("Books Removed");
    }
  }
}



</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
