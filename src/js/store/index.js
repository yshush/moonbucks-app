const store = { //저장, 불러오기용 객체 
  setLocalStorage(menu) { //데이터를 저장할 파라미터 
    localStorage.setItem("menu", JSON.stringify(menu)); // 문자열로 저장 
  },
  getLocalStorage() {
    return JSON.parse(localStorage.getItem("menu"));
  },
};

export default store;