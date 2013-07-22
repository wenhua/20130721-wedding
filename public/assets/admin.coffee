class PageList
  constructor: (data) ->
    @title = data.title
    @body = data.body
    @author = data.author
    @date = data.date
    @tags = data.tags
    @comments = data.comments
  toHtml: -> "
    <table>
      <tr>
        <th>页面标题</th>
        <th>建立时间</th>
        <th>操作</th>
      </tr>
      <tr>
        <td>#{@title}</td>
        <td>#{@date}</td>
        <td><a href='#'>删除</a></td>
      </tr>
    </table>"

@listAppender = (id, data) ->
  html = ''
  $.each data, (i, d) ->
    html += d.toHtml()
  $(id).html html

@doListPages = ->
  @listAppender('#PagesList', [new PageList {title: '123', date: '234'}])




