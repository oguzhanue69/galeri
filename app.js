//qerry selector ile resim klasını alıp resimlere atadık
const resimler = document.querySelectorAll(".resim")

//foreach ile resim içine giriyor
resimler.forEach(panel =>{
        //burada addeventlistener ile olay dinleme yapılır buradaki olay tıklama
//tıkladığımda resmin yanına active class 'ını ekliyecek

    panel.addEventListener("click", function(){
        yusuf()
        panel.classList.add("active")
    }

    )
}) 
//resimlerin içindeki active classını kaldırıyor
function yusuf (){
    resimler.forEach(panel =>{
        panel.classList.remove("active")
    })
}
