(function() {
  var PageList;

  PageList = (function() {

    function PageList(data) {
      this.title = data.title;
      this.body = data.body;
      this.author = data.author;
      this.date = data.date;
      this.tags = data.tags;
      this.comments = data.comments;
    }

    PageList.prototype.toHtml = function() {
      return "    <table>      <tr>        <th>页面标题</th>        <th>建立时间</th>        <th>操作</th>      </tr>      <tr>        <td>" + this.title + "</td>        <td>" + this.date + "</td>        <td><a href='#'>删除</a></td>      </tr>    </table>";
    };

    return PageList;

  })();

  this.listAppender = function(id, data) {
    var html;
    html = '';
    $.each(data, function(i, d) {
      return html += d.toHtml();
    });
    return $(id).html(html);
  };

  this.doListPages = function() {
    return this.listAppender('#PagesList', [
      new PageList({
        title: '123',
        date: '234'
      })
    ]);
  };

}).call(this);
