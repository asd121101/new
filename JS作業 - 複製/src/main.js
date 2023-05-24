let shop = document.getElementById('shop')

let basket=JSON.parse(localStorage.getItem("data")) || [];//創一個籃子的主要目的是用於儲存每一次選擇物件的數據

let generateshop =()=>{
    return (shop.innerHTML= shopItemData                                                                                                                                                    //將下面內容在index.html裡的<div>id=shop<div>顯示出來 透過map功能引入data.js裡面shopitemdata的物件 使用${}達成自動化
        .map((x)=>{                                                                                                                                                                         //x在這裡是一個math function  透過這個X我們會一件一件定位所有項目 所以有X個data那map就會跑x次
        let{ id, name,price,img}=x
        let search = basket.find((x)=>x.id===id)||[]
        return`
        <div id=product-id-${id} class="item" >
            <img width="300" class="shopimg" onclick="window.open('shopitem.html?id=${id}','asdasd','width=495,height=560,top=100,left=500')"  src=${img} alt="">
            <div class="details">
                <h3>${name}</h3>
                <div class="price-quantity">
                    <h3>$ ${price}</h3>
                    <div class="buttons">
                        <i onclick="increment(${id})" class="bi bi-plus-lg"></i> 
                        <div id=${id} class="quantity">
                        ${search.item === undefined? 0 :search.item}
                        </div>
                        <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                    </div>
                </div>
            </div>
        </div>`
    })
    .join("") )
}

generateshop()

let increment =(id)=>{
    let selectedItem =id;
    let search = basket.find((x)=> x.id ===selectedItem.id);//在18行increment那邊用id來辨識點擊的為哪項商品 如果沒那項商品的ID則會新增一個BASKET如果有則會跳到ELSE部分增加ITEM

    if(search === undefined){
        basket.push({
            id:selectedItem.id,
            item: 1,
        });
    }
    else{
        search.item += 1;
    }
    localStorage.setItem("data", JSON.stringify(basket));
    //console.log(basket);
    update(selectedItem.id);
};
let decrement =(id)=>{
    let selectedItem =id;
    let search = basket.find((x)=> x.id ===selectedItem.id);
    if(search === undefined) return;
    else if(search.item === 0) return;
    else{
        search.item -= 1;
    }
    update(selectedItem.id);
    basket = basket.filter((x)=> x.item !== 0);//use filter function 此funtion會刪除所有item=0的項目並return其他項目
    //console.log(basket);
    localStorage.setItem("data", JSON.stringify(basket));
};
let update =(id)=>{                                       //製作這個functions主要是能即時更新點擊的資訊
    let search = basket.find((x)=>x.id === id)
    //console.log(search.item)
    document.getElementById(id).innerHTML = search.item;
    calculation();
};

let calculation = ()=>{
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML=basket.map((x)=>x.item).reduce((x,y)=>x+y,0);
   
}
calculation();
