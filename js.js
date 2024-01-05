// // let previewContainer = document.querySelector(".product-preview");
// // let previewBox = previewContainer.querySelectorAll(".preview");


// // document.querySelectorAll(".products-container .product").forEach(element => {
// //     element.onclick=()=>{

// //         previewContainer.style.display="flex";

// //         let name=element.getAttribute("data-name");

// //         previewBox.forEach(ele => {
// //           let target= ele.getAttribute("data-target");

// //           if (name==target) {
// //             ele.classList.add("active");
// //             console.log("active");
// //           }
// //         });
// //     }
// // });

// // previewBox.forEach(close=>{
// //   close.querySelector("#ll").onclick=()=>{
// //     close.classList.remove("active");
// //     previewContainer.style.display="none";
// //   }
// // });




// // const productPreview = document.querySelector(".product-preview")
// // fetch("./new.json")
// // .then(res=>res.json()).then(data=>{
// //     data.forEach(ele=>{
// //         productPreview.innerHTML  = productPreview.innerHTML + `
// //         <div class="preview"  data-target="${ele.data-name}">
// //         <img src="https://cdn-icons-png.flaticon.com/128/9312/9312232.png" alt="" id="ll">
// //          <img src="https://t3.ftcdn.net/jpg/01/08/78/82/240_F_108788212_wJw3WkAuKt4pstFveRvrcI5tozcUk8KW.jpg" alt="" id="hh">
// //          <h3>tomato</h3>

// //          <div class="stars">
// //             <img src="https://cdn-icons-png.flaticon.com/128/2893/2893811.png" alt="" style="height: 15px; width: 15px;">
// //             <img src="https://cdn-icons-png.flaticon.com/128/2893/2893811.png" alt=""style="height: 15px; width: 15px;">
// //             <img src="https://cdn-icons-png.flaticon.com/128/2893/2893811.png" alt="" style="height: 15px; width: 15px;">
// //             <img src="https://cdn-icons-png.flaticon.com/128/2893/2893811.png" alt="" style="height: 15px; width: 15px;">
// //             <img src="https://cdn-icons-png.flaticon.com/128/2956/2956792.png" alt="" style="height: 15px; width: 15px;">
// //           <span>(250)</span>
// //          </div>
// //          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates libero amet sunt quam provident harum quo! Fugiat dolore molestiae eligendi, libero cupiditate velit ipsam nam sequi, odit, laboriosam illo facere!</p>
// //          <div class="price">$2.00</div>
// //          <div class="button">
// //           <a href=""  class="buy">Buy Now</a>
// //           <a href=""  class="cart">Add to Cart</a>
// //          </div>
// //     </div>
// //         `
// //     })
// // })

// const pre = document.querySelector(".products-container");
// const re = document.querySelector(".product-preview");
// console.log(pre);

// fetch("./new.json").
//     then(res => {
//         if (!res.ok) {
//             throw new Error(`glich ${res.status}`)
//         }
//         return res.json()
//     })
//     .then(data => {

//         data.forEach((element, index) => {
//             const productDiv = document.createElement('div');
//             productDiv.className = 'product';
//             productDiv.setAttribute('data-name', `p-${index + 1}`);

//             const imgElement = document.createElement('img');
//             imgElement.src = element.img;
//             imgElement.alt = '';
//             imgElement.id = 'hh';

//             const h3Element = document.createElement('h3');
//             h3Element.textContent = element.name;

//             const priceElement = document.createElement('div');
//             priceElement.className = 'price';
//             priceElement.textContent = element.price;

//             productDiv.appendChild(imgElement);
//             productDiv.appendChild(h3Element);
//             productDiv.appendChild(priceElement);

//             pre.appendChild(productDiv);

//             // Add click event to each product
//             // Add click event to each product
//             productDiv.addEventListener('click', () => {
//                 // Display the preview when a product is clicked
//                re.style.display = 'flex'; 

//                 // Create preview container
//                 const previewContainer = document.createElement('div');
//                 previewContainer.className = 'preview active';
//                 previewContainer.setAttribute('data-target', `p-${index + 1}`);

//                 // Create image elements
//                 const imgElement1 = document.createElement('img');
//                 imgElement1.src = element.img;
//                 imgElement1.alt = '';
//                 imgElement1.id = 'll';

//                 const imgElement2 = document.createElement('img');
//                 imgElement2.src = element.img;
//                 imgElement2.alt = '';
//                 imgElement2.id = 'hh';

//                 // Create heading element
//                 const h3Element = document.createElement('h3');
//                 h3Element.textContent = element.name;

//                 // Create stars container
//                 const starsContainer = document.createElement('div');
//                 starsContainer.className = 'stars';

