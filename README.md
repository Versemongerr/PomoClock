# 使用electron为树莓派制作番茄钟应用

最近和群友讨论，入手了一块树莓派4b，准备自己设计一个APP来把树莓派变成电脑副屏。作为热身，先开发一个番茄中小项目熟悉一下Electron。


## 什么是番茄钟

番茄钟，是根据番茄工作法理论进行开发的一款方便、实用的日程管理软件。

番茄工作法是把工作任务分解成半小时左右，集中精力工作25分钟，然后休息5分钟，如此视作种一个“番茄”，而“番茄工作法”的流程能使下一个30分钟更有动力。4个番茄后有一个稍微长时间一点的休息，则是完成了番茄工作法的大循环。

### 主要流程

**确定任务或者工作**

先整理今日需要完成的任务，按照任务的重要程度和紧急程度来安排时间，做好计划。

**设置番茄时钟为25分钟**

人类正常注意力大约能坚持40分钟，25分钟专注是比较容易做到，增加专注力。

**专注任务或者工作**

要在番茄时间内要保持专注，不能想起其他事情，跑去做其他事情。

**休息时间默认5分钟**

到25分钟，停止当前的工作或者任务，进入休息时间。

**四个番茄时钟做一个大休息**

4个番茄后有一个稍微长时间一点的休息，则是完成了番茄工作法的大循环。

# 什么是 Electron

Electron 是一个使用 JavaScript, HTML 和 CSS 等 Web 技术创建原生程序的框架，它负责比较难搞的部分，你只需把精力放在你的应用的核心上即可。

Electron 支持 Windows、Linux、Mac 三种平台，可以方便的发布跨平台应用和网页应用。

# Electron工程建立

要优雅地建立 Electron 工程，首先需要安装 node.js 和 WebStorm，创建好空白工程后在其中添加 electron、electron-packager、electron-builder包。

之后创建main.js，就可以愉快地开始编写 js 了。

具体步骤可以参考链接：[使用Webstrom调试Electron_Sup_Coke_cola的博客-CSDN博客_webstorm 调试electron](https://blog.csdn.net/Sup_Coke_cola/article/details/80383973)

# 番茄钟的网页实现

Electron基于 JavaScript，HTML 和 CSS 构建跨平台的桌面应用程序，所以只需要设计好网页，就可以直接移植到 Electron 上了。

番茄钟的网页实现参考链接：[网页版番茄时钟的制作——Pomodoro Clock_吟游诗人——吟唱生命的不朽-CSDN博客](https://blog.csdn.net/qq_32623363/article/details/77131913)

# 代码及APP下载

APP已经发布在 Release ，在树莓派上下载 PomodoroClock-linux-armv7l.tar.gz 并直接运行 PomodoroClock 即可。（如遇报错请检查是否拥有运行权限。屏幕分辨率为 800x480 时可以得到最佳显示效果）




