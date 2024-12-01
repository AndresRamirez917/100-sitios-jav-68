async function getData() {
    const result = await fetch('https://thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    const coctail = await result.json();
    console.log(coctail);
    const randomDrinks = coctail.drinks.sort(()=>0.5 - Math.random()).slice(0,6)
    coctail.drinks.forEach(element => {
        const box = document.createRange().createContextualFragment(`
            
                <div class="flex-box-1 box-1">
                    <img src="${element.strDrinkThumb}" alt="">
                    <h3>${element.strDrink}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores molestias esse a illum sequi, tenetur consequuntur perspiciatis quisquam! Accusamus nulla sed atque, saepe nam dolor.</p>
                    <a href="">Learn more</a>
                </div>
            
            `)
            const my_workrows = document.querySelector('.mywork-row');
            my_workrows.append(box)
    });
}

getData()