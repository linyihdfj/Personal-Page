# GitHub Pages 部署指南

## 已完成的配置

✅ **Astro 配置已更新** (`astro.config.mjs`)

- `site`: 设置为你的 GitHub Pages 主域名
- `base`: 设置为 `/bizarre-belt/`，这样网站会部署到仓库的子路径
- `output`: 设置为 `static` 模式

✅ **GitHub Actions 工作流已创建** (`.github/workflows/deploy.yml`)

- 自动在推送时构建并部署到 GitHub Pages
- 使用官方的 Astro 构建 Action

## 接下来的步骤

### 1️⃣ 上传到 GitHub

如果还没有在 GitHub 上创建仓库，请：

```bash
# 初始化 Git 仓库（如果还没有的话）
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit"

# 添加远程仓库
git remote add origin https://github.com/linyihdfj/bizarre-belt.git

# 推送到 main 分支
git branch -M main
git push -u origin main
```

### 2️⃣ 在 GitHub 上启用 GitHub Pages

1. 访问你的仓库：`https://github.com/linyihdfj/bizarre-belt`
2. 点击 **Settings** 标签
3. 左侧菜单选择 **Pages**
4. 在 **Source** 下，选择 **Deploy from a branch**
5. 选择分支：**gh-pages**（GitHub Actions 会自动创建）
6. 点击 **Save**

### 3️⃣ 等待自动部署

- GitHub Actions 会自动运行
- 构建完成后，gh-pages 分支会被自动更新
- 你的网站会在大约 1-2 分钟后上线

### 4️⃣ 访问你的网站

打开浏览器访问：

```
https://linyihdfj.github.io/bizarre-belt/
```

## 故障排除

### ❌ 部署失败

检查 GitHub Actions 日志：

1. 转到仓库的 **Actions** 标签
2. 点击最后一个工作流运行
3. 查看"Build"或"Deploy"步骤的错误信息

### 常见问题

**Q: 如何更新网站？**
A: 只需推送新的代码到 main 分支，GitHub Actions 会自动重新部署。

**Q: 需要多长时间才能看到更新？**
A: 通常 1-2 分钟。可以在 GitHub Actions 标签页查看进度。

**Q: 如何自定义域名？**
A: 在 GitHub Pages 设置中添加自定义域名，需要在你的域名提供商配置 DNS 记录。

## 本地开发

在部署前测试你的更改：

```bash
# 使用生产配置本地构建
npm run build

# 预览构建结果
npm run preview
```

## 更多信息

- [Astro 部署指南](https://docs.astro.build/zh-cn/guides/deploy/)
- [GitHub Pages 文档](https://docs.github.com/en/pages)
