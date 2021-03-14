/**********************************文档区*****************************************/
var text1=`/*
ལྷན་རྒྱས་ཁམས་བཟང་ ང་ནི་ tbkaliཡིན་
*Now let me briefly introduce myself.
*But the introduction is too monotonous.
*Today, something different.
*To make a dynamic resume.
*/

*{
  transition: all 1s;
}
html{
  background: #eee;
}
#code{
  border: 1px solid #aaa;
  padding: 3%;
}

/* This is too monotonous, give the code some color */
.token.punctuation {
  color: #999;
}
.token.selector {
  color: #690;
}
.token.property {
  color: #905;
}

/* Add dynamic shadow to it */
#code{
  animation: glow 800ms ease-out infinite alternate;
}

/* Add dynamic shadow to it */

/* I need a piece of white paper */
#paper {
  position: fixed;
  right: 0;
  width: 48%;
  height: 100vh;
  padding: 16px;
  background: #ccc;
}
#paper>.content{
  background: #fff;
  width: 100%;
  height: 100%;
  padding: 20px;
}

/* So I can write on white paper, please look at the right */

`;

var text2=`# ཀརྨ་འཇིགས་མེད་ཤེས་རབ་ཚུལ་ཁྲིམས་དཔལ་ལྡན་

 གནས་སྟངས་ངོ་སྤྲོད་
----
#### ལོ་༢༣    java  soft engineer ད་ལྟ་ཧྲང་ཧེ་ལ་ལས་ཀ་ཡོད་   རྣམ་ཀུན python བེད་སྤྱོད་ནས་ ལག་ཆ་ཆུང་ཆུང་འབྲི་རྒྱུ་དགའ་པོ་ཡོད་ 
#### དེ་བས་བོད་ཡིག་གི་ soft དར་འཕེལ་གཏང་བའི་འདུན་པ་ཆེན་པོ་ཡོད་།
<br/>


ལག་ཤེས་གཙོ་བོ་
----
* Back end development
* Aggregate payment
* Single sign on
* Authority management
* official account / applet development
* API interface development
* Linux
* Open source enthusiasts
* Blog system

ལག་རྩལ་སྐད་རིགས་
----
  - **Java**: SpringBoot、SpringCloud、SpringMVC、MyBatis、Shiro、Freemarker
  - **html**: VueJs、Bootstrap、LayUI、jQuery UI
  - **database**: MySQL/MariaDB、SQLServer、Oracle、MongoDB、redis、memcached
  - **web server**: Nginx、Tomcat、Apache、Jetty
  - **OS**: Linux、Windows
  - **Others**: Git、Svn、Maven、XMind、Visio、IDEA



བརྙན་ལམ་ཐོག་ནས་ངོ་སྤྲོས་
----
1. [བརྙན་པར་གྱི་རྒྱབ་ལྗོངས་འགྱུར་ལྡོག་](https://www.bilibili.com/video/BV1ur4y1P7gM)
2. [གདོང་པའི་པར་ལས་ མི་སྣ་ངོས་འཛིན་](https://www.bilibili.com/video/BV18N411Q7Xy?from=search&seid=17181397830000189099)
3. [བོད་གྱི་ཡུལ་སྐོར་གནས་སྟངས་](https://)
4. [བུད་མེ་ཚོ་ཤུགས་རྒྱབ་](https://www.bilibili.com/video/BV1C54y1a7ho?from=search&seid=1161655372043886310)
5. [བོད་ཀྱི་མི་གྲངས་འགྱུར་བ་](https://)
6. [དུས་ཚོད་དམ་འཛིན་དྲན་སྐུལ་](https://)
7. [mp4འགྱུར་mp3](https://www.bilibili.com/video/BV15h411Q76G)

མ་འོངས་ལག་རྩལ་མཉམ་སྤྱོད་link
----
* [blog]()
* [GitHub]()


[ཡིག་ཆ་འོས་སྦྱོད་](https://ayjcsgm.github.io/)
----
1. [springboot](https://spring.io/projects/spring-boot)
2. [Linux](https://www.kali.org/blog/)
3. [java](https://www.oracle.com/index.html)


འབྲེལ་བ་བྱས་སྟངས་
----
* wechat：**Ritchie1376Kiss** 
* མཉམ་དུ་་ཡར་རྒྱས་ཤུགས་རྒྱབ 
`;

