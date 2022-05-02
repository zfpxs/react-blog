更多课程 这里获取
https://www.yuque.com/study001/xk/list

import express from 'express'
import { router } from './router'

const app = express()
router(app)
app.listen(4001, () => {
})