
//——————————————————————————————————————
//
//面部扫描 SVG 动画生成器 by BigXiXi
//渣代码，轻喷XD
//有问题欢迎联系 xixi@bigxixi.com
//
//——————————————————————————————————————
var svgID='faceElemrnts';
function genSVG(dotInfo,imgW,imgH,imgURL){

    var ptsTemp = dotInfo.detail[0].pts.split(';');
    var faceSize = ptsTemp[16].split(',')[0] - ptsTemp[0].split(',')[0];
    var Rfix=1.5*faceSize/266;//整体缩放点大小

    var dotR1=0.5*Rfix*10.294;
    var dotR2=0.5*Rfix*9.417;
    var dotR3=0.5*Rfix*7.568;
    var dotR4=0.5*Rfix*5.886;
    var dotR5=0.5*Rfix*4.036
    var dotR6=0.5*Rfix*9.15;
    var dotR7=0.5*Rfix*2.523;
    var dotR8=0.5*Rfix*3.363;
    var dotR9=0.5*Rfix*4.036;
    var dotR10=0.5*Rfix*5.381;
    var dotR11=0.5*Rfix*6.054;
    var dotR12=0.5*Rfix*7.339;
    var dotR13=0.5*Rfix*8.745;
    var dotR14=0.5*Rfix*10.09;
    var dotR15=0.5*Rfix*13.15;
    var dotR16=0.5*Rfix*6.863;
    var lineWidth=0.8*Rfix/1.2;
    var lineWidthBig=3*Rfix/1.2;
    var dotColor='#FFFFFF';
    var lineColor='#FFFFFF';
    var durTime=1;
    var lineDur=0.1;
    var lineDelay=2;
    var timeGap=40;
    var dotDelay=0;
    var dotGroup1=[23,22];
    var dotGroup2=[24,21];
    var dotGroup3=[25,20];
    var dotGroup4=[26,19];
    var dotGroup5=[27,18];
    var dotGroup6=[72,70,69,46,43,71,40,37,52,49,55,58];
    var dotGroup7=[17,1];
    var dotGroup8=[16,2];
    var dotGroup9=[15,3];
    var dotGroup10=[14,4];
    var dotGroup11=[13,5];
    var dotGroup12=[12,6];
    var dotGroup13=[11,7];
    var dotGroup14=[10,8];
    var dotGroup15=[9];
    var dotGroup16=[36,32];
    
    var dotNotShow=[38,39,41,42,44,45,48,47,28,29,30,31,33,34,35,50,51,53,54,56,57,59,60,61,62,63,64,65,66,67,68];
    var lines={
        l1:[69,37],//注意顺序，表式方向
        l2:[37,40],
        l3:[40,71],
        l4:[43,71],
        l5:[46,43],
        l6:[70,46],
        l7:[70,55],
        l8:[70,10],
        l9:[10,55],
        l10:[10,9],
        l11:[8,9],
        l12:[8,49],
        l13:[69,8],
        l14:[69,49],
        l15:[71,32],
        l16:[72,32],
        l17:[32,49],
        l18:[52,49],
        l19:[49,58],
        l20:[55,58],
        l21:[52,55],
        l22:[36,55],
        l23:[72,36],
        l24:[71,36],
        l25:[71,72],
        l26:[72,52],
        l27:[52,58],
        l28:[58,9],
        l29:[72,49],
        l30:[72,55]
    };
    
    var lineGroup0=["l13","l8"];
    var lineGroup1_1=["l1","l6"];
    var lineGroup1_2=["l14","l7"];
    var lineGroup2=["l2","l5"];
    var lineGroup3_1=["l3","l4"];
    var lineGroup3_2=["l10","l11"];
    var lineGroup4=["l12","l9"];
    var lineGroup5=["l15","l24","l25"];
    var lineGroup6=["l16","l23","l26"];
    var lineGroup7=["l17","l18","l21","l22","l27"];
    var lineGroup8=["l19","l20","l28",'l29','l30'];
    
    var dotXY = dotInfo.detail[0].pts.split(';');
    var dotCount = dotXY.length;

    function cmp(a,b){
    return a[1]-b[1];
    }

    var dotXYsplit=[];
    for(var j=0;j<dotCount;j++){
        dotXYsplit[j]=dotXY[j].split(',');
    }
    //计算4个额外的点
    var p1={x:Number(dotXYsplit[1-1][0]),y:Number(dotXYsplit[1-1][1])};
    var p2={x:Number(dotXYsplit[2-1][0]),y:Number(dotXYsplit[2-1][1])};
    var p3={x:Number(dotXYsplit[40-1][0]),y:Number(dotXYsplit[40-1][1])};
    var p4={x:Number(dotXYsplit[37-1][0]),y:Number(dotXYsplit[37-1][1])};

    var p5={x:Number(dotXYsplit[16-1][0]),y:Number(dotXYsplit[16-1][1])};
    var p6={x:Number(dotXYsplit[17-1][0]),y:Number(dotXYsplit[17-1][1])};
    var p7={x:Number(dotXYsplit[43-1][0]),y:Number(dotXYsplit[43-1][1])};
    var p8={x:Number(dotXYsplit[46-1][0]),y:Number(dotXYsplit[46-1][1])};

    var F1 = segmentsIntr(p1,p2,p3,p4);
    var F2 = segmentsIntr(p5,p6,p7,p8);

    var xF1=F1.x;
    var yF1=F1.y

    var xF2=F2.x;
    var yF2=F2.y;

    var xF3=0.5*(Number(dotXYsplit[40-1][0])+Number(dotXYsplit[43-1][0]));
    yF3=0.5*(Number(dotXYsplit[40-1][1])+Number(dotXYsplit[43-1][1]));

    var xF4=0.5*(Number(dotXYsplit[31-1][0])+Number(dotXYsplit[34-1][0]));
    var yF4=0.5*(Number(dotXYsplit[31-1][1])+Number(dotXYsplit[34-1][1]));

    dotXYsplit.push([xF1,yF1]);
    dotXYsplit.push([xF2,yF2]);
    dotXYsplit.push([xF3,yF3]);
    dotXYsplit.push([xF4,yF4]);
    var sortedDots = JSON.parse(JSON.stringify(dotXYsplit));
        sortedDots.sort(cmp);

    for(var k=0;k<dotCount+4;k++){
        sortedDots[k]=sortedDots[k].toString();
    }

    //生成svg代码
    var theSVG = '<svg id="'+svgID+'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="'+imgW+'" height="'+imgH+'" viewBox="0 0 '+imgW+' '+imgH+'">\n'+
    '  <g fill="none" fill-rule="evenodd">\n'+
    ' <image id="bgIMG" width="'+imgW+'" height="'+imgH+'" xlink:href="'+imgURL+'"/>\n';
    //生成定位点
    for(var i=0;i<dotCount+4;i++){
        var xx=dotXYsplit[i][0];
        var yy=dotXYsplit[i][1];

        //模拟扫描效果，从上至下时间步进
        var delayFixed = Number(dotDelay) + Number(sortedDots.indexOf(([xx,yy]).toString()))/Number(timeGap);
        var dotRfixed = 0;
        if(dotGroup1.indexOf((i+1)) != -1){
            dotRfixed = dotR1;
        }
        if(dotGroup2.indexOf((i+1)) != -1){
            dotRfixed = dotR2;
        }
        if(dotGroup3.indexOf((i+1)) != -1){
            dotRfixed = dotR3;
        }
        if(dotGroup4.indexOf((i+1)) != -1){
            dotRfixed = dotR4;
        }
        if(dotGroup5.indexOf((i+1)) != -1){
            dotRfixed = dotR5;
        }
        if(dotGroup6.indexOf((i+1)) != -1){
            dotRfixed = dotR6;
        }
        if(dotGroup7.indexOf((i+1)) != -1){
            dotRfixed = dotR7;
        }
        if(dotGroup8.indexOf((i+1)) != -1){
            dotRfixed = dotR8;
        }
        if(dotGroup9.indexOf((i+1)) != -1){
            dotRfixed = dotR9;
        }
        if(dotGroup10.indexOf((i+1)) != -1){
            dotRfixed = dotR10;
        }
        if(dotGroup11.indexOf((i+1)) != -1){
            dotRfixed = dotR11;
        }

        if(dotGroup12.indexOf((i+1)) != -1){
            dotRfixed = dotR12;
        }
        if(dotGroup13.indexOf((i+1)) != -1){
            dotRfixed = dotR13;
        }
        if(dotGroup14.indexOf((i+1)) != -1){
            dotRfixed = dotR14;
        }
        if(dotGroup15.indexOf((i+1)) != -1){
            dotRfixed = dotR15;
        }
        if(dotGroup16.indexOf((i+1)) != -1){
            dotRfixed = dotR16;
        }
        if(dotNotShow.indexOf((i+1)) != -1){
            theSVG += '    <circle id="dot'+(i+1)+'" cx="'+xx+'" cy="'+yy+'" r="'+dotRfixed+'" fill="'+dotColor+'" opacity="0">\n'+
            '       <animate attributeName="opacity" values="0;1;0;1;0;1;1;0;0.5;0" begin="'+delayFixed+'s" dur="'+durTime+'s" fill="freeze"/>\n</circle>\n';
        }else{
            theSVG += '    <circle id="dot'+(i+1)+'" cx="'+xx+'" cy="'+yy+'" r="'+dotRfixed+'" fill="'+dotColor+'" opacity="0">\n'+
            '       <animate attributeName="opacity" values="0;1;0;1;1;1;1;1" begin="'+delayFixed+'s" dur="'+durTime+'s" fill="freeze"/>\n</circle>\n';
        }
    }
    //生成连线
    var linesArr = Object.keys(lines);
    for(var m=0;m<linesArr.length;m++){
        var lBegin = lines[linesArr[m].toString()][0];
        var lEnd = lines[linesArr[m].toString()][1];
        var lLength = Math.sqrt(Math.pow((dotXYsplit[lEnd-1][0]-dotXYsplit[lBegin-1][0]),2)+Math.pow((dotXYsplit[lEnd-1][1]-dotXYsplit[lBegin-1][1]),2));
        var lineDash1="0 "+lLength;
        var lineDash2=lLength+" "+lLength;
        var lPath = 'M'+dotXYsplit[lBegin-1].toString()+' L'+dotXYsplit[lEnd-1].toString();
        var lineDelayFixed = lineDelay*100;
        var lineDurFixed = lineDur;

        if(lineGroup0.indexOf(linesArr[m]) != -1){
            lineDelayFixed = Number(lineDelay);
            lineDurFixed = Number(lineDur)*3;
        }
        if(lineGroup1_1.indexOf(linesArr[m]) != -1){
            lineDelayFixed = Number(lineDelay);
            lineDurFixed = Number(lineDur);
        }
        if(lineGroup1_2.indexOf(linesArr[m]) != -1){
            lineDelayFixed = Number(lineDelay)+Number(lineDur)*3;
            lineDurFixed = Number(lineDur)*2;
        }        
        if(lineGroup2.indexOf(linesArr[m]) != -1){
            lineDelayFixed = Number(lineDelay)+Number(lineDur);
            lineDurFixed = Number(lineDur);
        }
        if(lineGroup3_1.indexOf(linesArr[m]) != -1){
            lineDelayFixed = Number(lineDelay)+Number(lineDur)*2;
            lineDurFixed = Number(lineDur);
        }
        if(lineGroup3_2.indexOf(linesArr[m]) != -1){
            lineDelayFixed = Number(lineDelay)+Number(lineDur)*3;
            lineDurFixed = Number(lineDur);
        }
        if(lineGroup4.indexOf(linesArr[m]) != -1){
            lineDelayFixed = Number(lineDelay)+Number(lineDur)*4;
            lineDurFixed = Number(lineDur);
        }
        
        if(lineGroup5.indexOf(linesArr[m]) != -1){
            lineDelayFixed = Number(lineDelay)+Number(lineDur)*5;
            lineDurFixed = Number(lineDur);
        }
        if(lineGroup6.indexOf(linesArr[m]) != -1){
            lineDelayFixed = Number(lineDelay)+Number(lineDur)*6;
            lineDurFixed = Number(lineDur);
        }
        if(lineGroup7.indexOf(linesArr[m]) != -1){
            lineDelayFixed = Number(lineDelay)+Number(lineDur)*7;
            lineDurFixed = Number(lineDur);
        }
        if(lineGroup8.indexOf(linesArr[m]) != -1){
            lineDelayFixed = Number(lineDelay)+Number(lineDur)*8;
            lineDurFixed = Number(lineDur);
        }

        lineWidthFixed = lineWidth;
        if(m>=24 && m<=27){
            lineWidthFixed = lineWidthBig;
        }
        theSVG +='    <path id="'+linesArr[m]+'" stroke="'+lineColor+'" d="'+lPath+'" stroke-width="'+lineWidthFixed+'" stroke-dasharray="'+lineDash1+'">\n'+
                '      <animate attributeName="stroke-dasharray" from="'+lineDash1+'"  to="'+lineDash2+'"  dur="'+lineDurFixed+'s" begin="'+lineDelayFixed+'s" fill="freeze" />'+
                '\n\t</path>\n';

    }


    theSVG += '  </g>\n'+'</svg>';
    return theSVG;
}

