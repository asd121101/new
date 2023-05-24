var PreviewIcons = window.location.href
PreviewIcons = PreviewIcons.split("?id=")
PreviewIcons = PreviewIcons[1]

var nowdata
for (ii = 0; ii < shopItemData.length; ii++) {
    if (shopItemData[ii].id == PreviewIcons) {
        nowdata = ii
    }
}

var itemid = shopItemData[nowdata].id
var itemname = shopItemData[nowdata].name
var itemdesc = shopItemData[nowdata].desc
var itemimg = shopItemData[nowdata].img


/*
console.log(shopItemData[nowdata].id)
console.log(shopItemData[nowdata].name)
console.log(shopItemData[nowdata].price)
console.log(shopItemData[nowdata].desc)
console.log(shopItemData[nowdata].img)
*/

document.getElementById("shopimg").setAttribute("src",itemimg)
document.getElementById("name").innerHTML = shopItemData[nowdata].name
document.getElementById("desc").innerHTML = shopItemData[nowdata].desc

