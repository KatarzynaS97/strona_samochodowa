const dots = document.querySelectorAll('.dot');


dots.forEach(dot => {
    dot.addEventListener('click', function(){
        dots.forEach(d => d.classList.remove('border-[#0147FF]'));

        this.classList.add('border-[#0147FF]');
    });
});