function genSVG3(dotInfo,imgW,imgH,imgURL){

    var ptsTemp = dotInfo.detail[0].pts.split(';');
    var faceSize = ptsTemp[16].split(',')[0] - ptsTemp[0].split(',')[0];
    var Rfix=1.5*faceSize/266;//整体缩放点大小

    var dotR1=0.5*Rfix*10.294;
    var dotR2=0.5*Rfix*9.417;
    var dotR3=0.5*Rfix*7.568;
    var dotR4=0.5*Rfix*5.886;
    var dotR5=0.5*Rfix*4.036
    var dotR6=0.5*Rfix*9.15;
    var dotR7=0.5*Rfix*2.523;
    var dotR8=0.5*Rfix*3.363;
    var dotR9=0.5*Rfix*4.036;
    var dotR10=0.5*Rfix*5.381;
    var dotR11=0.5*Rfix*6.054;
    var dotR12=0.5*Rfix*7.339;
    var dotR13=0.5*Rfix*8.745;
    var dotR14=0.5*Rfix*10.09;
    var dotR15=0.5*Rfix*13.15;
    var dotR16=0.5*Rfix*6.863;
    var lineWidth=0.8*Rfix/1.2;;
    var lineWidthBig=3*Rfix/1.2;;
    var lineWidthGreen=2*Rfix/1.2;;
    var dotColor='#FFFFFF';
    var lineColor='#FFFFFF';
    var dotGreen = '#00F200';
    var durTime=0.3;
    var lineDur=0.3;
    var lineDelay=0.1;
    var timeGap=100;
    var dotDelay=0;
    var dotGroup1=[23,22];
    var dotGroup2=[24,21];
    var dotGroup3=[25,20];
    var dotGroup4=[26,19];
    var dotGroup5=[27,18];
    var dotGroup6=[72,70,69,46,43,71,40,37,52,49,55,58];
    var dotGroup7=[17,1];
    var dotGroup8=[16,2];
    var dotGroup9=[15,3];
    var dotGroup10=[14,4];
    var dotGroup11=[13,5];
    var dotGroup12=[12,6];
    var dotGroup13=[11,7];
    var dotGroup14=[10,8];
    var dotGroup15=[9];
    var dotGroup16=[36,32];
    var dotGroup17=[73,74,75,76];
    //var dotFadeOut=[37,40,43,46,32,36,72,49,52,55,58];
    var dotFadeOut=[49,55];
    var dotGroup000002=[69,71,70,9];
    var line000002=[[69,71],[71,70],[71,9]];
    var line000003=[[69,70],[69,82],[73,77],[73,83],[74,78],[74,84],[71,9],[75,79],[75,85],[76,80],[76,86],[70,81]];
    
    var dotNotShow=[37,40,43,46,72,52,58,32,36,38,39,41,42,44,45,48,47,28,29,30,31,33,34,35,50,51,53,54,56,57,59,60,61,62,63,64,65,66,67,68,77,78,79,80];
    var linesNotShow=['l25','l26','l27','l28','l16','l23','l19','l20','l21','l18','l29','l30'];
    
    var lines={
        l1:[69,37],//注意顺序，表式方向
        l2:[37,40],
        l3:[40,71],
        l4:[43,71],
        l5:[46,43],
        l6:[70,46],
        l7:[70,55],
        l8:[70,10],
        l9:[10,55],
        l10:[10,9],
        l11:[8,9],
        l12:[8,49],
        l13:[69,8],
        l14:[69,49],
        l15:[71,32],
        l16:[72,32],
        l17:[32,49],
        l18:[52,49],
        l19:[49,58],
        l20:[55,58],
        l21:[52,55],
        l22:[36,55],
        l23:[72,36],
        l24:[71,36],
        l25:[71,72],
        l26:[72,52],
        l27:[52,58],
        l28:[58,9],
        l29:[72,49],
        l30:[72,55]
    };
    
    var lineGroup0=["l13","l8"];
    var lineGroup1_1=["l1","l6"];
    var lineGroup1_2=["l14","l7"];
    var lineGroup2=["l2","l5"];
    var lineGroup3_1=["l3","l4"];
    var lineGroup3_2=["l10","l11"];
    var lineGroup4=["l12","l9"];
    var lineGroup5=["l15","l24","l25"];
    var lineGroup6=["l16","l23","l26"];
    var lineGroup7=["l17","l18","l21","l22","l27"];
    var lineGroup8=["l19","l20","l28"];
    var dotXY = dotInfo.detail[0].pts.split(';');
    var dotCount = dotXY.length;

    function cmp(a,b){
    return a[1]-b[1];
    }

    var dotXYsplit=[];
    for(var j=0;j<dotCount;j++){
        dotXYsplit[j]=dotXY[j].split(',');
    }
    //计算4个额外的点
    var p1={x:Number(dotXYsplit[1-1][0]),y:Number(dotXYsplit[1-1][1])};
    var p2={x:Number(dotXYsplit[2-1][0]),y:Number(dotXYsplit[2-1][1])};
    var p3={x:Number(dotXYsplit[40-1][0]),y:Number(dotXYsplit[40-1][1])};
    var p4={x:Number(dotXYsplit[37-1][0]),y:Number(dotXYsplit[37-1][1])};

    var p5={x:Number(dotXYsplit[16-1][0]),y:Number(dotXYsplit[16-1][1])};
    var p6={x:Number(dotXYsplit[17-1][0]),y:Number(dotXYsplit[17-1][1])};
    var p7={x:Number(dotXYsplit[43-1][0]),y:Number(dotXYsplit[43-1][1])};
    var p8={x:Number(dotXYsplit[46-1][0]),y:Number(dotXYsplit[46-1][1])};

    var F1 = segmentsIntr(p1,p2,p3,p4);
    var F2 = segmentsIntr(p5,p6,p7,p8);

    var xF1=F1.x;
    var yF1=F1.y

    var xF2=F2.x;
    var yF2=F2.y;

    var xF3=0.5*(Number(dotXYsplit[40-1][0])+Number(dotXYsplit[43-1][0]));
    var yF3=0.5*(Number(dotXYsplit[40-1][1])+Number(dotXYsplit[43-1][1]));

    var xF4=0.5*(Number(dotXYsplit[31-1][0])+Number(dotXYsplit[34-1][0]));
    var yF4=0.5*(Number(dotXYsplit[31-1][1])+Number(dotXYsplit[34-1][1]));

    dotXYsplit.push([xF1,yF1]);
    dotXYsplit.push([xF2,yF2]);
    dotXYsplit.push([xF3,yF3]);
    dotXYsplit.push([xF4,yF4]);
    //垂线交点
    dotXYsplit.push(chuixian(dotXYsplit[70-1],dotXYsplit[69-1],dotXYsplit[37-1]));
    dotXYsplit.push(chuixian(dotXYsplit[70-1],dotXYsplit[69-1],dotXYsplit[40-1]));
    dotXYsplit.push(chuixian(dotXYsplit[70-1],dotXYsplit[69-1],dotXYsplit[43-1]));
    dotXYsplit.push(chuixian(dotXYsplit[70-1],dotXYsplit[69-1],dotXYsplit[46-1]));
    //垂线端点
    dotXYsplit.push(chuixian(dotXYsplit[73-1],dotXYsplit[37-1],dotXYsplit[6-1]));
    dotXYsplit.push(chuixian(dotXYsplit[74-1],dotXYsplit[40-1],dotXYsplit[8-1]));
    dotXYsplit.push(chuixian(dotXYsplit[75-1],dotXYsplit[43-1],dotXYsplit[10-1]));
    dotXYsplit.push(chuixian(dotXYsplit[76-1],dotXYsplit[46-1],dotXYsplit[12-1]));

    dotXYsplit.push(chuixian1(dotXYsplit[70-1],dotXYsplit[69-1],dotXYsplit[13-1]));
    dotXYsplit.push(chuixian1(dotXYsplit[69-1],dotXYsplit[70-1],dotXYsplit[5-1]));
    
    dotXYsplit.push(outDot(dotXYsplit[77-1],dotXYsplit[73-1],3,50));
    dotXYsplit.push(outDot(dotXYsplit[78-1],dotXYsplit[74-1],3,35));
    dotXYsplit.push(outDot(dotXYsplit[79-1],dotXYsplit[75-1],3,35));
    dotXYsplit.push(outDot(dotXYsplit[80-1],dotXYsplit[76-1],3,50));
    //
    var sortedDots = JSON.parse(JSON.stringify(dotXYsplit));
        sortedDots.sort(cmp);

    for(var k=0;k<dotXYsplit.length;k++){
        sortedDots[k]=sortedDots[k].toString();
    }

    //生成svg代码
    var theSVG = '<svg id="'+svgID+'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="'+imgW+'" height="'+imgH+'" viewBox="0 0 '+imgW+' '+imgH+'">\n'+
    '  <g fill="none" fill-rule="evenodd">\n'+
    ' <image id="bgIMG" width="'+imgW+'" height="'+imgH+'" xlink:href="'+imgURL+'"/>\n';
    //生成连线
    var linesArr = Object.keys(lines);
    for(var m=0;m<linesArr.length;m++){
        var lBegin = lines[linesArr[m].toString()][0];
        var lEnd = lines[linesArr[m].toString()][1];
        var lLength = Math.sqrt(Math.pow((dotXYsplit[lEnd-1][0]-dotXYsplit[lBegin-1][0]),2)+Math.pow((dotXYsplit[lEnd-1][1]-dotXYsplit[lBegin-1][1]),2));
        var lineDash1="0 "+lLength;
        var lineDash2=lLength+" "+lLength;
        var lPath = 'M'+dotXYsplit[lBegin-1].toString()+' L'+dotXYsplit[lEnd-1].toString();
        var lineDelayFixed = lineDelay;
        var lineDurFixed = lineDur;
        // if(lineGroup8.indexOf(linesArr[m]) != -1){
        //     lineDelayFixed = Number(lineDelay)+Number(lineDur)*8;
        //     lineDurFixed = Number(lineDur);
        // }

        lineWidthFixed = lineWidth;
        if(m>=24 && m<=27){
            lineWidthFixed = lineWidthBig;
        }
        if(linesNotShow.indexOf(linesArr[m]) != -1){
            continue;
        }else{
            theSVG +='    <path id="'+linesArr[m]+'" stroke="'+lineColor+'" d="'+lPath+'" stroke-width="'+lineWidthFixed+'" stroke-dasharray="'+lineDash2+'">\n'+
            //'      <animate attributeName="stroke-dasharray" from="'+lineDash1+'"  to="'+lineDash2+'"  dur="'+lineDurFixed+'s" begin="'+lineDelayFixed+'s" fill="freeze" />'+
            '\n\t</path>\n';
            theSVG += '      <animate xlink:href="#l'+(m+1)+'" attributeName="opacity" from="1" to="0"  dur="'+lineDurFixed+'" begin="'+lineDur+'s" fill="freeze" calcMode="spline"  keySplines="0.215, 0.61, 0.355, 1"/>';
              
        }
    }
    //生成定位点
    for(var i=0;i<dotXYsplit.length;i++){
        var xx=dotXYsplit[i][0];
        var yy=dotXYsplit[i][1];

        //模拟扫描效果，从上至下时间步进
        var delayFixed = Number(dotDelay) + Number(sortedDots.indexOf(([xx,yy]).toString()))/Number(timeGap);
        var dotRfixed = 0;
        var dotColorFixed = dotColor;
        if(dotGroup1.indexOf((i+1)) != -1){
            dotRfixed = dotR1;
        }
        if(dotGroup2.indexOf((i+1)) != -1){
            dotRfixed = dotR2;
        }
        if(dotGroup3.indexOf((i+1)) != -1){
            dotRfixed = dotR3;
        }
        if(dotGroup4.indexOf((i+1)) != -1){
            dotRfixed = dotR4;
        }
        if(dotGroup5.indexOf((i+1)) != -1){
            dotRfixed = dotR5;
        }
        if(dotGroup6.indexOf((i+1)) != -1){
            dotRfixed = dotR6;
        }
        if(dotGroup7.indexOf((i+1)) != -1){
            dotRfixed = dotR7;
        }
        if(dotGroup8.indexOf((i+1)) != -1){
            dotRfixed = dotR8;
        }
        if(dotGroup9.indexOf((i+1)) != -1){
            dotRfixed = dotR9;
        }
        if(dotGroup10.indexOf((i+1)) != -1){
            dotRfixed = dotR10;
        }
        if(dotGroup11.indexOf((i+1)) != -1){
            dotRfixed = dotR11;
        }
        if(dotGroup12.indexOf((i+1)) != -1){
            dotRfixed = dotR12;
        }
        if(dotGroup13.indexOf((i+1)) != -1){
            dotRfixed = dotR13;
        }
        if(dotGroup14.indexOf((i+1)) != -1){
            dotRfixed = dotR14;
        }
        if(dotGroup15.indexOf((i+1)) != -1){
            dotRfixed = dotR15;
        }
        if(dotGroup16.indexOf((i+1)) != -1){
            dotRfixed = dotR16;
        }
        
        var dotAlpha = 1;
        if(dotGroup17.indexOf((i+1)) != -1){
            dotAlpha = 0;
            dotRfixed = dotR1;
            dotColorFixed = dotGreen;
            theSVG += '      <animate xlink:href="#dot'+(i+1)+'" attributeName="opacity" values="0;1"  dur="'+durTime+'s" begin="'+delayFixed+'s" fill="freeze" calcMode="spline"  keySplines="0.215, 0.61, 0.355, 1"/>';
        }
        if(dotNotShow.indexOf((i+1)) != -1){
            theSVG += '    <circle id="dot'+(i+1)+'" cx="'+xx+'" cy="'+yy+'" r="'+dotRfixed+'" fill="'+dotColorFixed+'" opacity="0"/>\n';
            //'       <animate attributeName="opacity" values="0;1;0;1;0;1;1;0;0.5;0" begin="'+delayFixed+'s" dur="'+durTime+'s" fill="freeze"/>\n</circle>\n';
        }else{
            theSVG += '    <circle id="dot'+(i+1)+'" cx="'+xx+'" cy="'+yy+'" r="'+dotRfixed+'" fill="'+dotColorFixed+'" opacity="'+dotAlpha+'"/>\n';
            //'       <animate attributeName="opacity" values="0;1;0;1;1;1;1;1" begin="'+delayFixed+'s" dur="'+durTime+'s" fill="freeze"/>\n</circle>\n';
        }
        if(dotFadeOut.indexOf((i+1)) != -1){
            theSVG += '      <animate xlink:href="#dot'+(i+1)+'" attributeName="opacity" values="1;0"  dur="'+durTime+'s" begin="'+delayFixed+'s" fill="freeze" calcMode="spline"  keySplines="0.215, 0.61, 0.355, 1"/>\n';
      
        }
        if(dotGroup000002.indexOf((i+1)) != -1){
            var ind = dotGroup000002.indexOf((i+1));
            theSVG += '    <circle id="dotGreen'+(i+1)+'" cx="'+xx+'" cy="'+yy+'" r="'+dotRfixed+'" fill="'+dotGreen+'" opacity="1">\n'+
            '       <animate attributeName="opacity" from="1" to="0" begin="0s" dur="'+durTime+'s" fill="freeze"/>\n</circle>\n';
           
        }
    }
        theSVG += '      <animate xlink:href="#dot69" attributeName="fill" from="'+dotColor+'" to="'+dotGreen+'"  dur="0.1s" begin="0s" fill="freeze" calcMode="spline"  keySplines="0.215, 0.61, 0.355, 1"/>\n';
        theSVG += '      <animate xlink:href="#dot70" attributeName="fill" from="'+dotColor+'" to="'+dotGreen+'"  dur="0.1s" begin="'+lineDur+'s" fill="freeze" calcMode="spline"  keySplines="0.215, 0.61, 0.355, 1"/>\n';
        //初始绿线消失
        for(var n=0;n<line000002.length;n++){
            var lBegin = line000002[n][0];
            var lEnd = line000002[n][1];
            var lLength = Math.sqrt(Math.pow((dotXYsplit[lEnd-1][0]-dotXYsplit[lBegin-1][0]),2)+Math.pow((dotXYsplit[lEnd-1][1]-dotXYsplit[lBegin-1][1]),2));
            var lineDash1="0 "+lLength;
            var lineDash2=lLength+" "+lLength;
            var lPath = 'M'+dotXYsplit[lBegin-1].toString()+' L'+dotXYsplit[lEnd-1].toString();
            var lineDelayFixed = durTime;
            var lineDurFixed = durTime;
            var lineWidthFixed = lineWidthGreen;
            // if(n == 2) {
            //     lineDurFixed = 2*durTime;
            // }
    
            theSVG +='    <path id="lineGreen2_'+n+'" stroke="'+dotGreen+'" d="'+lPath+'" stroke-width="'+lineWidthFixed+'" stroke-dasharray="'+lineDash2+'">\n'+
                    '      <animate attributeName="opacity" from="1"  to="0"  dur="'+lineDurFixed+'s" begin="'+lineDelayFixed+'s" fill="freeze" />'+
                    '\n\t</path>\n';
        }  
        //新绿线动画
    for(var n=0;n<line000003.length;n++){
        var lBegin = line000003[n][0];
        var lEnd = line000003[n][1];
        var lLength = Math.sqrt(Math.pow((dotXYsplit[lEnd-1][0]-dotXYsplit[lBegin-1][0]),2)+Math.pow((dotXYsplit[lEnd-1][1]-dotXYsplit[lBegin-1][1]),2));
        var lineDash1="0 "+lLength;
        var lineDash2=lLength+" "+lLength;
        var lPath = 'M'+dotXYsplit[lBegin-1].toString()+' L'+dotXYsplit[lEnd-1].toString();
        var lineDelayFixed = (n+1)*lineDelay;
        var lineDurFixed = lineDur;
        var lineWidthFixed = lineWidthGreen;
        var colorFixed = dotGreen;
        if(n == 6) {
            colorFixed = dotColor;
            lineWidthFixed = lineWidth;
        }


        // if(n == 0){
        //     theSVG += 
        //     '    <path id="lineGreen_1'+n+'" stroke="'+colorFixed+'" d="'+lPath+'" stroke-width="'+lineWidthFixed+'" stroke-dasharray="'+lineDash2+'" stroke-dashoffset="'+lLength+'"/>\n'+
        //     '      <animate attributeName="stroke-dashoffset" xlink:href="lineGreen_10" values="'+lLength+';0" dur="'+lineDurFixed+'s" begin="'+lineDelayFixed+'s" fill="freeze"/>\n';
                
        // }else{
        theSVG +='    <path id="lineGreen_1'+n+'" stroke="'+colorFixed+'" d="'+lPath+'" stroke-width="'+lineWidthFixed+'" stroke-dasharray="'+lineDash2+'" stroke-dashoffset="'+lLength+'">\n'+
                '      <animate attributeName="stroke-dashoffset" values="'+lLength+';0"  dur="'+lineDurFixed+'s" begin="'+lineDelayFixed+'s" fill="freeze" calcMode="spline"  keySplines="0.215, 0.61, 0.355, 1"/>\n'+
                '\t</path>\n';//from="'+lineDash1+'"  to="'+lineDash2+'"
        //}
    }
    theSVG += '  </g>\n'+'</svg>';
    return theSVG;
}

