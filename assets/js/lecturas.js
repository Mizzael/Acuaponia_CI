$.post(baseurl."Estado/getLecturas",
    {
        lec_fechahora: 1
    },
    function (data){
        alert(data);
    });