window.onload=function(){

	var oBanner=document.getElementsByClassName("banner")[0];
	var oShow=document.getElementById("show");
    var oH3=oBanner.getElementsByTagName("h3")[0];
    var oLi=oBanner.getElementsByTagName("li");
	var pics=["images/img201801251508300.jpg","images/img201801251440250.jpg","images/img201801230051080.jpeg","images/img201801230008520.jpeg","images/img201801181654370.jpeg"];
	var text=["iOS 11.3将带来什么惊喜 重要更新都在这了","HomePod马上发售 全面了解这款苹果智能音箱","就是不升级 iOS 11系统占比现在仅为65%","销量未及预期 iPhone X或成苹果最短命旗舰","苹果：iOS很快更新 用户可以选择禁止降频"];
    var num=-1;
    setInterval(function(){
        num++;
        if(num<0) num=pics.length;
        if(num==pics.length) num=0;
        oShow.src=pics[num];
        oH3.innerHTML=text[num];
        for(var j=0;j<oLi.length;j++){
                oLi[j].className="";
            }
        oLi[num].className="on";

        for(var i=0;i<oLi.length;i++){
            oLi[i].index=i;
            oLi[i].onclick=function(){
                for(var j=0;j<oLi.length;j++){
                    oLi[j].className="";
                }
                this.className="on";
                if(this.index<0) this.index=pics.length;
                if(this.index==pics.length) this.index=0;
                oShow.src=pics[this.index];
                oH3.innerHTML=text[this.index];   
            }
        }
        
        
    },2000)
}