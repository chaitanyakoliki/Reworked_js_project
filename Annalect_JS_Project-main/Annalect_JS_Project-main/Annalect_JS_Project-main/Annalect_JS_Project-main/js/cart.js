//cart
// var cart=[];

// function displaycart(a){
//     let j=0;
//     if(cart.length==0){
//         document.getElementById('cart-item').innerHTML = "Your cart is empty";
//     }
//     else{
//         document.getElementById("cart-item").innerHTML= cart.map((items)=>
//         {
//             var{image,title,price}=items;
//             return(

// ------------------------------




// fetch('https://fakestoreapi.com/products/')
//     .then(data => data.json())
//     .then(completedata => {
//         // console.log(completedata[item].title)});hdwlk1f m
        
//         let data1 = "";
//         completedata.map((values) => {
//             data1=`
//             <div class="cart-content">
//             <div class="cart-box">
//                 <img src="${values.image}" alt="" class="cart-img">
//                 <div class="detail-box">
//                     <div class="cart-product-title">${values.title}</div>
//                     <div class="cart-price">$ ${values.price}</div>
//                     <input type="number" value="1" class="cart-quantity">
//                 </div>
//                 <!-- remove cart -->
//                 <i class='bx bxs-trash-alt cart-remove'></i>
//             </div>
//         </div>`
//         });
//         document.getElementById("cart-item").innerHTML=data1;
//     })
//     .catch(error=>console.log(error));






    $(document).ready(function(){
        $("#button-hidder").click(function(){
            $(this).hide();
            $("#button-hidder-1").show();
        });
        $("#button-hidder-1").click(function(){
            $("#button-hidder").show();
            $(this).hide();
        });
        $(".edit").click(function(){
            $(".hide-for-front").css("display","none");
            $(".show-for-front").css("display","block");
        });
        $(".call-back").click(function(){
            $(".hide-for-front").css("display","block");
            $(".show-for-front").css("display","none");
        });
        $("#button-hidder").click(function(){
            $("#collapseTwo,#payment-option").collapse("hide");
        });
        $("#phone-pe-hidder").click(function(){
            $("#debit,#net-banking,#cash").collapse("hide");
        })
        $("#debit-hidder").click(function(){
            $("#phonepe,#net-banking,#cash").collapse("hide");
        })
        $("#net-banking-hidder").click(function(){
            $("#phonepe,#cash,#debit").collapse("hide");
        })
        $("#cash-hidder").click(function(){
            $("#phonepe,#net-banking,#debit").collapse("hide");
        })
    
        $(window). scroll(function(){
            var scroll = $(window). scrollTop();
            if (scroll > 0) {
            $("#top-containt"). css("background" , "rgb(233, 233, 233)");
            }
            else{
            $("#top-containt"). css("background" , "white");}});
        $('.parallax-window').parallax({imageSrc: 'desktop-1.jpg'});
    })
        

