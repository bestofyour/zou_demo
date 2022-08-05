# 使用父镜像
FROM node:current-slim

# 设置工作目录
WORKDIR /usr/src/app

# 将文件从主机复制到当前位置
COPY package.json .
CMD [ "echo", "项目构建开始------------------------" ]
# 影像文件中运行命令
RUN yarn install
RUN yarn --version

# 描述容器运行时监听的端口
EXPOSE 6060

# 在容器中运行的命令
CMD [ "yarn", "start" ]
CMD [ "echo", "项目构建结束------------------------" ]
# 将应用程序的其余源代码从您的主机复制到映像文件系统
COPY . ./