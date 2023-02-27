
        let result=document.getElementById("inputext");
        let calculator=(number)=>{
            result.value+=number;
        }
        let Result=()=>{
            try{
                result.value=eval(result.value)
            }
            catch(err){
                alert("Enter valid input");
            }
        }
        function clr(){
            result.value=" ";
        }
        function del(){
            result.value=result.value.slice(0,-1);
        }
  