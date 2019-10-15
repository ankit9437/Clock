	const seh=document.querySelector(".sec");
	const mih=document.querySelector(".min");
	const hoh=document.querySelector(".hour");
	function setda()
	{
	    const da = new Date();
		const sec=da.getSeconds();
		const seang=((sec/60)*360 )+90;
		seh.style.transform=`rotate(${seang}deg)`;
		const min=da.getMinutes();
		const miang=((min/60)*360) +90;
		mih.style.transform=`rotate(${miang}deg)`;
		const hr=da.getHours()
		const hrang=((hr/12)*360) +90;
		hoh.style.transform=`rotate(${hrang}deg)`;
   	}
	setInterval(setda,1000);
	setda();

