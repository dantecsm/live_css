!function () {
  let duration = 120
  let n = 0
  $('.actions').on('click', 'button', function (e) {
    let $button = $(e.currentTarget)
    let speed = $button.attr('data-speed')
    $button.addClass('active')
      .siblings('.active').removeClass('active')
    switch (speed) {
      case 'slow':
        duration = 360
        break
      case 'normal':
        duration = 120
        break
      case 'fast':
        duration = 40
        break
      case 'immediate':
        n = code.length
    }
  })
  function writeCode(prefix, code, fn) {
    let container = document.querySelector('#code')
    let styleTag = document.querySelector('#styleTag')
    let id
    id = setTimeout(function run() {
      // n++
      // while (code[n] !== '\n') {
      //   n++
      // }
      n += 10
      container.innerHTML = code.substring(0, n)
      styleTag.innerHTML = code.substring(0, n)
      container.scrollTop = container.scrollHeight
      if (n < code.length) {
        id = setTimeout(run, duration)
      } else {
        fn && fn.call()
      }
    }, duration)
  }
  let code = `
      /*
       * 画一只小埋给你看
       */
      /*
        .........
        ......
        ...
        3
        2
        1
      */
      /*
       * 首先，需要准备小埋的披风
       */
      .coat {
        z-index: -1;
        background-color: #f08a5a;
        position: absolute;
      }
      /*
       * 披风的帽子
       */
      .coat.upper {
        width: 88%;
        height: 50%;
        left: 4%;
        top: 2%;
        border: 1px solid #000;
        border-bottom-color: transparent;
        border-radius: 50%50%64%56%/80%80%10%10%;
      }
      /*
       * 披风的下摆
       */
      .coat.lower {
        bottom: 2%;
        left: 1%;
        width: 98%;
        height: 70%;
        border: 1px solid;
        border-top-color: transparent;
        border-radius: 8%40%36%30%/31%55%32%24%;
      }
      .coat.lower::before {
        content: '';
        position: absolute;
        right: 13px;
        top: 20px;
        width: 10px;
        height: 20px;
        background-color: inherit;
      }
      /*
      * 这可是披风的系带
      */
     .arm {
       z-index: 1;
       position: absolute;
       border-radius: 50%50%50%50%/50%50%50%50%;
       background: #f08a5a;
     }
     .arm.left {
       top: 100px;
       left: 28px;
       width: 60px;
       height: 20px;
       border: 1px solid;
       transform: rotate(20deg);
       border-left-color: transparent;
     }
     .arm.right {
       width: 65px;
       height: 28px;
       top: 93px;
       left: 78px;
       border: 1px solid;
       transform: rotate(-25deg);
       border-radius: 50%50%50%50%/40%40%50%50%;
     }
      /*
       * 披风有一双耳朵
       */
      .coat.ear {
        z-index: -11;
        position: absolute;
        width: 17px;
        height: 10px;
        border: 1px solid;
        border-bottom-color: transparent;
        border-radius: 50%50%50%50%;
        background-color: #f58857;
      }
      .coat.ear::before {
        position: absolute;
        content: '';
        width: 35%;
        height: 30%;
        left: 20%;
        top: 25%;
        border-radius: 50%50%50%50%;
        border: 1px solid;
        background-color: #ffd8af;
      }
      /*
       * 把耳朵放到正确的位置
       */
      .coat.ear.left {
        transform: rotate(-40deg);
        left: 9px;
        top: 13px;
      }
      .coat.ear.right {
        transform: rotate(40deg);
        right: 15px;
        top: 5px;
      }
      /*
       * 披风画完，总算开始画小埋啦
       */
      /*
       * 首先是小埋的脸
       */
      .face {
        z-index: 1;
        position: absolute;
        width: 100px;
        height: 87px;
        border: 1px solid;
        border-top-color: transparent;
        background-color: #fde5d6;
        left: 33px;
        top: 25px;
        border-radius: 60%60%60%60%/60%60%30%40%;
      }
      /*
       * 准备小埋的头发，这是刘海...
       */
      .hair.front {
        position: absolute;
        z-index: 11;
        width: 130px;
        height: 98px;
        margin-left: 20px;
        margin-top: 25px;
        background-color: #fcd0a7;
        border-radius: 50%50%50%50%/60%55%0%0%;
        clip-path: polygon(0%0%, 100%0%, 100%80%, 95%96%, 95%80%, 85%100%, 87%41%, 71%8%, 71%26%, 62%0%, 58%2%, 58%34%, 53%20%, 48%43%, 44%32%, 40%2%, 31%30%, 31%0%, 14%42%, 13%28%, 14%42%, 12%50%, 11%40%, 10%100%, 4%84%, 3%92%, 0%75%);
      }
      .hair.fill {
        z-index: -1;
        position: absolute;
        width: 104px;
        height: 100px;
        top: 50px;
        left: 32px;
        background-color: #fcd0a7;
      }
      /*
       * 这是后边的长发...
       */
    .hair.back {
      z-index: -1;
      position: absolute;
      top: 125px;
      width: 137px;
      height: 90px;
      background-color: #fcd0a7;
      margin-left: 13px;
      margin-top: -10px;
      clip-path: polygon(13%0%, 90%10%, 98%45%, 100%75%, 94%63%, 95%72%, 85%96%, 84%78%, 79%91%, 72%80%, 66%98%, 62%86%, 59%100%, 43%83%, 44%100%, 30%70%, 25%90%, 18%83%, 14%60%, 14%87%, 10%75%, 7%42%, 2%69%, 0%50%);
    }
    /*
     * 接下来，一双圆溜溜的眼睛
     */
    .eye.left {
      left: 14px;
    }
    .eye.right {
      right: 12px;
      margin-top: -1px;
    }
    .eye {
        z-index: 2;
        position: absolute;
        width: 15px;
        height: 14px;
        border: 3px solid black;
        border-radius: 50%;
        background-color: #743313;
        top: 31px;
      }
      /*
       * 眼睛里面的珠子
       */
      .eye::before {
        position: absolute;
        content: '';
        width: 4px;
        height: 4px;
        background-color: #f9eee7;
        border-radius: 50%;
      }
      .eye::after {
        position: absolute;
        content: '';
        width: 3px;
        height: 3px;
        background-color: #c89b85;
        border-radius: 50%;
        left: 4px;
        top: 4px;
      }
      /*
       * kira kira的眼光...
       */
      .eye-inner {
        position: absolute;
        border: 1px solid transparent;
        width: 80%;
        height: 80%;
        border-radius: 45%;
        border-bottom-color: #b07451;
      }
      /*
       * 眼睛上方的眉毛
       */
      .eyeBrow.left {
        left: 10px;
        transform: rotate(3deg);
      }
      .eyeBrow.right {
        right: 10px;
        transform: rotate(-3deg);
      }
      .eyeBrow {
        z-index: 2;
        position: absolute;
        width: 25px;
        height: 4px;
        background-color: #000;
        top: 25px;
      }
      /*
       * 下嘴巴
       */
      .mouth {
        position: absolute;
        width: 43px;
        height: 27px;
        border: 1px solid;
        bottom: 6px;
        left: 33px;
        background-color: #c67575;
        border-radius: 35%14%50%50%/59%45%55%40%;
        border-top-color: transparent;
      }
      /*
       * 上嘴巴
       */
      .mouth::before {
        position: absolute;
        content: '';
        background-color: #f7e6d6;
        transform: rotate(-5deg);
        border: 1px solid transparent;
        box-shadow: 0 -1px 0 1px #fce6d2;
        height: 3px;
        width: 93%;
        left: 1px;
        border-bottom-color: #000;
        border-radius: 50%50%50%50%/50%50%50%50%
      }
      /*
       * 粉色的舌头
       */
      .mouth::after {
        position: absolute;
        content: '';
        width: 94%;
        height: 75%;
        bottom: 0;
        border: 1px solid #c37b7e;
        background-color: #f5a5a8;
        border-radius: 35%35%50%50%/53%45%55%40%;
      }
      /*
       * 两边的脸颊
       */
      .hotpe.left {
        left: 15px;
      }
      .hotpe.right {
        right: 13px;
      }
      .hotpe {
        z-index: 1;
        position: absolute;
        width: 3px;
        height: 3px;
        bottom: 30px;
        border-radius: 50%50%50%50%/50%50%50%50%;
        box-shadow: 0 0 10px 8px #f5a5a8;
        transform: scaley(.7);
        background-color: #f5a5a8;
      }
      /*
       * 给小埋穿上T-shirt
       */
      .Tshirt {
        position: absolute;
        bottom: 15%;
        left: 18%;
        border-bottom: 64px solid #f3f3f3;
        border-left: 19px solid transparent;
        border-right: 19px solid transparent;
        width: 72px;
      }
      /*
       * T-恤的袖子，左袖子
       */
      .Tshirt::before {
        position: absolute;
        content: '';
        top: -14px;
        left: -40px;
        width: 55px;
        height: 10px;
        transform: rotate(31deg);
        background-color: #f3f3f3;
      }
      /*
       * 右袖子
       */
      .Tshirt::after {
        position: absolute;
        content: '';
        top: 5px;
        right: -36px;
        width: 38px;
        height: 10px;
        transform: rotate(15deg);
        background-color: #f3f3f3;
      }
      /*
       * 然后是左手和右手
       */
      .hand.left {
        top: 94px;
        left: 9px;
      }
      .hand.right {
        top: 134px;
        right: 16px;
      }
      .hand {
        z-index: -1;
        background: #fde5d6;
        width: 8px;
        height: 8px;
        position: absolute;
        transform: rotate(20eg);
      }
      .hand::before {
        z-index: -1;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 8px;
        width: 8px;
        background: #fde5d6;
        transform: rotate(45deg);
      }
      /*
       * 还有左腿和右腿
       */
      .leg.left {
        left: 48px;
        transform: rotate(190deg);
      }
      .leg.right {
        right: 58px;
        transform: rotate(-190deg);
      }
      .leg {
        z-index: -1;
        position: absolute;
        bottom: 6px;
        border-bottom: 28px solid #f2e1d2;
        border-left: 3px solid transparent;
        border-right: 3px solid transparent;
        height: 0;
        width: 4px;
      }
      /*
       * 画左脚和右脚
       */
      .leg.left::after {
        position: absolute;
        content: '';
        width: 8px;
        height: 3px;
        bottom: 0px;
        background-color: #f2e3d5;
        transform: rotate(-25deg);
      }
      .leg.right::after {
        position: absolute;
        content: '';
        width: 8px;
        height: 3px;
        bottom: 0px;
        left: -4px;
        background-color: #f2e3d5;
        transform: rotate(25deg);
      }
      /*
       * 加上安全裤...
       */
      .leg.left::before {
        position: absolute;
        content: '';
        width: 10px;
        height: 10px;
        top: 19px;
        left: -3px;
        background-color: #df8fa1;
      }
      .leg.right::before {
        position: absolute;
        content: '';
        width: 10px;
        height: 10px;
        top: 17px;
        left: -3px;
        background-color: #df8fa1;
      }
      /*
      * 别忘了帽子上的kuma公公...
      */
     .kuma {
       position: absolute;
       top: 3px;
       left: 68px;
       width: 15px;
       height: 15px;
       box-sizing: border-box;
       border: 1px solid transparent;
     }
     .kumaEye.left {
       top: 34%;
       left: 15%;
       transform: rotate(-30deg);
       box-shadow: .5px -3px 1px .2px rgba(0, 0, 0, .5);
     }
     .kumaEye {
       position: relative;
       width: 2px;
       height: 0;
       border: .5px solid;
     }
     .kumaEye.right {
       top: 20%;
       left: 65%;
       transform: rotate(30deg);
       box-shadow: -1px -2px 1px .2px rgba(0, 0, 0, .5);
     }
     /*
      * kuma公公的胡子 
      */
     .kumaMustach {
       position: absolute;
       width: 2px;
       height: 4px;
       background-color: #f3cca5;
       border-radius: 50%50%50%50%/60%60%40%40%;
     }
     /*
      * 这是左边
      */
     .kumaMustach.left {
       bottom: 2px;
       left: 3px;
       transform: rotate(20deg);
       border-left: 1px solid;
       border-right: 1px solid;
     }
     /*
      * 这是右边
      */
     .kumaMustach.right {
       bottom: 2px;
       right: 2px;
       transform: rotate(-20deg);
       border-left: 1px solid;
       border-right: 1px solid;
     }
      /*
       * 好了，这只小埋送给你
       */
  `
  writeCode('', code)

}.call()