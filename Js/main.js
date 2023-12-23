var conteiner = document.querySelector('.conteiner')

const array=[


 {
        image : './Assets/Atv.jpg',
        title : 'Atv',
        data : '01.02.2002',
        link : 'https://atv.az/',
        target: "blank"
},

{
        image : './Assets/idman tv.jpg',
        title : 'Idman tv',
        data : '01.02.2002',
        link : 'https://idmantv.az/az'
},

{
        image : './Assets/Cbc sport.jpg',
        title : 'Cbc sport',
        data : '01.02.2002',
        link : 'https://www.cbcsport.az/'
},

{
        image : './Assets/Aztv.png',
        title : 'Aztv',
        data : '01.02.2002',
        link : 'https://aztv.az/az'
},

{
        image : './Assets/lider tv.jpg',
        title : 'Aztv',
        data : '01.02.2002',
        link : 'https://telepedia.fandom.com/ru/wiki/Lider_TV'
},

{
        image : './Assets/medenniyet tv.jpg',
        title : 'Medenniyet tv',
        data : '01.02.2002',
        link : 'https://medeniyyettv.az/az'
},

{
        image : './Assets/xezer tv.jpg',
        title : 'Xezer tv',
        data : '01.02.2002',
        link : 'https://www.xezertv.az/'
},

{
        image : './Assets/Itv.png',
        title : 'Itv',
        data : '01.02.2002',
        link : 'https://itv.az/'
},

{
        image : './Assets/arb.png',
        title : 'Arb',
        data : '01.02.2002',
        link : 'https://www.arbtv.az/'
},

{
        image : './Assets/space.jpg',
        title : 'Space tv',
        data : '01.02.2002',
        link : 'https://infoportal.az/az/firm/12916'
},





]

array.forEach(element => {

        const product = document.createElement('a')
        product.classList.add("product")
        product.href = element.link
        product.target = element.target  // productin uzerine klik eledikdee yeni seyfede acilsinm


        const photo = document.createElement('img') //img tegi yaradirig ve o tegi photo ile adlandiririg
        photo.src=element.image //adlandirdigimiz photon-un source-ye(src) image elementin(yuxarda qeyd elediyimiz)deyerin (onunda deyeri sekile geden linkdi)
        product.appendChild(photo) //sora ise photo(yeni img tegin) product divine saliriq
        photo.classList.add("image")


        const info = document.createElement("h3")//burda h3 tegi yaradirig ve onu info adi ile adlnadiririg
        info.textContent=element.title // burda adlandirdigimiz info(h3) yuxarida qeyd elediyimiz title elementin elave edirik
        product.appendChild(info)
        info.classList.add("title")



        const paragraph = document.createElement("p") // burada p tegi yaradirig ve ona paragraph adini menimsedirik
        paragraph.textContent=element.data
        product.appendChild(paragraph)
        paragraph.classList.add("paragraph")

        conteiner.appendChild(product)

});

//BASLIQ YAZMAG UCUN

var tit = document.getElementById("title")

const title = document.createElement("h3")

title.classList.add("subtitle")

tit.appendChild(title)

title.textContent="Azerbaycan TV Kanalları"

var animations = document.getElementsByClassName("a");