function genSVG2(dotInfo,imgW,imgH,imgURL){


    var ptsTemp = dotInfo.detail[0].pts.split(';');
    var faceSize = ptsTemp[16].split(',')[0] - ptsTemp[0].split(',')[0];
    var Rfix=1.5*faceSize/266;//整体缩放点大小
 
    var dotR1=0.5*Rfix*10.294;
    var dotR2=0.5*Rfix*9.417;
    var dotR3=0.5*Rfix*7.568;
    var dotR4=0.5*Rfix*5.886;
    var dotR5=0.5*Rfix*4.036
    var dotR6=0.5*Rfix*9.15;
    var dotR7=0.5*Rfix*2.523;
    var dotR8=0.5*Rfix*3.363;
    var dotR9=0.5*Rfix*4.036;
    var dotR10=0.5*Rfix*5.381;
    var dotR11=0.5*Rfix*6.054;
    var dotR12=0.5*Rfix*7.339;
    var dotR13=0.5*Rfix*8.745;
    var dotR14=0.5*Rfix*10.09;
    var dotR15=0.5*Rfix*13.15;
    var dotR16=0.5*Rfix*6.863;
    var lineWidth=0.8*Rfix/1.2;;
    var lineWidthBig=3*Rfix/1.2;;
    var lineWidthGreen=3*Rfix/1.2;;
    var dotColor='#FFFFFF';
    var dotGreen='#00F200';
    var lineColor='#FFFFFF';
    var durTime=0.2;
    var lineDur=0.5;
    var lineDelay=2;
    var timeGap=40;
    var dotDelay=0;
    var dotGroup1=[23,22];
    var dotGroup2=[24,21];
    var dotGroup3=[25,20];
    var dotGroup4=[26,19];
    var dotGroup5=[27,18];
    var dotGroup6=[72,70,69,46,43,71,40,37,52,49,55,58];
    var dotGroup7=[17,1];
    var dotGroup8=[16,2];
    var dotGroup9=[15,3];
    var dotGroup10=[14,4];
    var dotGroup11=[13,5];
    var dotGroup12=[12,6];
    var dotGroup13=[11,7];
    var dotGroup14=[10,8];
    var dotGroup15=[9];
    var dotGroup16=[36,32];
    var dotGroup000002=[69,71,70,9];
    var line000002=[[69,71],[71,70],[71,9]];
    
    var dotNotShow=[38,39,41,42,44,45,48,47,28,29,30,31,33,34,35,50,51,53,54,56,57,59,60,61,62,63,64,65,66,67,68];
    var dotFadeOut1=[72,52,58,32,36];
    var dotFadeOut2=[37,40,43,46];
    
    var linesFadeOut=['l25','l26','l27','l28','l16','l23','l19','l20','l21','l18','l29','l30'];
    var lines={
        l1:[69,37],//注意顺序，表式方向
        l2:[37,40],
        l3:[40,71],
        l4:[43,71],
        l5:[46,43],
        l6:[70,46],
        l7:[70,55],
        l8:[70,10],
        l9:[10,55],
        l10:[10,9],
        l11:[8,9],
        l12:[8,49],
        l13:[69,8],
        l14:[69,49],
        l15:[71,32],
        l16:[72,32],
        l17:[32,49],
        l18:[52,49],
        l19:[49,58],
        l20:[55,58],
        l21:[52,55],
        l22:[36,55],
        l23:[72,36],
        l24:[71,36],
        l25:[71,72],
        l26:[72,52],
        l27:[52,58],
        l28:[58,9],
        l29:[72,49],
        l30:[72,55]
    };
    
    var lineGroup0=["l13","l8"];
    var lineGroup1_1=["l1","l6"];
    var lineGroup1_2=["l14","l7"];
    var lineGroup2=["l2","l5"];
    var lineGroup3_1=["l3","l4"];
    var lineGroup3_2=["l10","l11"];
    var lineGroup4=["l12","l9"];
    var lineGroup5=["l15","l24","l25"];
    var lineGroup6=["l16","l23","l26"];
    var lineGroup7=["l17","l18","l21","l22","l27"];
    var lineGroup8=["l19","l20","l28"];
    var dotXY = dotInfo.detail[0].pts.split(';');
    var dotCount = dotXY.length;

    function cmp(a,b){
    return a[1]-b[1];
    }

    var dotXYsplit=[];
    for(var j=0;j<dotCount;j++){
        dotXYsplit[j]=dotXY[j].split(',');
    }
    //计算4个额外的点
    var p1={x:Number(dotXYsplit[1-1][0]),y:Number(dotXYsplit[1-1][1])};
    var p2={x:Number(dotXYsplit[2-1][0]),y:Number(dotXYsplit[2-1][1])};
    var p3={x:Number(dotXYsplit[40-1][0]),y:Number(dotXYsplit[40-1][1])};
    var p4={x:Number(dotXYsplit[37-1][0]),y:Number(dotXYsplit[37-1][1])};

    var p5={x:Number(dotXYsplit[16-1][0]),y:Number(dotXYsplit[16-1][1])};
    var p6={x:Number(dotXYsplit[17-1][0]),y:Number(dotXYsplit[17-1][1])};
    var p7={x:Number(dotXYsplit[43-1][0]),y:Number(dotXYsplit[43-1][1])};
    var p8={x:Number(dotXYsplit[46-1][0]),y:Number(dotXYsplit[46-1][1])};

    var F1 = segmentsIntr(p1,p2,p3,p4);
    var F2 = segmentsIntr(p5,p6,p7,p8);

    var xF1=F1.x;
    var yF1=F1.y

    var xF2=F2.x;
    var yF2=F2.y;

    var xF3=0.5*(Number(dotXYsplit[40-1][0])+Number(dotXYsplit[43-1][0]));
    var yF3=0.5*(Number(dotXYsplit[40-1][1])+Number(dotXYsplit[43-1][1]));

    var xF4=0.5*(Number(dotXYsplit[31-1][0])+Number(dotXYsplit[34-1][0]));
    var yF4=0.5*(Number(dotXYsplit[31-1][1])+Number(dotXYsplit[34-1][1]));

    dotXYsplit.push([xF1,yF1]);
    dotXYsplit.push([xF2,yF2]);
    dotXYsplit.push([xF3,yF3]);
    dotXYsplit.push([xF4,yF4]);
    var sortedDots = JSON.parse(JSON.stringify(dotXYsplit));
        sortedDots.sort(cmp);

    for(var k=0;k<dotCount+4;k++){
        sortedDots[k]=sortedDots[k].toString();
    }

    //生成svg代码
    var theSVG = '<svg id="'+svgID+'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="'+imgW+'" height="'+imgH+'" viewBox="0 0 '+imgW+' '+imgH+'">\n'+
    '  <g fill="none" fill-rule="evenodd">\n'+
    ' <image id="bgIMG" width="'+imgW+'" height="'+imgH+'" xlink:href="'+imgURL+'"/>\n';
    //生成连线
    var linesArr = Object.keys(lines);
    for(var m=0;m<linesArr.length;m++){
        var lBegin = lines[linesArr[m].toString()][0];
        var lEnd = lines[linesArr[m].toString()][1];
        var lLength = Math.sqrt(Math.pow((dotXYsplit[lEnd-1][0]-dotXYsplit[lBegin-1][0]),2)+Math.pow((dotXYsplit[lEnd-1][1]-dotXYsplit[lBegin-1][1]),2));
        var lineDash1="0 "+lLength;
        var lineDash2=lLength+" "+lLength;
        var lPath = 'M'+dotXYsplit[lBegin-1].toString()+' L'+dotXYsplit[lEnd-1].toString();
        var lineDelayFixed = lineDelay*100;
        var lineDurFixed = lineDur;

        if(lineGroup0.indexOf(linesArr[m]) != -1){
            lineDelayFixed = Number(lineDelay);
            lineDurFixed = Number(lineDur)*3;
        }
        if(lineGroup1_1.indexOf(linesArr[m]) != -1){
            lineDelayFixed = Number(lineDelay);
            lineDurFixed = Number(lineDur);
        }
        if(lineGroup1_2.indexOf(linesArr[m]) != -1){
            lineDelayFixed = Number(lineDelay)+Number(lineDur)*3;
            lineDurFixed = Number(lineDur)*2;
        }        
        if(lineGroup2.indexOf(linesArr[m]) != -1){
            lineDelayFixed = Number(lineDelay)+Number(lineDur);
            lineDurFixed = Number(lineDur);
        }
        if(lineGroup3_1.indexOf(linesArr[m]) != -1){
            lineDelayFixed = Number(lineDelay)+Number(lineDur)*2;
            lineDurFixed = Number(lineDur);
        }
        if(lineGroup3_2.indexOf(linesArr[m]) != -1){
            lineDelayFixed = Number(lineDelay)+Number(lineDur)*3;
            lineDurFixed = Number(lineDur);
        }
        if(lineGroup4.indexOf(linesArr[m]) != -1){
            lineDelayFixed = Number(lineDelay)+Number(lineDur)*4;
            lineDurFixed = Number(lineDur);
        }
        
        if(lineGroup5.indexOf(linesArr[m]) != -1){
            lineDelayFixed = Number(lineDelay)+Number(lineDur)*5;
            lineDurFixed = Number(lineDur);
        }
        if(lineGroup6.indexOf(linesArr[m]) != -1){
            lineDelayFixed = Number(lineDelay)+Number(lineDur)*6;
            lineDurFixed = Number(lineDur);
        }
        if(lineGroup7.indexOf(linesArr[m]) != -1){
            lineDelayFixed = Number(lineDelay)+Number(lineDur)*7;
            lineDurFixed = Number(lineDur);
        }
        if(lineGroup8.indexOf(linesArr[m]) != -1){
            lineDelayFixed = Number(lineDelay)+Number(lineDur)*8;
            lineDurFixed = Number(lineDur);
        }

        lineWidthFixed = lineWidth;
        if(m>=24 && m<=27){
            lineWidthFixed = lineWidthBig;
        }
        theSVG +='    <path id="'+linesArr[m]+'" stroke="'+lineColor+'" d="'+lPath+'" stroke-width="'+lineWidthFixed+'">\n'+
        //theSVG +='    <path id="'+linesArr[m]+'" stroke="'+lineColor+'" d="'+lPath+'" stroke-width="'+lineWidthFixed+'" stroke-dasharray="'+lineDash1+'">\n'+
                //'      <animate attributeName="stroke-dasharray" from="'+lineDash1+'"  to="'+lineDash2+'"  dur="'+lineDurFixed+'s" begin="'+lineDelayFixed+'s" fill="freeze" />'+
                '\n\t</path>\n';
        if(linesFadeOut.indexOf(linesArr[m]) != -1){
            delayFixed=4*durTime;
            theSVG += '\t\t<animate xlink:href="#'+linesArr[m]+'" attributeName="opacity" values="1;0" begin="'+delayFixed+'s" dur="'+durTime+'s" fill="freeze"/>\n';
        
        }

    }
    //生成定位点
    for(var i=0;i<dotCount+4;i++){
        var xx=dotXYsplit[i][0];
        var yy=dotXYsplit[i][1];

        //模拟扫描效果，从上至下时间步进
        delayFixed = Number(dotDelay) + Number(sortedDots.indexOf(([xx,yy]).toString()))/Number(timeGap);
        dotRfixed = 0;
        if(dotGroup1.indexOf((i+1)) != -1){
            dotRfixed = dotR1;
        }
        if(dotGroup2.indexOf((i+1)) != -1){
            dotRfixed = dotR2;
        }
        if(dotGroup3.indexOf((i+1)) != -1){
            dotRfixed = dotR3;
        }
        if(dotGroup4.indexOf((i+1)) != -1){
            dotRfixed = dotR4;
        }
        if(dotGroup5.indexOf((i+1)) != -1){
            dotRfixed = dotR5;
        }
        if(dotGroup6.indexOf((i+1)) != -1){
            dotRfixed = dotR6;
        }
        if(dotGroup7.indexOf((i+1)) != -1){
            dotRfixed = dotR7;
        }
        if(dotGroup8.indexOf((i+1)) != -1){
            dotRfixed = dotR8;
        }
        if(dotGroup9.indexOf((i+1)) != -1){
            dotRfixed = dotR9;
        }
        if(dotGroup10.indexOf((i+1)) != -1){
            dotRfixed = dotR10;
        }
        if(dotGroup11.indexOf((i+1)) != -1){
            dotRfixed = dotR11;
        }
        if(dotGroup12.indexOf((i+1)) != -1){
            dotRfixed = dotR12;
        }
        if(dotGroup13.indexOf((i+1)) != -1){
            dotRfixed = dotR13;
        }
        if(dotGroup14.indexOf((i+1)) != -1){
            dotRfixed = dotR14;
        }
        if(dotGroup15.indexOf((i+1)) != -1){
            dotRfixed = dotR15;
        }
        if(dotGroup16.indexOf((i+1)) != -1){
            dotRfixed = dotR16;
        }
        if(dotNotShow.indexOf((i+1)) != -1){
            theSVG += '    <circle id="dot'+(i+1)+'" cx="'+xx+'" cy="'+yy+'" r="'+dotRfixed+'" fill="'+dotColor+'" opacity="1"/>\n';
            //'       <animate attributeName="opacity" values="0;1;0;1;0;1;1;0;0.5;0" begin="'+delayFixed+'s" dur="'+durTime+'s" fill="freeze"/>\n</circle>\n';
        }else{

            theSVG += '    <circle id="dot'+(i+1)+'" cx="'+xx+'" cy="'+yy+'" r="'+dotRfixed+'" fill="'+dotColor+'" opacity="1"/>\n';
            //'       <animate attributeName="opacity" values="0;1;0;1;1;1;1;1" begin="'+delayFixed+'s" dur="'+durTime+'s" fill="freeze"/>\n</circle>\n';
            if(dotFadeOut2.indexOf((i+1)) != -1){
                delayFixed=2*durTime;
                theSVG += '\t\t<animate xlink:href="#dot'+(i+1)+'" attributeName="opacity" values="1;0" begin="'+delayFixed+'s" dur="'+durTime+'s" fill="freeze"/>\n';
            }
            if(dotFadeOut1.indexOf((i+1)) != -1){
                delayFixed=4*durTime;
                theSVG += '\t\t<animate xlink:href="#dot'+(i+1)+'" attributeName="opacity" values="1;0" begin="'+delayFixed+'s" dur="'+durTime+'s" fill="freeze"/>\n';
            }
            if(dotGroup000002.indexOf((i+1)) != -1){
                ind = dotGroup000002.indexOf((i+1));
                theSVG += '    <circle id="dotGreen'+(i+1)+'" cx="'+xx+'" cy="'+yy+'" r="'+dotRfixed+'" fill="'+dotGreen+'" opacity="0">\n'+
                '       <animate attributeName="opacity" from="0" to="1" begin="'+ind*durTime+'s" dur="'+durTime+'s" fill="freeze"/>\n</circle>\n';
               
            }
        }
    }
    //绿线动画
    for(var n=0;n<line000002.length;n++){
        var lBegin = line000002[n][0];
        var lEnd = line000002[n][1];
        var lLength = Math.sqrt(Math.pow((dotXYsplit[lEnd-1][0]-dotXYsplit[lBegin-1][0]),2)+Math.pow((dotXYsplit[lEnd-1][1]-dotXYsplit[lBegin-1][1]),2));
        var lineDash1="0 "+lLength;
        var lineDash2=lLength+" "+lLength;
        var lPath = 'M'+dotXYsplit[lBegin-1].toString()+' L'+dotXYsplit[lEnd-1].toString();
        var lineDelayFixed = (n+1)*durTime;
        var lineDurFixed = durTime;
        var lineWidthFixed = lineWidthGreen;
        if(n == 2) {
            lineDurFixed = 2*durTime;
        }

        theSVG +='    <path id="lineGreen_1'+n+'" stroke="'+dotGreen+'" d="'+lPath+'" stroke-width="'+lineWidthFixed+'" stroke-dasharray="'+lineDash1+'">\n'+
                '      <animate attributeName="stroke-dasharray" from="'+lineDash1+'"  to="'+lineDash2+'"  dur="'+lineDurFixed+'s" begin="'+lineDelayFixed+'s" fill="freeze" />'+
                '\n\t</path>\n';
    }

        theSVG += '  </g>\n'+'</svg>';
        return theSVG;
    }

