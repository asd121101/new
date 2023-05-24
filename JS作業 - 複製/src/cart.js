

let label=document.getElementById("label");

let shoppingCart=document.getElementById("shopping-cart")

let basket=JSON.parse(localStorage.getItem("data")) || [];//將localStorage data傳到這個頁面 若沒有data則會return empty array

let calculation = ()=>{
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML=basket.map((x)=>x.item).reduce((x,y)=>x+y,0);
   
}
calculation();

let generateCartItem = () => {
    if(basket.length !== 0){
        return (shoppingCart.innerHTML = basket
            .map((x)=>{
                let {id,item}=x;
                let search=shopItemData.find((y)=>y.id === id) || []
                return`
            <div class="cart-item">
                <img width="100" src=${search.img} alt""/>
                <div class=details>
                    <div class="title-price-x">
                        <h4 class="title-price">
                            <p>${search.name}</p>
                            <p class="cart-item-price">$${search.price}</p>
                        </h4>   
                        <i onclick="removeItem(${id})" class="bi bi-x-octagon-fill"></i>                 
                    </div>

                    <div class="buttons">
                        <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                        <div id=${id} class="quantity">${item}</div>
                        <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                    </div>
            

                    <h3>$${item *search.price}</h3>

                </div>
            </div>
            `;
        })
        .join(""))
    } else{
        shoppingCart.innerHTML = ``;
        label.innerHTML = `        
        <h2 style="color:black;">購物車目前是空的</h2>
        <a href="index.html">
            <button class="HomeBtn">Back to Home</button>
        </a>
        `;
  
    }
}

generateCartItem();
let increment =(id)=>{
    let selectedItem =id;
    let search = basket.find((x)=> x.id ===selectedItem.id);

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
    generateCartItem();
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
    generateCartItem();
    localStorage.setItem("data", JSON.stringify(basket));
};
let update =(id)=>{
    let search = basket.find((x)=>x.id === id)
    //console.log(search.item)
    document.getElementById(id).innerHTML = search.item;
    calculation();
    totalAmount();
};
let removeItem=(id)=>{
    let selectedItem=id;
    basket=basket.filter((x)=>x.id !==selectedItem.id);

    generateCartItem();
    totalAmount();
    calculation();
    localStorage.setItem("data", JSON.stringify(basket));
};
let clearCart=()=>{
    basket=[]
    generateCartItem();
    calculation();
    localStorage.setItem("data", JSON.stringify(basket));
    
};

let totalAmount = ()=>{
    if (basket.length !==0){
        let amount=basket
            .map((x)=>{
                let {item,id}=x;
                let search=shopItemData.find((y)=>y.id === id) || []
                return item*search.price;
            })
            .reduce((x,y)=>x+y,0);
        label.innerHTML=`
        <h1 class="totalbill" id="totalbill"><b>目前金額:$ ${amount}</b></h1>
        <button class="Checkout">Checkout</button>
        <button onclicK="clearCart()" class="removeAll">Clear cart</button>
        `;
    }else return 
};
totalAmount();