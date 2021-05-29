
let del_button= document.getElementsByClassName("del_btn");
let check_button= document.getElementsByClassName("check_btn");
let add_click = document.querySelector("#liveToastBtn");

add_click.addEventListener("click",function(){
    let text= document.querySelector("#task").value;
    if(text==""){
        $("#liveToast2").toast('show');
    }
    else{
        let new_li = document.createElement("li");
        new_li.innerHTML = text;
        let btn1 = document.createElement("button");
        btn1.className="check_btn";
        let check= document.createElement("i");
        check.className="fa fa-check";
        btn1.appendChild(check);
        new_li.appendChild(btn1);

        let btn2 = document.createElement("button");
        btn2.className="del_btn";
        let del= document.createElement("i");
        del.className="fa fa-close";
        btn2.appendChild(del);
        new_li.appendChild(btn2);

        document.querySelector("#list").appendChild(new_li);

        document.querySelector("#task").value="";
        for( var i=0;i<del_button.length;i++){
            del_button[i].addEventListener("click", deleteListElement);
        }
        for( var i=0;i<check_button.length;i++){
            check_button[i].addEventListener("click", checkListElement);
        }
        $("#liveToast1").toast('show');
    }

    
})




var del= document.getElementsByClassName("del_btn");
for( var i=0;i<del.length;i++){
	del[i].addEventListener("click", deleteListElement);
}
function deleteListElement(){
	this.parentElement.remove();
}

var check= document.getElementsByClassName("check_btn");
for( var i=0;i<check.length;i++){
	check[i].addEventListener("click", checkListElement);
}
function checkListElement(){
	this.parentElement.className == "checked" ? this.parentElement.classList.remove("checked") : this.parentElement.className = "checked"
}