var temp="";
        var ans=0;
        function mycalc(a)
        {
            if(a != '=')
            {
                temp += a;
                document.getElementById("result").innerHTML = temp;
                console.log(temp)
            }else{
                ans = eval(temp)
                document.getElementById("result").innerHTML = ans;
            }
        }
        function myclear()
        {
            document.getElementById("result").innerHTML = "";
            temp="";
            ans="";
        }