function genSVG4(dotInfo,imgW,imgH,imgURL){

    var ptsTemp = dotInfo.detail[0].pts.split(';');
    var faceSize = ptsTemp[16].split(',')[0] - ptsTemp[0].split(',')[0];
    var Rfix=1.5*faceSize/266;//整体缩放点大小

    var dotR1=0.5*Rfix*10.294;
    var dotR2=0.5*Rfix*9.417;
    var dotR3=0.5*Rfix*7.568;
    var dotR4=0.5*Rfix*5.886;
    var dotR5=0.5*Rfix*4.036
    var dotR6=0.5*Rfix*9.15;
    var dotR7=0.5*Rfix*2.523;
    var dotR8=0.5*Rfix*3.363;
    var dotR9=0.5*Rfix*4.036;
    var dotR10=0.5*Rfix*5.381;
    var dotR11=0.5*Rfix*6.054;
    var dotR12=0.5*Rfix*7.339;
    var dotR13=0.5*Rfix*8.745;
    var dotR14=0.5*Rfix*10.09;
    var dotR15=0.5*Rfix*13.15;
    var dotR16=0.5*Rfix*6.863;
    var lineWidth=0.8*Rfix/1.2;;
    var lineWidthBig=3*Rfix/1.2;;
    var lineWidthGreen=2*Rfix/1.2;;
    var dotColor='#FFFFFF';
    var dotGreen='#00F200';
    var lineColor='#FFFFFF';
    var durTime=1;
    var lineDur=0.7;
    var lineDelay=0.05;
    var timeGap=40;
    var dotDelay=0;
    var dotGroup1=[23,22];
    var dotGroup2=[24,21];
    var dotGroup3=[25,20];
    var dotGroup4=[26,19];
    var dotGroup5=[27,18];
    var dotGroup6=[72,70,69,46,43,71,40,37,52,49,55,58];
    var dotGroup7=[17,1];
    var dotGroup8=[16,2];
    var dotGroup9=[15,3];
    var dotGroup10=[14,4];
    var dotGroup11=[13,5];
    var dotGroup12=[12,6];
    var dotGroup13=[11,7];
    var dotGroup14=[10,8];
    var dotGroup15=[9];
    var dotGroup16=[36,32];
    var dotGroup17=[73,74,75,76,77,78,79,80,81,82];
    var dotGroup000002=[69,71,70,9];
    var line000002=[[69,71],[71,70],[71,9]];
    
    var dotNotShow=[37,40,43,46,72,52,58,32,36,38,39,41,42,44,45,48,47,28,29,30,31,33,34,35,50,51,53,54,56,57,59,60,61,62,63,64,65,66,67,68];
    var linesNotShow=['l25','l26','l27','l28','l16','l23','l19','l20','l21','l18','l29','l30'];
    
    var lines={
        l1:[69,37],//注意顺序，表式方向
        l2:[37,40],
        l3:[40,71],
        l4:[43,71],
        l5:[46,43],
        l6:[70,46],
        l7:[70,55],
        l8:[70,10],
        l9:[10,55],
        l10:[10,9],
        l11:[8,9],
        l12:[8,49],
        l13:[69,8],
        l14:[69,49],
        l15:[71,32],
        l16:[72,32],
        l17:[32,49],
        l18:[52,49],
        l19:[49,58],
        l20:[55,58],
        l21:[52,55],
        l22:[36,55],
        l23:[72,36],
        l24:[71,36],
        l25:[71,72],
        l26:[72,52],
        l27:[52,58],
        l28:[58,9],
        l29:[72,49],
        l30:[72,55]
    };
    
    var lineGroup0=["l13","l8"];
    var lineGroup1_1=["l1","l6"];
    var lineGroup1_2=["l14","l7"];
    var lineGroup2=["l2","l5"];
    var lineGroup3_1=["l3","l4"];
    var lineGroup3_2=["l10","l11"];
    var lineGroup4=["l12","l9"];
    var lineGroup5=["l15","l24","l25"];
    var lineGroup6=["l16","l23","l26"];
    var lineGroup7=["l17","l18","l21","l22","l27"];
    var lineGroup8=["l19","l20","l28"];
    //var lineOut=["lo1","lo2","lo3","lo4","lo5","lo6","lo7","lo8","lo9","lo10"];
    var linesOut={
        lOut1:[9,73],
        lOut2:[9,74],
        lOut3:[9,75],
        lOut4:[9,76],
        lOut5:[9,77],
        lOut6:[9,78],
        lOut7:[9,79],
        lOut8:[9,80],
        lOut9:[9,81],
        lOut10:[9,82]
    }
    
    var dotXY = dotInfo.detail[0].pts.split(';');
    var dotCount = dotXY.length;

    function cmp(a,b){
    return a[1]-b[1];
    }

    var dotXYsplit=[];
    for(var j=0;j<dotCount;j++){
        dotXYsplit[j]=dotXY[j].split(',');
    }
    //计算4个额外的点
    var p1={x:Number(dotXYsplit[1-1][0]),y:Number(dotXYsplit[1-1][1])};
    var p2={x:Number(dotXYsplit[2-1][0]),y:Number(dotXYsplit[2-1][1])};
    var p3={x:Number(dotXYsplit[40-1][0]),y:Number(dotXYsplit[40-1][1])};
    var p4={x:Number(dotXYsplit[37-1][0]),y:Number(dotXYsplit[37-1][1])};

    var p5={x:Number(dotXYsplit[16-1][0]),y:Number(dotXYsplit[16-1][1])};
    var p6={x:Number(dotXYsplit[17-1][0]),y:Number(dotXYsplit[17-1][1])};
    var p7={x:Number(dotXYsplit[43-1][0]),y:Number(dotXYsplit[43-1][1])};
    var p8={x:Number(dotXYsplit[46-1][0]),y:Number(dotXYsplit[46-1][1])};

    var F1 = segmentsIntr(p1,p2,p3,p4);
    var F2 = segmentsIntr(p5,p6,p7,p8);

    var xF1=F1.x;
    var yF1=F1.y

    var xF2=F2.x;
    var yF2=F2.y;

    var xF3=0.5*(Number(dotXYsplit[40-1][0])+Number(dotXYsplit[43-1][0]));
    var yF3=0.5*(Number(dotXYsplit[40-1][1])+Number(dotXYsplit[43-1][1]));

    var xF4=0.5*(Number(dotXYsplit[31-1][0])+Number(dotXYsplit[34-1][0]));
    var yF4=0.5*(Number(dotXYsplit[31-1][1])+Number(dotXYsplit[34-1][1]));

    dotXYsplit.push([xF1,yF1]);
    dotXYsplit.push([xF2,yF2]);
    dotXYsplit.push([xF3,yF3]);
    dotXYsplit.push([xF4,yF4]);

    dotXYsplit.push(outDot(dotXYsplit[9-1],dotXYsplit[8-1],3,1));
    dotXYsplit.push(outDot(dotXYsplit[9-1],dotXYsplit[10-1],3,1));
    dotXYsplit.push(outDot(dotXYsplit[9-1],dotXYsplit[7-1],3,2));
    dotXYsplit.push(outDot(dotXYsplit[9-1],dotXYsplit[11-1],3,2));
    dotXYsplit.push(outDot(dotXYsplit[9-1],dotXYsplit[6-1],3,3));
    dotXYsplit.push(outDot(dotXYsplit[9-1],dotXYsplit[12-1],3,3));
    dotXYsplit.push(outDot(dotXYsplit[9-1],dotXYsplit[5-1],3,4));
    dotXYsplit.push(outDot(dotXYsplit[9-1],dotXYsplit[13-1],3,4));
    dotXYsplit.push(outDot(dotXYsplit[9-1],dotXYsplit[4-1],3,5));
    dotXYsplit.push(outDot(dotXYsplit[9-1],dotXYsplit[14-1],3,5));


    var sortedDots = JSON.parse(JSON.stringify(dotXYsplit));
        sortedDots.sort(cmp);

    for(var k=0;k<dotXYsplit.length;k++){
        sortedDots[k]=sortedDots[k].toString();
    }

    //生成svg代码
    var theSVG = '<svg id="'+svgID+'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="'+imgW+'" height="'+imgH+'" viewBox="0 0 '+imgW+' '+imgH+'">\n'+
    '  <g fill="none" fill-rule="evenodd">\n'+
    ' <image id="bgIMG" width="'+imgW+'" height="'+imgH+'" xlink:href="'+imgURL+'"/>\n';
    //生成定位点
    for(var i=0;i<dotXYsplit.length;i++){
        var xx=dotXYsplit[i][0];
        var yy=dotXYsplit[i][1];

        //模拟扫描效果，从上至下时间步进
        var delayFixed = Number(dotDelay) + Number(sortedDots.indexOf(([xx,yy]).toString()))/Number(timeGap);
        var dotRfixed = 0;
        var dotColorFixed = dotColor;
        if(dotGroup1.indexOf((i+1)) != -1){
            dotRfixed = dotR1;
        }
        if(dotGroup2.indexOf((i+1)) != -1){
            dotRfixed = dotR2;
        }
        if(dotGroup3.indexOf((i+1)) != -1){
            dotRfixed = dotR3;
        }
        if(dotGroup4.indexOf((i+1)) != -1){
            dotRfixed = dotR4;
        }
        if(dotGroup5.indexOf((i+1)) != -1){
            dotRfixed = dotR5;
        }
        if(dotGroup6.indexOf((i+1)) != -1){
            dotRfixed = dotR6;
        }
        if(dotGroup7.indexOf((i+1)) != -1){
            dotRfixed = dotR7;
        }
        if(dotGroup8.indexOf((i+1)) != -1){
            dotRfixed = dotR8;
        }
        if(dotGroup9.indexOf((i+1)) != -1){
            dotRfixed = dotR9;
        }
        if(dotGroup10.indexOf((i+1)) != -1){
            dotRfixed = dotR10;
        }
        if(dotGroup11.indexOf((i+1)) != -1){
            dotRfixed = dotR11;
        }
        if(dotGroup12.indexOf((i+1)) != -1){
            dotRfixed = dotR12;
        }
        if(dotGroup13.indexOf((i+1)) != -1){
            dotRfixed = dotR13;
        }
        if(dotGroup14.indexOf((i+1)) != -1){
            dotRfixed = dotR14;
        }
        if(dotGroup15.indexOf((i+1)) != -1){
            dotRfixed = dotR15;
        }
        if(dotGroup16.indexOf((i+1)) != -1){
            dotRfixed = dotR16;
        }
        if(dotGroup17.indexOf((i+1)) != -1){
            dotRfixed = 0;
            dotColorFixed = dotGreen;
        }
        if(dotNotShow.indexOf((i+1)) != -1){
            theSVG += '    <circle id="dot'+(i+1)+'" cx="'+xx+'" cy="'+yy+'" r="'+dotRfixed+'" fill="'+dotColorFixed+'" opacity="0"/>\n';
            //'       <animate attributeName="opacity" values="0;1;0;1;0;1;1;0;0.5;0" begin="'+delayFixed+'s" dur="'+durTime+'s" fill="freeze"/>\n</circle>\n';
        }else{
            theSVG += '    <circle id="dot'+(i+1)+'" cx="'+xx+'" cy="'+yy+'" r="'+dotRfixed+'" fill="'+dotColorFixed+'" opacity="1"/>\n';
            //'       <animate attributeName="opacity" values="0;1;0;1;1;1;1;1" begin="'+delayFixed+'s" dur="'+durTime+'s" fill="freeze"/>\n</circle>\n';
        }
        if(dotGroup000002.indexOf((i+1)) != -1){
            ind = dotGroup000002.indexOf((i+1));
            theSVG += '    <circle id="dotGreen'+(i+1)+'" cx="'+xx+'" cy="'+yy+'" r="'+dotRfixed+'" fill="'+dotGreen+'" opacity="1">\n'+
            '       <animate attributeName="opacity" from="1" to="0" begin="0s" dur="'+durTime+'s" fill="freeze"/>\n</circle>\n';
           
        }
    }
    //生成连线
    var linesArr = Object.keys(lines);
    for(var m=0;m<linesArr.length;m++){
        var lBegin = lines[linesArr[m].toString()][0];
        var lEnd = lines[linesArr[m].toString()][1];
        var lLength = Math.sqrt(Math.pow((dotXYsplit[lEnd-1][0]-dotXYsplit[lBegin-1][0]),2)+Math.pow((dotXYsplit[lEnd-1][1]-dotXYsplit[lBegin-1][1]),2));
        var lineDash1="0 "+lLength;
        var lineDash2=lLength+" "+lLength;
        var lPath = 'M'+dotXYsplit[lBegin-1].toString()+' L'+dotXYsplit[lEnd-1].toString();
        var lineDelayFixed = lineDelay;
        var lineDurFixed = lineDur;
        if(lineGroup8.indexOf(linesArr[m]) != -1){
            lineDelayFixed = Number(lineDelay)+Number(lineDur)*8;
            lineDurFixed = Number(lineDur);
        }

        lineWidthFixed = lineWidth;
        if(m>=24 && m<=27){
            lineWidthFixed = lineWidthBig;
        }
        if(linesNotShow.indexOf(linesArr[m]) != -1){
            continue;
        }else{
            theSVG +='    <path id="'+linesArr[m]+'" stroke="'+lineColor+'" d="'+lPath+'" stroke-width="'+lineWidthFixed+'" stroke-dasharray="'+lineDash2+'">\n'+
            //'      <animate attributeName="stroke-dasharray" from="'+lineDash1+'"  to="'+lineDash2+'"  dur="'+lineDurFixed+'s" begin="'+lineDelayFixed+'s" fill="freeze" />'+
            '\n\t</path>\n';
        }


    }
      //初始绿线消失
    for(var n=0;n<line000002.length;n++){
        var lBegin = line000002[n][0];
        var lEnd = line000002[n][1];
        var lLength = Math.sqrt(Math.pow((dotXYsplit[lEnd-1][0]-dotXYsplit[lBegin-1][0]),2)+Math.pow((dotXYsplit[lEnd-1][1]-dotXYsplit[lBegin-1][1]),2));
        var lineDash1="0 "+lLength;
        var lineDash2=lLength+" "+lLength;
        var lPath = 'M'+dotXYsplit[lBegin-1].toString()+' L'+dotXYsplit[lEnd-1].toString();
        var lineDelayFixed = 0;
        var lineDurFixed = 0.7;
        var lineWidthFixed = lineWidthGreen;
        // if(n == 2) {
        //     lineDurFixed = 2*durTime;
        // }

        theSVG +='    <path id="lineGreen2_'+n+'" stroke="'+dotGreen+'" d="'+lPath+'" stroke-width="'+lineWidthFixed+'" stroke-dasharray="'+lineDash2+'">\n'+
                '      <animate attributeName="opacity" from="1"  to="0"  dur="'+lineDurFixed+'s" begin="'+lineDelayFixed+'s" fill="freeze" />'+
                '\n\t</path>\n';
    }  
    //下巴尖儿的线
    var linesOutArr = Object.keys(linesOut);
    for(var j=0;j<linesOutArr.length;j++){
        var loBegin = linesOut[linesOutArr[j].toString()][0];
        var loEnd = linesOut[linesOutArr[j].toString()][1];
        var loLength = Math.sqrt(Math.pow((dotXYsplit[loEnd-1][0]-dotXYsplit[loBegin-1][0]),2)+Math.pow((dotXYsplit[loEnd-1][1]-dotXYsplit[loBegin-1][1]),2));
        var lineDash1="0 "+loLength;
        var lineDash2=loLength+" "+loLength;
        var lPath = 'M'+dotXYsplit[loBegin-1].toString()+' L'+dotXYsplit[loEnd-1].toString();
        var lineDelayFixed = lineDelay*j;
        var lineDurFixed = lineDur;
        var lineWidthFixed = lineWidthBig;
    
        theSVG +='    <path id="'+linesOutArr[j]+'" stroke="'+dotGreen+'" d="'+lPath+'" stroke-width="'+lineWidthFixed+'" stroke-dasharray="'+lineDash2+'" stroke-dashoffset="'+loLength+'">\n'+
        '      <animate attributeName="stroke-dashoffset" values="'+loLength+';0"  dur="'+lineDurFixed+'s" begin="'+lineDelayFixed+'s" fill="freeze" calcMode="spline"  keySplines="0.55, 0.055, 0.675, 0.19"/>'+
        '\n\t</path>\n';
    
    }
    theSVG += '  </g>\n'+'</svg>';
    return theSVG;
}

