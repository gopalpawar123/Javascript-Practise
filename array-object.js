console.log(document);
console.log( typeof document);
// document is object and write is a method  in document object


var allproducts = [
   {
      name: 'product 1',
      path: "https//rukminim1.flixcart.com/image/389/467/kf1fo280hlty2aw-0/t-shirt/w/s/e/-original-imafdfvvr8hqdu65.jpeg?q=5"
   },
   {
      name: 'product 2',
      path: "https//rukminim1.flixcart.com/image/389/467/jhuvjww0/t-shirt/u/3/q/m-bts002-billion-original-imaf5s95cqufeuzp.jpeg?q=50"
   },
   {
      name: 'product 3',
      path: "https//rukminim1.flixcart.com/image/389/467/kf1fo280hlty2aw-0/t-shirt/w/s/e/-original-imafdfvvr8hqdu65.jpeg?q=5"
   },
   {
      name: 'product 4',
      path: "https//rukminim1.flixcart.com/image/389/467/kf1fo280hlty2aw-0/t-shirt/w/s/e/-original-imafdfvvr8hqdu65.jpeg?q=5"
   }
]
console.log(allproducts);
if (allproducts.length > 0) {
   document.write(`<div class='container'><div class='row'>`);
   for (var result of allproducts) {
      document.write(`
        <div class='col-xl-3 text-center'>
         <img src='${result.path}' class='img-fluid'/>
         <h2>${result.name}</h2>

        </div>
          `)
   }
   document.write(`</div> </div>`);


}