//                 // Create star images
//                 for (let i = 0; i < 5; i++) {
//                     const starImg = document.createElement('img');
//                     starImg.src = "https://cdn-icons-png.flaticon.com/128/2893/2893811.png";
//                     starImg.alt = '';
//                     starImg.style.height = '15px';
//                     starImg.style.width = '15px';
//                     starsContainer.appendChild(starImg);
//                 }

//                 // Create span element for rating count
//                 const ratingCount = document.createElement('span');
//                 ratingCount.textContent = '(250)';

//                 // Create paragraph element
//                 const pElement = document.createElement('p');
//                 pElement.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates libero amet sunt quam provident harum quo! Fugiat dolore molestiae eligendi, libero cupiditate velit ipsam nam sequi, odit, laboriosam illo facere!';

//                 // Create price element
//                 const priceElement = document.createElement('div');
//                 priceElement.className = 'price';
//                 priceElement.textContent = element.price;

//                 // Create button container
//                 const buttonContainer = document.createElement('div');
//                 buttonContainer.className = 'button';

//                 // Create Buy Now link
//                 const buyLink = document.createElement('a');
//                 buyLink.href = '';
//                 buyLink.className = 'buy';
//                 buyLink.textContent = 'Buy Now';

//                 // Create Add to Cart link
//                 const cartLink = document.createElement('a');
//                 cartLink.href = '';
//                 cartLink.className = 'cart';
//                 cartLink.textContent = 'Add to Cart';

//                 // Append elements to the preview container
//                 previewContainer.appendChild(imgElement1);
//                 previewContainer.appendChild(imgElement2);
//                 previewContainer.appendChild(h3Element);
//                 previewContainer.appendChild(starsContainer);
//                 previewContainer.appendChild(ratingCount);
//                 previewContainer.appendChild(pElement);
//                 previewContainer.appendChild(priceElement);
//                 previewContainer.appendChild(buttonContainer);
//                 buttonContainer.appendChild(buyLink);
//                 buttonContainer.appendChild(cartLink);

//                 // Append the preview container to the 're' element
//                 re.innerHTML = ''; // Clear previous content
//                 re.appendChild(previewContainer);

//                 imgElement1.addEventListener('click',()=>{
                    
//                     re.removeAttribute('style');
//                     re.innerHTML = ''; 
//                 })
//             });
//         });
//     })



    $(document).ready(function() {
        const pre = $(".products-container");
        const re = $(".product-preview");
    
        fetch("./new.json")
            .then(res => {
                if (!res.ok) {
                    throw new Error(`glich ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                data.forEach((element, index) => {
                    const productDiv = $("<div>").addClass('product').attr('data-name', `p-${index + 1}`);
    
                    const imgElement = $("<img>").attr('src', element.img).attr('alt', '').attr('id', 'hh');
                    const h3Element = $("<h3>").text(element.name);
                    const priceElement = $("<div>").addClass('price').text(element.price);
    
                    productDiv.append(imgElement, h3Element, priceElement);
                    pre.append(productDiv);
    
                    productDiv.on('click', () => {
                        re.css('display', 'flex');
    
                        const previewContainer = $("<div>").addClass('preview active').attr('data-target', `p-${index + 1}`);
                        const imgElement1 = $("<img>").attr('src', "https://cdn-icons-png.flaticon.com/128/9312/9312232.png").attr('alt', '').attr('id', 'll');
                        const imgElement2 = $("<img>").attr('src', element.img).attr('alt', '').attr('id', 'hh');
                        const h3Element = $("<h3>").text(element.name);
    
                        const starsContainer = $("<div>").addClass('stars');
                        for (let i = 0; i < 5; i++) {
                            const starImg = $("<img>").attr('src', "https://cdn-icons-png.flaticon.com/128/2893/2893811.png").attr('alt', '').css({
                                height: '15px',
                                width: '15px'
                            });
                            starsContainer.append(starImg);
                        }
    
                        const ratingCount = $("<span>").text('(250)');
                        const pElement = $("<p>").text('Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates libero amet sunt quam provident harum quo! Fugiat dolore molestiae eligendi, libero cupiditate velit ipsam nam sequi, odit, laboriosam illo facere!');
                        const priceElement = $("<div>").addClass('price').text(element.price);
    
                        const buttonContainer = $("<div>").addClass('button');
                        const buyLink = $("<a>").attr('href', '').addClass('buy').text('Buy Now');
                        const cartLink = $("<a>").attr('href', '').addClass('cart').text('Add to Cart');
    
                        previewContainer.append(imgElement1, imgElement2, h3Element, starsContainer, ratingCount, pElement, priceElement, buttonContainer);
                        buttonContainer.append(buyLink, cartLink);
    
                        re.empty().append(previewContainer);
    
                        imgElement1.on('click', () => {
                            re.removeAttr('style').empty();
                        });
                    });
                });
            });
    });
    


