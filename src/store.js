const LIST='todolist';
export default {
  read(){
    return JSON.parse(window.localStorage.getItem(LIST) || '[]');
  },
  write(items){
    window.localStorage.setItem(LIST,JSON.stringify(items));
  }
}