function genSVG5(dotInfo,imgW,imgH,imgURL){

    var ptsTemp = dotInfo.detail[0].pts.split(';');
    var faceSize = ptsTemp[16].split(',')[0] - ptsTemp[0].split(',')[0];
    var Rfix=1.5*faceSize/266;//整体缩放点大小

    var dotR1=0.5*Rfix*10.294;
    var dotR2=0.5*Rfix*9.417;
    var dotR3=0.5*Rfix*7.568;
    var dotR4=0.5*Rfix*5.886;
    var dotR5=0.5*Rfix*4.036
    var dotR6=0.5*Rfix*9.15;
    var dotR7=0.5*Rfix*2.523;
    var dotR8=0.5*Rfix*3.363;
    var dotR9=0.5*Rfix*4.036;
    var dotR10=0.5*Rfix*5.381;
    var dotR11=0.5*Rfix*6.054;
    var dotR12=0.5*Rfix*7.339;
    var dotR13=0.5*Rfix*8.745;
    var dotR14=0.5*Rfix*10.09;
    var dotR15=0.5*Rfix*13.15;
    var dotR16=0.5*Rfix*6.863;
    var dotR17=0.5*Rfix*3.381;
    var dotR18=0.5*Rfix*6;
    var lineWidth=0.8*Rfix/1.2;;
    var lineWidthBig=3*Rfix/1.2;;
    var lineWidthGreen=3*Rfix/1.2;;
    var dotColor='#FFFFFF';
    var dotGreen='#00F200';
    var lineColor='#FFFFFF';
    var durTime=0.2;
    var lineDur=0.5;
    var lineDelay=2;
    var timeGap=40;
    var dotDelay=0.5;
    var dotGroup1=[23,22];
    var dotGroup2=[24,21];
    var dotGroup3=[25,20];
    var dotGroup4=[26,19];
    var dotGroup5=[27,18];
    var dotGroup6=[69,70,71,49,55];
    var dotGroup7=[17,1];
    var dotGroup8=[16,2];
    var dotGroup9=[15,3];
    var dotGroup10=[14,4];
    var dotGroup11=[13,5];
    var dotGroup12=[12,6];
    var dotGroup13=[11,7];
    var dotGroup14=[10,8];
    var dotGroup15=[9];
    var dotGroup16=[];
    var dotGroupLips=[49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68];
    var dotGroup000002=[71,9];
    var dotGroup000002_1=[69,71,70,9];
    var line000002=[[69,71],[71,70],[71,9]];
    
    var dotNotShow=[72,36,58,32,37,52,40,43,46,38,39,41,42,44,45,48,47,28,29,30,31,33,34,35,50,51,53,54,56,57,59,60,61,62,63,64,65,66,67,68];
    var dotFadeOut1=[49,55,52,58,32,36];
    var dotFadeOut2=[37,40,43,46];
    
    var linesNotShow=['l25','l26','l27','l28','l16','l23','l19','l20','l21','l18','l29','l30'];
    var linesFadeOut=['l12','l14','l17','l15','l24','l22','l7','l9'];
    var linesFadeIn=['l25','l26','l27','l28'];
    
    var lines={
        l1:[69,37],//注意顺序，表式方向
        l2:[37,40],
        l3:[40,71],
        l4:[43,71],
        l5:[46,43],
        l6:[70,46],
        l7:[70,55],
        l8:[70,10],
        l9:[10,55],
        l10:[10,9],
        l11:[8,9],
        l12:[8,49],
        l13:[69,8],
        l14:[69,49],
        l15:[71,32],
        l16:[72,32],
        l17:[32,49],
        l18:[52,49],
        l19:[49,58],
        l20:[55,58],
        l21:[52,55],
        l22:[36,55],
        l23:[72,36],
        l24:[71,36],
        l25:[71,72],
        l26:[72,52],
        l27:[52,58],
        l28:[58,9],
        l29:[72,49],
        l30:[72,55]
    };
    
    var llines={
        ll1:[49,50],
        ll2:[50,51],
        ll3:[51,52],
        ll4:[52,53],
        ll5:[53,54],
        ll6:[54,55],
        ll7:[55,56],
        ll8:[56,57],
        ll9:[57,58],
        ll10:[58,59],
        ll11:[59,60],
        ll12:[60,49],
        ll13:[61,62],
        ll14:[62,63],
        ll15:[63,64],
        ll16:[64,65],
        ll17:[65,66],
        ll18:[66,67],
        ll19:[67,68],
        ll20:[61,49],
        ll21:[65,55],
        ll22:[68,61]
    }
    
    var lineGroup0=["l13","l8"];
    var lineGroup1_1=["l1","l6"];
    var lineGroup1_2=["l14","l7"];
    var lineGroup2=["l2","l5"];
    var lineGroup3_1=["l3","l4"];
    var lineGroup3_2=["l10","l11"];
    var lineGroup4=["l12","l9"];
    var lineGroup5=["l15","l24","l25"];
    var lineGroup6=["l16","l23","l26"];
    var lineGroup7=["l17","l18","l21","l22","l27"];
    var lineGroup8=["l19","l20","l28"];
    
    var dotXY = dotInfo.detail[0].pts.split(';');
    var dotCount = dotXY.length;

    function cmp(a,b){
    return a[1]-b[1];
    }

    var dotXYsplit=[];
    for(var j=0;j<dotCount;j++){
        dotXYsplit[j]=dotXY[j].split(',');
    }
    //计算4个额外的点
    var p1={x:Number(dotXYsplit[1-1][0]),y:Number(dotXYsplit[1-1][1])};
    var p2={x:Number(dotXYsplit[2-1][0]),y:Number(dotXYsplit[2-1][1])};
    var p3={x:Number(dotXYsplit[40-1][0]),y:Number(dotXYsplit[40-1][1])};
    var p4={x:Number(dotXYsplit[37-1][0]),y:Number(dotXYsplit[37-1][1])};

    var p5={x:Number(dotXYsplit[16-1][0]),y:Number(dotXYsplit[16-1][1])};
    var p6={x:Number(dotXYsplit[17-1][0]),y:Number(dotXYsplit[17-1][1])};
    var p7={x:Number(dotXYsplit[43-1][0]),y:Number(dotXYsplit[43-1][1])};
    var p8={x:Number(dotXYsplit[46-1][0]),y:Number(dotXYsplit[46-1][1])};

    var F1 = segmentsIntr(p1,p2,p3,p4);
    var F2 = segmentsIntr(p5,p6,p7,p8);

    var xF1=F1.x;
    var yF1=F1.y

    var xF2=F2.x;
    var yF2=F2.y;

    var xF3=0.5*(Number(dotXYsplit[40-1][0])+Number(dotXYsplit[43-1][0]));
    var yF3=0.5*(Number(dotXYsplit[40-1][1])+Number(dotXYsplit[43-1][1]));

    var xF4=0.5*(Number(dotXYsplit[31-1][0])+Number(dotXYsplit[34-1][0]));
    var yF4=0.5*(Number(dotXYsplit[31-1][1])+Number(dotXYsplit[34-1][1]));

    dotXYsplit.push([xF1,yF1]);
    dotXYsplit.push([xF2,yF2]);
    dotXYsplit.push([xF3,yF3]);
    dotXYsplit.push([xF4,yF4]);
    var sortedDots = JSON.parse(JSON.stringify(dotXYsplit));
        sortedDots.sort(cmp);

    for(var k=0;k<dotCount+4;k++){
        sortedDots[k]=sortedDots[k].toString();
    }

    //生成svg代码
    var theSVG = '<svg id="'+svgID+'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="'+imgW+'" height="'+imgH+'" viewBox="0 0 '+imgW+' '+imgH+'">\n'+
    '  <g fill="none" fill-rule="evenodd">\n'+
    ' <image id="bgIMG" width="'+imgW+'" height="'+imgH+'" xlink:href="'+imgURL+'"/>\n';
    //生成连线
    var linesArr = Object.keys(lines);
    for(var m=0;m<linesArr.length;m++){
        var lBegin = lines[linesArr[m].toString()][0];
        var lEnd = lines[linesArr[m].toString()][1];
        var lLength = Math.sqrt(Math.pow((dotXYsplit[lEnd-1][0]-dotXYsplit[lBegin-1][0]),2)+Math.pow((dotXYsplit[lEnd-1][1]-dotXYsplit[lBegin-1][1]),2));
        var lineDash1="0 "+lLength;
        var lineDash2=lLength+" "+lLength;
        var lPath = 'M'+dotXYsplit[lBegin-1].toString()+' L'+dotXYsplit[lEnd-1].toString();
        var lineDelayFixed = lineDelay*100;
        var lineDurFixed = lineDur;

        if(lineGroup0.indexOf(linesArr[m]) != -1){
            lineDelayFixed = Number(lineDelay);
            lineDurFixed = Number(lineDur)*3;
        }
        if(lineGroup1_1.indexOf(linesArr[m]) != -1){
            lineDelayFixed = Number(lineDelay);
            lineDurFixed = Number(lineDur);
        }
        if(lineGroup1_2.indexOf(linesArr[m]) != -1){
            lineDelayFixed = Number(lineDelay)+Number(lineDur)*3;
            lineDurFixed = Number(lineDur)*2;
        }        
        if(lineGroup2.indexOf(linesArr[m]) != -1){
            lineDelayFixed = Number(lineDelay)+Number(lineDur);
            lineDurFixed = Number(lineDur);
        }
        if(lineGroup3_1.indexOf(linesArr[m]) != -1){
            lineDelayFixed = Number(lineDelay)+Number(lineDur)*2;
            lineDurFixed = Number(lineDur);
        }
        if(lineGroup3_2.indexOf(linesArr[m]) != -1){
            lineDelayFixed = Number(lineDelay)+Number(lineDur)*3;
            lineDurFixed = Number(lineDur);
        }
        if(lineGroup4.indexOf(linesArr[m]) != -1){
            lineDelayFixed = Number(lineDelay)+Number(lineDur)*4;
            lineDurFixed = Number(lineDur);
        }
        
        if(lineGroup5.indexOf(linesArr[m]) != -1){
            lineDelayFixed = Number(lineDelay)+Number(lineDur)*5;
            lineDurFixed = Number(lineDur);
        }
        if(lineGroup6.indexOf(linesArr[m]) != -1){
            lineDelayFixed = Number(lineDelay)+Number(lineDur)*6;
            lineDurFixed = Number(lineDur);
        }
        if(lineGroup7.indexOf(linesArr[m]) != -1){
            lineDelayFixed = Number(lineDelay)+Number(lineDur)*7;
            lineDurFixed = Number(lineDur);
        }
        if(lineGroup8.indexOf(linesArr[m]) != -1){
            lineDelayFixed = Number(lineDelay)+Number(lineDur)*8;
            lineDurFixed = Number(lineDur);
        }

        lineWidthFixed = lineWidth;

        if(m>=24 && m<=27){
            lineWidthFixed = lineWidthBig;
        }
        if(linesNotShow.indexOf(linesArr[m]) != -1){
            lineWidthFixed = 0;
        }
        theSVG +='    <path id="'+linesArr[m]+'" stroke="'+lineColor+'" d="'+lPath+'" stroke-width="'+lineWidthFixed+'">\n'+
        //theSVG +='    <path id="'+linesArr[m]+'" stroke="'+lineColor+'" d="'+lPath+'" stroke-width="'+lineWidthFixed+'" stroke-dasharray="'+lineDash1+'">\n'+
                //'      <animate attributeName="stroke-dasharray" from="'+lineDash1+'"  to="'+lineDash2+'"  dur="'+lineDurFixed+'s" begin="'+lineDelayFixed+'s" fill="freeze" />'+
                '\n\t</path>\n';
        // if(line000002.indexOf(linesArr[m]) != -1){
 
        // }

    }

    var delayFixed=3*durTime;
    theSVG += '\t\t<animate xlink:href="#lineGreen_10" attributeName="opacity" values="1;0" begin="'+delayFixed+'s" dur="'+durTime+'s" fill="freeze"/>\n';
    theSVG += '\t\t<animate xlink:href="#lineGreen_11" attributeName="opacity" values="1;0" begin="'+delayFixed+'s" dur="'+durTime+'s" fill="freeze"/>\n';
    theSVG += '\t\t<animate xlink:href="#lineGreen_12" attributeName="opacity" values="1;0" begin="'+delayFixed+'s" dur="'+durTime+'s" fill="freeze"/>\n';

    for(var k=0;k<linesFadeOut.length;k++){
        theSVG += '\t\t<animate xlink:href="#'+linesFadeOut[k]+'" attributeName="opacity" values="1;0" begin="'+delayFixed+'s" dur="'+durTime+'s" fill="freeze"/>\n';
    }
    for(var k=0;k<linesFadeIn.length;k++){
        theSVG += '\t\t<animate xlink:href="#'+linesFadeIn[k]+'" attributeName="stroke-width" values="0;'+lineWidthBig+'" begin="'+delayFixed+'s" dur="'+durTime+'s" fill="freeze"/>\n';
    }
    theSVG += '\t\t<animate xlink:href="#dot8" attributeName="fill" from="'+dotColor+'" to="'+dotGreen+'" begin="'+delayFixed+'s" dur="'+durTime+'s" fill="freeze"/>\n';
    theSVG += '\t\t<animate xlink:href="#dot10" attributeName="fill" from="'+dotColor+'" to="'+dotGreen+'" begin="'+delayFixed+'s" dur="'+durTime+'s" fill="freeze"/>\n';

    //嘴唇的线
    var llinesArr = Object.keys(llines);
    for(var j=0;j<llinesArr.length;j++){
        var llBegin = llines[llinesArr[j].toString()][0];
        var llEnd = llines[llinesArr[j].toString()][1];
        var llLength = Math.sqrt(Math.pow((dotXYsplit[llEnd-1][0]-dotXYsplit[llBegin-1][0]),2)+Math.pow((dotXYsplit[llEnd-1][1]-dotXYsplit[llBegin-1][1]),2));
        var lineDash1="0 "+llLength;
        var lineDash2=llLength+" "+llLength;
        var lPath = 'M'+dotXYsplit[llBegin-1].toString()+' L'+dotXYsplit[llEnd-1].toString();
        var lineDelayFixed = lineDelay*100;
        var lineDurFixed = lineDur;
        var lineWidthFixed = lineWidth;
    
        theSVG +='    <path id="'+llinesArr[j]+'" stroke="'+dotGreen+'" d="'+lPath+'" stroke-width="'+lineWidthFixed+'" opacity="0">\n'+
        //theSVG +='    <path id="'+linesArr[m]+'" stroke="'+lineColor+'" d="'+lPath+'" stroke-width="'+lineWidthFixed+'" stroke-dasharray="'+lineDash1+'">\n'+
                '      <animate attributeName="opacity" values="0;1" begin="'+delayFixed+'s" dur="'+durTime+'s" fill="freeze"/>'+
                '\n\t</path>\n';
    
    }



    //生成定位点
    for(var i=0;i<dotCount+4;i++){
        var xx=dotXYsplit[i][0];
        var yy=dotXYsplit[i][1];

        //模拟扫描效果，从上至下时间步进
        var delayFixed = Number(dotDelay) + Number(sortedDots.indexOf(([xx,yy]).toString()))/Number(timeGap);
        var dotRfixed = 0;
        if(dotGroup1.indexOf((i+1)) != -1){
            dotRfixed = dotR1;
        }
        if(dotGroup2.indexOf((i+1)) != -1){
            dotRfixed = dotR2;
        }
        if(dotGroup3.indexOf((i+1)) != -1){
            dotRfixed = dotR3;
        }
        if(dotGroup4.indexOf((i+1)) != -1){
            dotRfixed = dotR4;
        }
        if(dotGroup5.indexOf((i+1)) != -1){
            dotRfixed = dotR5;
        }
        if(dotGroup6.indexOf((i+1)) != -1){
            dotRfixed = dotR6;
        }
        if(dotGroup7.indexOf((i+1)) != -1){
            dotRfixed = dotR7;
        }
        if(dotGroup8.indexOf((i+1)) != -1){
            dotRfixed = dotR8;
        }
        if(dotGroup9.indexOf((i+1)) != -1){
            dotRfixed = dotR9;
        }
        if(dotGroup10.indexOf((i+1)) != -1){
            dotRfixed = dotR10;
        }
        if(dotGroup11.indexOf((i+1)) != -1){
            dotRfixed = dotR11;
        }
        if(dotGroup12.indexOf((i+1)) != -1){
            dotRfixed = dotR12;
        }
        if(dotGroup13.indexOf((i+1)) != -1){
            dotRfixed = dotR13;
        }
        if(dotGroup14.indexOf((i+1)) != -1){
            dotRfixed = dotR14;
        }
        if(dotGroup15.indexOf((i+1)) != -1){
            dotRfixed = dotR15;
        }
        if(dotGroup16.indexOf((i+1)) != -1){
            dotRfixed = dotR16;
        }
        if(dotNotShow.indexOf((i+1)) != -1){
            theSVG += '    <circle id="dot'+(i+1)+'" cx="'+xx+'" cy="'+yy+'" r="'+dotRfixed+'" fill="'+dotColor+'" opacity="1"/>\n';
            //'       <animate attributeName="opacity" values="0;1;0;1;0;1;1;0;0.5;0" begin="'+delayFixed+'s" dur="'+durTime+'s" fill="freeze"/>\n</circle>\n';
        }else{

            theSVG += '    <circle id="dot'+(i+1)+'" cx="'+xx+'" cy="'+yy+'" r="'+dotRfixed+'" fill="'+dotColor+'" opacity="1"/>\n';
            //'       <animate attributeName="opacity" values="0;1;0;1;1;1;1;1" begin="'+delayFixed+'s" dur="'+durTime+'s" fill="freeze"/>\n</circle>\n';
            if(dotGroup000002.indexOf((i+1)) != -1){
                delayFixed=2*durTime;
                theSVG += '\t\t<animate xlink:href="#dotGreen'+(i+1)+'" attributeName="opacity" values="1;0" begin="'+delayFixed+'s" dur="'+durTime+'s" fill="freeze"/>\n';
            }
            if(dotFadeOut1.indexOf((i+1)) != -1){
                delayFixed=4*durTime;
                theSVG += '\t\t<animate xlink:href="#dot'+(i+1)+'" attributeName="opacity" values="1;0" begin="'+delayFixed+'s" dur="'+durTime+'s" fill="freeze"/>\n';
            }
            if(dotGroup000002_1.indexOf((i+1)) != -1){
                ind = dotGroup000002_1.indexOf((i+1));
                theSVG += '    <circle id="dotGreen'+(i+1)+'" cx="'+xx+'" cy="'+yy+'" r="'+dotRfixed+'" fill="'+dotGreen+'" opacity="1"/>\n'
                '       <animate attributeName="opacity" from="1" to="0" begin="'+ind*durTime+'s" dur="'+durTime+'s" fill="freeze"/>\n</circle>\n';
               
            }
        }
        if(dotGroupLips.indexOf((i+1)) != -1){
            dotIdx = dotGroupLips.indexOf((i+1));
            dotRfixed = dotR17;
            delayFixed = dotDelay+0.2*dotIdx*durTime;
            if((i+1) == 49 | (i+1) == 55 | (i+1) == 52 | (i+1) == 58){
                dotRfixed = dotR18;
            }
            theSVG += '    <circle id="dotLip'+(i+1)+'" cx="'+xx+'" cy="'+yy+'" r="'+dotRfixed+'" fill="'+dotGreen+'" opacity="0">\n'+
            '       <animate attributeName="opacity" values="0;1;0;1;0;1;1" begin="'+delayFixed+'s" dur="'+durTime+'s" fill="freeze"/>\n</circle>\n';
           
        }

    }
    //绿线动画
    for(var n=0;n<line000002.length;n++){
        var lBegin = line000002[n][0];
        var lEnd = line000002[n][1];
        var lLength = Math.sqrt(Math.pow((dotXYsplit[lEnd-1][0]-dotXYsplit[lBegin-1][0]),2)+Math.pow((dotXYsplit[lEnd-1][1]-dotXYsplit[lBegin-1][1]),2));
        var lineDash1="0 "+lLength;
        var lineDash2=lLength+" "+lLength;
        var lPath = 'M'+dotXYsplit[lBegin-1].toString()+' L'+dotXYsplit[lEnd-1].toString();
        var lineDelayFixed = (n+1)*durTime;
        var lineDurFixed = durTime;
        var lineWidthFixed = lineWidthGreen;
        if(n == 2) {
            lineDurFixed = 2*durTime;
        }

        theSVG +='    <path id="lineGreen_1'+n+'" stroke="'+dotGreen+'" d="'+lPath+'" stroke-width="'+lineWidthFixed+'" stroke-dasharray="'+lineDash2+'">\n'+
                // '      <animate attributeName="stroke-dasharray" from="'+lineDash1+'"  to="'+lineDash2+'"  dur="'+lineDurFixed+'s" begin="'+lineDelayFixed+'s" fill="freeze" />'+
                '\n\t</path>\n';
    }

        theSVG += '  </g>\n'+'</svg>';
        return theSVG;
    }

