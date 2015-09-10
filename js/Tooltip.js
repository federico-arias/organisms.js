    if(!document.querySelector('.tooltip')) return;
    var i=1,
        ttips = document.getElementsByClassName('tooltip'),
        l=ttips.length;

    console.log(ttips.length + ttips[0]);
    for(i;i<=l;i++) {
        //wrap it in sup with text i
        var sup = document.createTextNode('[' + i + ']'),
            ix = i - 1,
            ref = document.createElement('span');

        ref.className = 'reference';
        ref.appendChild(sup);
        ttips[ix].parentElement.insertBefore(ref, ttips[ix]);
        ref.appendChild(ttips[ix]);
        ttips[ix].parentElement.addEventListener('click', toggleTT);
    }

    function toggleTT() {
        //if visibility:visible, hide
        var tT = this.lastChild,
            l = tT.offsetWidth/2 - 5,
            t = tT.children[0].offsetHeight + tT.parentElement.offsetHeight + 5;
        
        tT.style.top = '-' + t + 'px';
        tT.style.left = '-' + l + 'px';
        tT.style.visibility = tT.style.visibility == 'visible' ? 'hidden' : 'visible';
    }

    as = Array.prototype.slice.call(document.getElementsByTagName('a'));
    as.forEach(function(a, i) {
        a.addEventListener('click', function(ev) {
            ev.stopPropagation;
        });
    });