var text3=`
/* Because we use the mmarkdown format*/
/*Need to convert to HTML*/

/*
* Next, use a good library
*Convert our mmarkdown to HTML
*/

`;
var text4=`
/*
 * This is my dynamic resume
*Thank you for watching
 */
`

/**********************************执行代码区*****************************************/
writeLeft(()=>{
  qx(()=>{
      createPaper(()=>{
      writeRight(()=>{
        mdHtml(()=>{
          md(()=>{
            end()
          })
        })
      })
    })
  })
})




/**********************************函数区*****************************************/
/**********************************把text1的代码添加到左边区域和style标签中*****************************************/
function writeLeft(fn){
  let code=document.getElementById("code")
  let styleTag=document.getElementById("styleTag")
  let n=0;
  let intervalId1=setInterval(function(){
    code.innerHTML=Prism.highlight(text1.substring(0,n), Prism.languages.css);
    styleTag.innerHTML=text1.substring(0,n);
    code.scrollTop=code.scrollHeight;
    n += 1
    if(n>=text1.length){
      window.clearInterval(intervalId1);
      fn();
    }
  },10)
}

/***********************************开始在右边创建一个空白纸用来写markdown******************************************/
function createPaper(fn){
  let paper=document.createElement('div');
  paper.id='paper';
  let paperPre=document.createElement('pre');
  paperPre.className='content';
  paper.appendChild(paperPre);
  document.body.appendChild(paper);
  fn();
}

/**********************************把text2的代码添加到右边区域中*****************************************/
function writeRight(fn){
  let n1=0;
  let intervalId2=setInterval(function(){
    let rightCode=document.querySelector('#paper>.content');
    rightCode.innerHTML=text2.substring(0,n1);
    rightCode.scrollTop=rightCode.scrollHeight;
    n1 += 1
    if(n1>=text2.length){
      window.clearInterval(intervalId2);
      fn();
    }
  },10)
}

/**********************************将左边倾斜*****************************************/
function qx(fn){
  let code=`#left{transform:skewY(1deg);}`;
  let pre=styleTag.innerHTML;
  styleTag.innerHTML=pre+code;
  fn();
}

/**********************************把text3的代码添加到左边区域中*****************************************/
function mdHtml(fn){
  let code=document.getElementById("code")
  let styleTag=document.getElementById("styleTag")
  let prefix=code.innerHTML
  let n=0;
  let intervalId3=setInterval(function(){
    code.innerHTML=prefix+Prism.highlight(text3.substring(0,n), Prism.languages.css);
    code.scrollTop=code.scrollHeight;
    n += 1
    if(n>=text3.length){
      window.clearInterval(intervalId3);
      fn();
    }
  },10)
}

/**********************************把markdown转换为html*****************************************/
function md(fn){
  let div = document.createElement('div');
  div.className = 'html markdown-body content';
  div.innerHTML = marked(text2);
  let markdownContainer = document.querySelector('#paper > .content');
  markdownContainer.replaceWith(div);
  fn();
}

/**********************************结束语*****************************************/
function end(){
  let code=document.getElementById("code")
  let styleTag=document.getElementById("styleTag")
  let pre=code.innerHTML
  let n=0;
  let intervalId4=setInterval(function(){
    code.innerHTML=pre+Prism.highlight(text4.substring(0,n), Prism.languages.css);
    code.scrollTop=code.scrollHeight;
    n += 1
    if(n>=text4.length){
      window.clearInterval(intervalId4);
    }
  },10)
}



