let foods=[
{
	id:1,
	name:"Dindigul Thalappakatti",
	cuisine:"South Indian, North Indian",
	imgurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/x3d6cifz8rw0ssv4jqwk",
	rating:4.4,
	time:"34 minits",
	amount:500
},
{
	id:2,
	name:"KFC",
	cuisine:"American, Snacks",
	imgurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bdcd233971b7c81bf77e1fa4471280eb",
	rating:4.1,
	time:"31 minits",
	amount:400
},
{
	id:3,
	name:"Star malabar",
	cuisine:"South Indian",
	imgurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/s3tg8dldtoi2t8fvodjs",
	rating:4.2,
	time:"26 minits",
	amount:200
},
{
	id:4,
	name:"Pandhal Cake Shop",
	cuisine:"Kakkanad, Edappally | Change Outlet",
	imgurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ufoidiletnquihcuwrnh",
	rating:4.3,
	time:"22 minits",
	amount:150
},
{
	id:5,
	name:"Thaal Kitchen",
	cuisine:"North Indian, Beverages",
	imgurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/dxpwrrsfmww25bnndgzf",
	rating:3.9,
	time:"18 minits",
	amount:200
},
{
	id:6,
	name:"Mughal Biriyani",
	cuisine:"Biryani, Beverages",
	imgurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/wkzj9sl670palebphvae",
	rating:3.9,
	time:"25 minits",
	amount:250
},
{
	id:7,
	name:"Burger King",
	cuisine:"Burgers, American",
	imgurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/of4ylxfff12qbmcrexux",
	rating:4.2,
	time:"32 minits",
	amount:350
},
{
	id:8,
	name:"Falooda Nation",
	cuisine:"Desserts, Beverages",
	imgurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/n54tpd2chjww4lmgvcyl",
	rating:4.1,
	time:"37 minits",
	amount:400
}

]

let container=document.querySelector(".container");

let card=document.createElement("div");
	card.classList.add("row")
	container.appendChild(card);
	
foods.forEach(function(e){
	
	let div1=document.createElement("div");
	div1.classList.add("col");
	card.appendChild(div1);
	let img=document.createElement("img");
	img.src=e.imgurl;
	div1.appendChild(img);
	
	let head=document.createElement("h3");
		head.innerText=e.name;
		div1.appendChild(head);
		
		let h4=document.createElement("h4");
		h4.innerText=e.cuisine;
		div1.appendChild(h4);
		
		
		let content=document.createElement("div");
			content.setAttribute("class","flex");
			div1.appendChild(content);
			
			
			
			let stars=document.createElement("div");
			stars.setAttribute("class","add1");
			content.appendChild(stars);
			
			let icon=document.createElement("i");
			icon.setAttribute("class","bi bi-star")
			stars.appendChild(icon);
			
			
			
			let rat=document.createElement("span");
			rat.innerText=e.rating;
			stars.appendChild(rat);
			
			
			
			let time=document.createElement("div");
			content.appendChild(time);
			let ti=document.createElement("h4");
			ti.innerText=e.time;
			time.appendChild(ti);
			
			let amount=document.createElement("div");
			content.appendChild(amount);
			let amt=document.createElement("h4");
			amt.innerText=e.amount;
			amount.appendChild(amt);
			
			
			let div2=document.createElement("div");
			div2.classList.add("incre");
			div1.appendChild(div2);
			
			let btn=document.createElement("button");
			btn.innerHTML="-";
			div2.appendChild(btn);
			
			btn.addEventListener("click",function(){
				if(inp.value>0){
					--inp.value;
				}
			})
			
			let inp=document.createElement("input");
			inp.value="0";
			div2.appendChild(inp);
			
			let incree=document.createElement("button");
			incree.innerHTML="+";
			div2.appendChild(incree);
			
			incree.addEventListener("click",function(){
				++inp.value;
			})
			
	
	
})

	