class Scene{
  constructor(elem,game){
    this.elem = $(elem);
    this.game=game;
  }

  created(){

  }

  setup(){

  }

  uninstall(){
    
  }

  show(){
    this.elem.classList.add('action');
  }

  hidden(){
    this.elem.classList.remove('action');
  }

}