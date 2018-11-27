$(document).ready(function() {

    // Post user
    $("#btnSubmit").click(function(){
        let bussiness_name = $('#bussiness_name').val();
        let email = $('#email').val();
        let phone = $('#phone').val();
        let adress = $('#adress').val();
        let owner_name = $('#owner_name').val();
        let password = $('#password').val();
        
        let isAllDataFilled = bussiness_name && email && phone && adress && owner_name && password;
        if(isAllDataFilled){
            let mydata = {
                bussiness: {
                    bussiness_name: bussiness_name, 
                    email: email, 
                    phone: phone, 
                    adress: adress,
                    owner_name: owner_name,
                    password: password 
                }};
            let myJSON = JSON.stringify(mydata);
            let url = 'http://localhost:3000/bussiness'
            $.ajax({
                type: "POST",
                url: url,
                data: myJSON,
                headers: {
                    'Content-Type': 'application/json'
                },
                success: function(data, status) {
                    console.log(status);
                    console.log(data);
                    if(status == 'success') {
                        alert("Negocio registrado satistactoriamente!");
                        window.location.href = "index_bussiness.html";
                    }
                },
                dataType: 'json'
              });
        } else {
            alert("Debe llenar todos los datos para continuar");
        }

        
    });

    // Get user
    // $("#btnSubmit").click(function(){
    //     $.get("http://localhost:3000/users", function(data, status){
    //         alert("Data: " + data + "\nStatus: " + status);
    //     });
    // });
});