function genSVG6(dotInfo,imgW,imgH,imgURL){

    var ptsTemp = dotInfo.detail[0].pts.split(';');
    var faceSize = ptsTemp[16].split(',')[0] - ptsTemp[0].split(',')[0];
    var Rfix=1.5*faceSize/266;//整体缩放点大小

    var dotR1=0.5*Rfix*10.294;
    var dotR2=0.5*Rfix*9.417;
    var dotR3=0.5*Rfix*7.568;
    var dotR4=0.5*Rfix*5.886;
    var dotR5=0.5*Rfix*4.036
    var dotR6=0.5*Rfix*9.15;
    var dotR7=0.5*Rfix*2.523;
    var dotR8=0.5*Rfix*3.363;
    var dotR9=0.5*Rfix*4.036;
    var dotR10=0.5*Rfix*5.381;
    var dotR11=0.5*Rfix*6.054;
    var dotR12=0.5*Rfix*7.339;
    var dotR13=0.5*Rfix*8.745;
    var dotR14=0.5*Rfix*10.09;
    var dotR15=0.5*Rfix*13.15;
    var dotR16=0.5*Rfix*6.863;
    var lineWidth=0.8*Rfix/1.2;;
    var lineWidthBig=3*Rfix/1.2;;
    var dotColor='#FFFFFF';
    var lineColor='#FFFFFF';
    var durTime=1;
    var lineDur=0.1;
    var lineDelay=0;
    var timeGap=40;
    var dotDelay=0;
    var dotGroup1=[23,22];
    var dotGroup2=[24,21];
    var dotGroup3=[25,20];
    var dotGroup4=[26,19];
    var dotGroup5=[27,18];
    var dotGroup6=[72,70,69,46,43,71,40,37,52,49,55,58];
    var dotGroup7=[17,1];
    var dotGroup8=[16,2];
    var dotGroup9=[15,3];
    var dotGroup10=[14,4];
    var dotGroup11=[13,5];
    var dotGroup12=[12,6];
    var dotGroup13=[11,7];
    var dotGroup14=[10,8];
    var dotGroup15=[9];
    var dotGroup16=[36,32];
    
    var dotNotShow=[38,39,41,42,44,45,48,47,28,29,30,31,33,34,35,50,51,53,54,56,57,59,60,61,62,63,64,65,66,67,68];
    var lines={
        l1:[69,37],//注意顺序，表式方向
        l2:[37,40],
        l3:[40,71],
        l4:[43,71],
        l5:[46,43],
        l6:[70,46],
        l7:[70,55],
        l8:[70,10],
        l9:[10,55],
        l10:[10,9],
        l11:[8,9],
        l12:[8,49],
        l13:[69,8],
        l14:[69,49],
        l15:[71,32],
        l16:[72,32],
        l17:[32,49],
        l18:[52,49],
        l19:[49,58],
        l20:[55,58],
        l21:[52,55],
        l22:[36,55],
        l23:[72,36],
        l24:[71,36],
        l25:[71,72],
        l26:[72,52],
        l27:[52,58],
        l28:[58,9],
        l29:[72,49],
        l30:[72,55]
    };
    
    var lineGroup0=["l13","l8"];
    var lineGroup1_1=["l1","l6"];
    var lineGroup1_2=["l14","l7"];
    var lineGroup2=["l2","l5"];
    var lineGroup3_1=["l3","l4"];
    var lineGroup3_2=["l10","l11"];
    var lineGroup4=["l12","l9"];
    var lineGroup5=["l15","l24","l25"];
    var lineGroup6=["l16","l23","l26"];
    var lineGroup7=["l17","l18","l21","l22","l27"];
    var lineGroup8=["l19","l20","l28"];
    var dotXY = dotInfo.detail[0].pts.split(';');
    var dotCount = dotXY.length;

    function cmp(a,b){
    return a[1]-b[1];
    }

    var dotXYsplit=[];
    for(var j=0;j<dotCount;j++){
        dotXYsplit[j]=dotXY[j].split(',');
    }
    //计算4个额外的点
    var p1={x:Number(dotXYsplit[1-1][0]),y:Number(dotXYsplit[1-1][1])};
    var p2={x:Number(dotXYsplit[2-1][0]),y:Number(dotXYsplit[2-1][1])};
    var p3={x:Number(dotXYsplit[40-1][0]),y:Number(dotXYsplit[40-1][1])};
    var p4={x:Number(dotXYsplit[37-1][0]),y:Number(dotXYsplit[37-1][1])};

    var p5={x:Number(dotXYsplit[16-1][0]),y:Number(dotXYsplit[16-1][1])};
    var p6={x:Number(dotXYsplit[17-1][0]),y:Number(dotXYsplit[17-1][1])};
    var p7={x:Number(dotXYsplit[43-1][0]),y:Number(dotXYsplit[43-1][1])};
    var p8={x:Number(dotXYsplit[46-1][0]),y:Number(dotXYsplit[46-1][1])};

    var F1 = segmentsIntr(p1,p2,p3,p4);
    var F2 = segmentsIntr(p5,p6,p7,p8);

    var xF1=F1.x;
    var yF1=F1.y

    var xF2=F2.x;
    var yF2=F2.y;

    var xF3=0.5*(Number(dotXYsplit[40-1][0])+Number(dotXYsplit[43-1][0]));
    var yF3=0.5*(Number(dotXYsplit[40-1][1])+Number(dotXYsplit[43-1][1]));

    var xF4=0.5*(Number(dotXYsplit[31-1][0])+Number(dotXYsplit[34-1][0]));
    var yF4=0.5*(Number(dotXYsplit[31-1][1])+Number(dotXYsplit[34-1][1]));

    dotXYsplit.push([xF1,yF1]);
    dotXYsplit.push([xF2,yF2]);
    dotXYsplit.push([xF3,yF3]);
    dotXYsplit.push([xF4,yF4]);
    var sortedDots = JSON.parse(JSON.stringify(dotXYsplit));
        sortedDots.sort(cmp);

    for(var k=0;k<dotCount+4;k++){
        sortedDots[k]=sortedDots[k].toString();
    }

    //生成svg代码
    var theSVG = '<svg id="'+svgID+'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="'+imgW+'" height="'+imgH+'" viewBox="0 0 '+imgW+' '+imgH+'">\n'+
    '  <g fill="none" fill-rule="evenodd">\n'+
    ' <image id="bgIMG" width="'+imgW+'" height="'+imgH+'" xlink:href="'+imgURL+'"/>\n';
    //生成定位点
    for(var i=0;i<dotCount+4;i++){




        var xx=dotXYsplit[i][0];
        var yy=dotXYsplit[i][1];

        //模拟扫描效果，从上至下时间步进
        delayFixed = Number(dotDelay) + Number(sortedDots.indexOf(([xx,yy]).toString()))/Number(timeGap);
        dotRfixed = 0;
        if(dotGroup1.indexOf((i+1)) != -1){
            dotRfixed = dotR1;
        }
        if(dotGroup2.indexOf((i+1)) != -1){
            dotRfixed = dotR2;
        }
        if(dotGroup3.indexOf((i+1)) != -1){
            dotRfixed = dotR3;
        }
        if(dotGroup4.indexOf((i+1)) != -1){
            dotRfixed = dotR4;
        }
        if(dotGroup5.indexOf((i+1)) != -1){
            dotRfixed = dotR5;
        }
        if(dotGroup6.indexOf((i+1)) != -1){
            dotRfixed = dotR6;
        }
        if(dotGroup7.indexOf((i+1)) != -1){
            dotRfixed = dotR7;
        }
        if(dotGroup8.indexOf((i+1)) != -1){
            dotRfixed = dotR8;
        }
        if(dotGroup9.indexOf((i+1)) != -1){
            dotRfixed = dotR9;
        }
        if(dotGroup10.indexOf((i+1)) != -1){
            dotRfixed = dotR10;
        }
        if(dotGroup11.indexOf((i+1)) != -1){
            dotRfixed = dotR11;
        }
        if(dotGroup12.indexOf((i+1)) != -1){
            dotRfixed = dotR12;
        }
        if(dotGroup13.indexOf((i+1)) != -1){
            dotRfixed = dotR13;
        }
        if(dotGroup14.indexOf((i+1)) != -1){
            dotRfixed = dotR14;
        }
        if(dotGroup15.indexOf((i+1)) != -1){
            dotRfixed = dotR15;
        }
        if(dotGroup16.indexOf((i+1)) != -1){
            dotRfixed = dotR16;
        }
        if(dotNotShow.indexOf((i+1)) != -1){
            theSVG += '    <circle id="dot'+(i+1)+'" cx="'+xx+'" cy="'+yy+'" r="'+dotRfixed+'" fill="'+dotColor+'" opacity="1"/>\n';
            //'       <animate attributeName="opacity" values="0;1;0;1;0;1;1;0;0.5;0" begin="'+delayFixed+'s" dur="'+durTime+'s" fill="freeze"/>\n</circle>\n';
        }else{
            theSVG += '    <circle id="dot'+(i+1)+'" cx="'+xx+'" cy="'+yy+'" r="'+dotRfixed+'" fill="'+dotColor+'" opacity="1"/>\n';
            //'       <animate attributeName="opacity" values="0;1;0;1;1;1;1;1" begin="'+delayFixed+'s" dur="'+durTime+'s" fill="freeze"/>\n</circle>\n';
        }
    }
    //生成连线
    var linesArr = Object.keys(lines);
    for(var m=0;m<linesArr.length;m++){
        var lBegin = lines[linesArr[m].toString()][0];
        var lEnd = lines[linesArr[m].toString()][1];
        var lLength = Math.sqrt(Math.pow((dotXYsplit[lEnd-1][0]-dotXYsplit[lBegin-1][0]),2)+Math.pow((dotXYsplit[lEnd-1][1]-dotXYsplit[lBegin-1][1]),2));
        var lineDash1="0 "+lLength;
        var lineDash2=lLength+" "+lLength;
        var lPath = 'M'+dotXYsplit[lBegin-1].toString()+' L'+dotXYsplit[lEnd-1].toString();
        var lineDelayFixed = lineDelay;
        var lineDurFixed = lineDur;

        lineWidthFixed = lineWidth;
        if(m>=24 && m<=27){
            lineWidthFixed = lineWidthBig;
        }
        theSVG +='    <path id="'+linesArr[m]+'" stroke="'+lineColor+'" d="'+lPath+'" stroke-width="'+lineWidthFixed+'" stroke-dasharray="'+lineDash2+'">\n'+
                //'      <animate attributeName="stroke-dasharray" from="'+lineDash1+'"  to="'+lineDash2+'"  dur="'+lineDurFixed+'s" begin="'+lineDelayFixed+'s" fill="freeze" />'+
                '\n\t</path>\n';

    }


    theSVG += '  </g>\n'+'</svg>';
    return theSVG;

}

