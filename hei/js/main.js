let counterElements = [...document.querySelectorAll(".counter")];
let tabStat = [false,false,false];

function counter(element)
{
    let max = parseInt(element.textContent);
    let start;
    let interval;

    if(max === 555)
    {
        start = 0;
        element.textContent = start;
        interval = 7;
    }
    else
    {
        start = -50;
        interval = 1;
    }

    let temp = setInterval(()=>
    {
        start++;
        element.textContent = start;
        if(start == max)
        {
            element.classList.remove("counter")
            clearInterval(temp);
        }
    },interval);
}

// activate the counter when scroll
function counterOnScroll()
{
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry,index)=>{
            if(entry.isIntersecting)
            {
                if(tabStat[index] == false)
                {
                    counter(entry.target);       
                }

                tabStat[index] = true;
            }
        });
    });
    counterElements.forEach((element)=>observer.observe(element));
}
counterOnScroll();