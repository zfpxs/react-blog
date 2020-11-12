'use strict'
const Controller = require('egg').Controller
class HomeController extends Controller {
  async index() {
    const {ctx} = this
    let result = await this.app.mysql.get("content"); 
    console.log(result)
    this.ctx.body = result
  }

  async getArticleList() {

    let sql = 'SELECT article.id as id, ' +
    'article.title as title, introduce, add_time, ' +
    'view_count, type_name ' + 
    'FROM article LEFT JOIN type ON article.type_id = type.id'
    const result = await this.app.mysql.query(sql)
    this.ctx.body = {data:result}
  }

  async getArticleById(){
    let id = this.ctx.params.id
    let sql = 'SELECT article.id as id, ' +
    'article.title as title, introduce, add_time, ' +
    'content, view_count, type_name ' + 
    'FROM article LEFT JOIN type ON article.type_id = type.id ' +
    'WHERE article.id='+id
    const result = await this.app.mysql.query(sql)
    this.ctx.body = {data:result}
  }

  async getTypeInfo(){
    const result = await this.app.mysql.select('type')
    this.ctx.body = {data: result}
  }
}
module.exports = HomeController