//计算交点坐标
function segmentsIntr(a, b, c, d){  
    // 如果分母为0 则平行或共线, 不相交  
        var denominator = (b.y - a.y)*(d.x - c.x) - (a.x - b.x)*(c.y - d.y);  
            if (denominator==0) {  
                return false;  
            }  
        // 两条直线的交点坐标 (x , y)      
        var x = ( (b.x - a.x) * (d.x - c.x) * (c.y - a.y)   
                    + (b.y - a.y) * (d.x - c.x) * a.x   
                    - (d.y - c.y) * (b.x - a.x) * c.x ) / denominator ;  
        var y = -( (b.y - a.y) * (d.y - c.y) * (c.x - a.x)   
                    + (b.x - a.x) * (d.y - c.y) * a.y   
                    - (d.x - c.x) * (b.y - a.y) * c.y ) / denominator;  
        return {  
            x :  x,  
            y :  y  
        }  
     
      
    }  
    
//解方程，求垂线
function chuixian1(d1,d2,d3){
    //没有判断为零条件……
    var m=d1[0];
    var n=d1[1];
    var g=d2[0];
    var h=d2[1];
    var j=d3[1];
    //x=m-(g-m)*(j-n)/(h-n);
    var x=m-(h-n)*(j-n)/(g-m);
    return [x,j]

}
function chuixian(d1,d2,d3){
    //没有判断为零条件……
    var m=d1[0];
    var n=d1[1];
    var g=d2[0];
    var h=d2[1];
    var j=d3[0];
    var k=d3[1];
    var x=(g*g*j+g*h*k-g*h*n-2*g*j*m-g*k*n+g*n*n+h*h*m-h*k*m-h*m*n+j*m*m+k*m*n)/(g*g-2*g*m+h*h-2*h*n+m*m+n*n);
    var y=(g*g*n+g*h*j-g*h*m-g*j*n-g*m*n+h*h*k-h*j*m-2*h*k*n+h*m*m+j*m*n+k*n*n)/(g*g-2*g*m+h*h-2*h*n+m*m+n*n);
    return [x,y];
}
//计算外端点
function outDot(a,b,m,n){

    var aX=a[0];
    var aY=a[1];
    var bX=b[0];
    var bY=b[1];

    var cX=((m+n)*bX-m*aX)/n;
    var cY=((m+n)*bY-m*aY)/n;

    return [cX,cY];
}


