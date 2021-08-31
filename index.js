let btn = document.querySelector('button')
let div = document.querySelector('div')

btn.onclick = function()
{
    if(div.classList.contains('btnDark'))
    {
        div.classList.toggle('btnDark')
        btn.innerText = 'Dark Mode';
        btn.classList = 'btnDark'
    }
    else
    {
        div.classList.toggle('btnDark')
        btn.innerText = 'Light Mode';
        btn.classList = 'btnLight';
    }
}