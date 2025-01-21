$(function () {
  function c() {
    p();
    var e = h();
    var r = 0;
    var u = false;
    l.empty();
    while (!u) {
      if (s[r] == e[0].weekday) {
        u = true;
      } else {
        l.append('<div class="blank"></div>');
        r++;
      }
    }
    for (var c = 0; c < 42 - r; c++) {
      if (c >= e.length) {
        l.append('<div class="blank"></div>');
      } else {
        var v = e[c].day;
        var currentDate = `${v.toString().padStart(2, '0')}-${n
          .toString()
          .padStart(2, '0')}-${t}`;
        var isSpecialDate = specialDates.includes(currentDate);
        var m = g(new Date(t, n - 1, v))
          ? '<div class="today">'
          : isSpecialDate
          ? '<div class="special-date">'
          : '<div>';
        l.append(m + '' + v + '</div>');
      }
    }
    var y = o[n - 1];
    a.css('background-color', y)
      .find('h1')
      .text(i[n - 1] + ' ' + t);
    f.find('div').css('color', y);
    l.find('.today').css('background-color', y);
    d();
  }

  function h() {
    var e = [];
    for (var r = 1; r < v(t, n) + 1; r++) {
      e.push({ day: r, weekday: s[(m(t, n, r) + 6) % 7] }); // Adjusted to shift weekdays
    }
    return e;
  }

  function p() {
    f.empty();
    for (var e = 0; e < 7; e++) {
      f.append('<div>' + s[e].substring(0, 3) + '</div>');
    }
  }

  function d() {
    var t;
    var n = $('#calendar').css('width', e + 'px');
    n.find((t = '#calendar_weekdays, #calendar_content'))
      .css('width', e + 'px')
      .find('div')
      .css({
        width: e / 7 + 'px',
        height: e / 7 + 'px',
        'line-height': e / 7 + 'px',
      });
    n.find('#calendar_header')
      .css({ height: '60px' })
      .find('i[class^="icon-chevron"]')
      .css('line-height', '25px');
  }

  function v(e, t) {
    return new Date(e, t, 0).getDate();
  }

  function m(e, t, n) {
    return new Date(e, t - 1, n).getDay();
  }

  function g(e) {
    return y(new Date()) == y(e);
  }

  function y(e) {
    return e.getFullYear() + '/' + (e.getMonth() + 1) + '/' + e.getDate();
  }

  function b() {
    var e = new Date();
    t = e.getFullYear();
    n = e.getMonth() + 1;
  }

  var e = 300;
  var t = 2013;
  var n = 9;
  var r = [];
  var i = [
    'JANUARY',
    'FEBRUARY',
    'MARCH',
    'APRIL',
    'MAY',
    'JUNE',
    'JULY',
    'AUGUST',
    'SEPTEMBER',
    'OCTOBER',
    'NOVEMBER',
    'DECEMBER',
  ];
  var s = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ]; // Adjusted to start with Monday
  var o = [
    '#16a085',
    '#1abc9c',
    '#c0392b',
    '#27ae60',
    '#FF6860',
    '#f39c12',
    '#f1c40f',
    '#e67e22',
    '#2ecc71',
    '#e74c3c',
    '#d35400',
    '#2c3e50',
  ];
  var specialDates = [
    '22-01-2025',
    '19-02-2025',
    '19-03-2025',
    '23-04-2025',
    '21-05-2025',
    '18-06-2025',
    '23-07-2025',
    '20-08-2025',
    '17-09-2025',
    '22-10-2025',
    '19-11-2025',
    '24-12-2025',
    '21-01-2026',
    '18-02-2026',
    '18-03-2026',
    '22-04-2026',
    '20-05-2026',
    '17-06-2026',
    '22-07-2026',
    '19-08-2026',
    '23-09-2026',
    '21-10-2026',
    '18-11-2026',
    '23-12-2026',
  ];
  var u = $('#calendar');
  var a = u.find('#calendar_header');
  var f = u.find('#calendar_weekdays');
  var l = u.find('#calendar_content');
  b();
  c();
  a.find('i[class^="icon-chevron"]').on('click', function () {
    var e = $(this);
    var r = function (e) {
      n = e == 'next' ? n + 1 : n - 1;
      if (n < 1) {
        n = 12;
        t--;
      } else if (n > 12) {
        n = 1;
        t++;
      }
      c();
    };
    if (e.attr('class').indexOf('left') != -1) {
      r('previous');
    } else {
      r('next');
    }
  });
});
