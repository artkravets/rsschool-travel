var elm, buf, this$ = this;
this.crslList.style.cssText = 'transition: margin '+this.options.speed+'ms ease;';
this.crslList.style.marginLeft = '-' + this.elemWidth + 'px';
setTimeout(function() {
	this$.crslList.style.cssText = 'transition: none;';
	elm = this$.crslList.firstElementChild;
	buf = elm.cloneNode(true); this$.crslList.appendChild(buf);
	this$.crslList.removeChild(elm)
	this$.crslList.style.marginLeft = '0px'
}, this.options.speed);