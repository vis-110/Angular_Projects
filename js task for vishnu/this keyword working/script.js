function firstFunction(){
    console.log(this);
}


firstFunction();

const show = ()=>{
    console.log(this);
}
show();