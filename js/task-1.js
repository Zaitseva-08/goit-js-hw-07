
        const categoriesList = document.querySelectorAll('#categories .item')
    
        console.log(`Number of categories: ${categoriesList.length}`)
    
        categoriesList.forEach(category => {
            const categoryName = category.querySelector('h2')
            const elementsCount = category.querySelectorAll('ul li')
    
            console.log(`Category: ${categoryName.textContent}`)
            console.log(`Elements: ${elementsCount.length}`)
        })
        