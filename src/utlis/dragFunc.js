// 悬浮按钮可移动函数
export function dragFunc(id) {
  let Drag = document.getElementById(id);
  Drag.ontouchstart = function (event) {
    document.ontouchmove = function (event) {
      let ev = event || window.event;
      Drag.style.left = ev.changedTouches[0].clientX - 20 + "px";
      Drag.style.top = ev.changedTouches[0].clientY - 20 + "px";
    };
  };
  Drag.ontouchend = function () {
    document.ontouchmove = null;
  };
}