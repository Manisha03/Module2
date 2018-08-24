	onload = function(){
			var inps = document.getElementsByTagName("input");
			for(var elem=0;elem<inps.length;elem++){
				
				if(inps[elem].type === "text"){
				var oper = inps[elem].getAttribute("onkeypress");
				if(oper === "validate.number()" || oper==="validate.alpha()")
				{
					inps[elem].addEventListener("paste",pas,false);
                                        inps[elem].addEventListener("keyup",validate.keyupnum,false);
				}
			}
			}			
			};
		var validate = {
                                            id : null,
                                            passid : null,
                                            valid : false,
                                            validate_num : false,
                                            number : function(){
                                                    if(event.type!=="keypress"){
                                                            console.error("function number(){} works better with onkeypress event");
                                                    }
                                                    
                                                    var elem = event.srcElement;
                                                    var ascii = event.keyCode;
//                                                     if(len===(event.srcElement.value.length) && !event.ctrKey){
//                                                    validate.validate_num = true;
//                                                    }
//                                                    else{
//                                                    validate.validate_num = false;
//                                                    }
                                                    var len = parseInt(event.srcElement.getAttribute("maxlen"));
                                                    if( ((ascii>=48 && ascii<=57) && (elem.value.length < len || len===undefined)) || event.ctrKey || event.shiftKey){
//                                                        if(len===(event.srcElement.value.length+1) && !event.ctrKey){
//                                                        this.validate_num = true;
//                                                        }
//                                                        else{
//                                                            this.validate_num = false;
//                                                        }
                                                    setTimeout(function(){
                                                        var evt = new CustomEvent('keyup',{bubbles:true,cancelable:true});
                                                        elem.dispatchEvent(evt);
                                                    },200);
                                                        return true;
                                                    }
                                                    event.preventDefault();
                                            },
                                            keyupnum : function(){
                                            var len = parseInt(event.srcElement.getAttribute("maxlen"));
                                            if(len!=parseInt(event.srcElement.value.length)){
                                                validate.validate_num = false;
                                            }
                                            else{
                                                validate.validate_num = true;
                                            }
                                            },
                                            alpha : function(){
                                                    if(event.type!=="keypress"){
                                                            console.error("function number(){} works better with onkeypress event");
                                                    }
                                                    var ascii = event.keyCode; 
                                                    var len = parseInt(event.srcElement.getAttribute("maxlen"));
                                                    
//                                                     console.log(event);//97-122 && 65-90
                                                    if( (((event.keyCode >= 97 && event.keyCode <=122) || (event.keyCode >= 65 && event.keyCode <=90)) && (event.srcElement.value.length < len || len===undefined)) || event.ctrlKey){
                                                            
                                                            return true;
                                                    }
                                                    event.preventDefault();
                                            },
                                            email : function(err,norm,elems){
                                                    err = ' '+err+' ';
                                                    norm = ' '+norm+' ';
                                                    if(elems!=undefined){
                                                        elems = document.getElementById(elems);
                                                    }
                                                    var val = event ? event.srcElement.value : elems.value;
                                                    
                                                    var em = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                                                    var elem = event ? event.srcElement : elems;
                                                    if(!!elem.className.match(new RegExp(err))){
                                                            elem.className = elem.className.replace(err,'');
                                                    }
                                                    else if(!!elem.className.match(new RegExp(norm))){
                                                            elem.className = elem.className.replace(norm,'');
                                                    }
                                                    if(em.test(val)){
                                                            clearInterval(this.id);
                                                            this.valid = true;
                                                            return true;
                                                    }
                                                    else{
                                                            clearInterval(this.id);
                                                            elem.className += err;
                                                            this.id=setInterval(function(){
                                                            var col = (elem.className).indexOf(err);
                                                            
                                                            if(col>=0){elem.className = elem.className.replace(err,norm);}
                                                            else if(col!==0){elem.className = elem.className.replace(norm,err);}	
                                                            },800);
                                                            this.valid = false;
                                                            return false;
                                                    }
                                            },
                                            getValid : function(){
                                                return this.valid;
                                            },
                                            getValidNum : function(){
                                                return this.validate_num;
                                            },
                                            passValidate :  function(elem1,elem2,err,norm){
                                                err = ' '+err.trim()+' ';
                                                norm = ' '+norm.trim()+' ';
                                                var val1 = document.getElementById(elem1).value;
                                                var val2 = document.getElementById(elem2).value;
                                                elem1 = document.getElementById(elem1);
                                                elem2 = document.getElementById(elem2);
                                                if(!!elem1.className.match(new RegExp(err))){
                                                            elem1.className = elem1.className.replace(err,'');
                                                            elem2.className = elem2.className.replace(err,'');
                                                    }
                                                    else if(!!elem1.className.match(new RegExp(norm))){
                                                            elem2.className = elem2.className.replace(norm,'');
                                                            elem1.className = elem1.className.replace(norm,'');
                                                    }
                                                    if(val1===val2){
                                                            clearInterval(this.passid);
                                                            
                                                    }
                                                    else{
                                                            clearInterval(this.passid);
                                                            elem1.className += err;
                                                            elem2.className += err;
                                                            this.passid=setInterval(function(){
                                                            var col1 = (elem1.className).indexOf(err);
                                                            if(col1>=0){
                                                            elem1.className = elem1.className.replace(err,norm);
                                                            elem2.className = elem2.className.replace(err,norm);
                                                            }
                                                            else if(col1!==0){
                                                            elem1.className = elem1.className.replace(norm,err);
                                                            elem2.className = elem2.className.replace(norm,err);
                                                            }	
                                                            },800);
                                                            
                                                    }
                                            }
                                }
function pas(){
	var pastedText;
        console.log(this);
	if(window.clipboardData && window.clipboardData.getData ) {
      pastedText = window.clipboardData.getData('Text');
    }  else if( event.clipboardData && event.clipboardData.getData ){
      pastedText = event.clipboardData.getData('text/plain');
    }
    var len= event.srcElement.getAttribute("maxlen");
    len = parseInt(len);
    var val = event.srcElement.value.length + pastedText.length;
    if(val > len){
    	pastedText = pastedText.substring(0,(len-event.srcElement.value.length));
    	
    }
    var oper = event.srcElement.getAttribute("onkeypress");
    if(oper==="validate.number()" && !isNaN(pastedText)){
    	event.srcElement.value += pastedText;
    }
    else if(oper==="validate.alpha()" && isNaN(pastedText)){
    	event.srcElement.value += pastedText;
    }
    event.preventDefault();    
}