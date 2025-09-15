const AllButtons = document.querySelectorAll('.container .card button')
AllButtons.forEach(btn =>
    btn.onclick  = ()=>{
        let card = btn.parentElement
        let title = card.querySelector('.title').innerText
        let phone_number = "+918928429706"
        let message = `Hello, I am interested in purchasing this product: ${title}. Please provide more details.`
        let text = encodeURIComponent(message)

        window.open(`https://wa.me/${phone_number}?text=${text}`)
    }
)