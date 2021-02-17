// js for menu slider

    function openBar()
    {
        document.getElementById('nav').style.transform = "translate(00vw)"
        document.getElementById('open-btn').style.display='none'
        document.getElementById('close-btn').style.display='block'

    }
    function closeBar()
    {
        document.getElementById('nav').style.transform = "translate(-100vw)"
        document.getElementById('open-btn').style.display='block'
        document.getElementById('close-btn').style.display='none'

    }


