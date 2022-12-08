import React, { createRef, useEffect, useRef } from "react";

const Timer = () => {
  function Countdown(elem: any, seconds: number) {
    var that: {
      elem: any;
      seconds: number;
      init: () => void;
      start: () => void;
      stop: () => void;
      totalTime: number;
      usedTime: number;
      startTime: number;
      timer?: any;
      fillZero?: any;
      count: any;
    } = {
      elem: null,
      seconds: 0,
      totalTime: 0,
      usedTime: 0,
      startTime: 0,
      count: null,
    };

    that.elem = elem;
    that.seconds = seconds;
    that.totalTime = seconds * 100;
    that.usedTime = 0;
    that.startTime = +new Date();
    that.timer = null;

    that.count = function () {
      that.usedTime = Math.floor((+new Date() - that.startTime) / 10);
      
      var tt = that.totalTime - that.usedTime;
      if (tt <= 0) {
        that.elem.current = "00:00.00";
        clearInterval(that.timer);
      } else {
        var mi = Math.floor(tt / (60 * 100));
        var ss = Math.floor((tt - mi * 60 * 100) / 100);
        var ms = tt - Math.floor(tt / 100) * 100;
        console.log('counting', mi, ss, ms)
        that.elem.current =
          that.fillZero(mi) + ":" + that.fillZero(ss) + "." + that.fillZero(ms);
      }
    };

    that.init = function () {
      if (that.timer) {
        clearInterval(that.timer);
        that.elem = "00:00.00";
        that.totalTime = seconds * 100;
        that.usedTime = 0;
        that.startTime = +new Date();
        that.timer = null;
      }
    };

    that.start = function () {
      that.init();
      if (!that.timer) {
        console.log('starting')
        that.timer = setInterval(that.count, 1);
      }
    };

    that.stop = function () {
      console.log("usedTime = " + that.usedTime);
      if (that.timer) clearInterval(that.timer);
    };

    that.fillZero = function (num: number) {
      return num < 10 ? "0" + num : num;
    };

    return that;
  }
  const x = useRef(null);
  var span = x;
  var countdown = Countdown(x.current, 20);
  // useEffect(() => {
  //   countdown.start();
  // })
  return (
    <div onClick={() => countdown.start()} ref={x} id="timer" className="lg:w-32 w-24 h-auto bg-player-tag text-center rounded-md p-2 my-2">

    </div>
  );
};

export default Timer;
