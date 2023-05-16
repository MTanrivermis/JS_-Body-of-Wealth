
let frm = document.getElementById("bodyForm");

//! submit butonuna basıldığında yapılacak işlemler

const weight = document.getElementById("weight");
const height = document.getElementById("height");

let bodyValue = document.querySelector("#value");
let error = document.querySelector("#error");
let detail =document.querySelector("#result");
let inputs =document.querySelector("#prompts");

let bodyResult=0

let emoji=""

function bodyCalc(w,h){

    //! virgülden sonraki basamakları göstermek için Number(value.toFixed(2)) metdou kullanıldı.
    bodyResult=Number((w.value/(h.value*2)*100).toFixed(1))
    return bodyResult
    
}


frm.addEventListener("submit",(e) => {


    e.preventDefault();


    if(weight.value=="" && height.value==""){
        
        error.innerHTML = "Lütfen Boy ve Kilo Değerini Giriniz !";
    }
    else{


        error.innerHTML = "";

        bodyCalc(weight,height) //! function çalıştır
        
        if(bodyResult <= 18.9){
            detail.innerHTML="Sonuc : Zayıf";
            emoji="😊"
        }
        else if(bodyResult >= 19 && bodyResult <= 24.9){
            detail.innerHTML="Sonuc : Normal";
            emoji="🙂"
        }
        else if(bodyResult >= 25 && bodyResult <= 29.9){
            detail.innerHTML="Sonuc : Toplu (Hafif Şişman)";
            emoji="😐"
        }
        else if(bodyResult >= 30 && bodyResult <= 34.9){
            detail.innerHTML="Sonuc : Obez (Sağlık Açısından Riskli)";
            emoji="😥"
        }
        else if(bodyResult >= 35){
            detail.innerHTML="Sonuc : Aşırı Obez (Sağlık Açısından Çok Riskli)";
            emoji="😰"
        }


        bodyValue.innerHTML =`${emoji} ${bodyResult}`;  //! function çıktıını yazdır
        inputs.innerHTML=`Kilo : ${weight.value} / Boy : ${height.value}`;
    }


    frm.reset() //! form elementlerini sıfırlar

})








