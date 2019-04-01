if ($.fn) {

  $.fn.cShare = function (options) {

    let defaults = {
      description: '',
      showButtons: [
        'fb',
        'gPlus'
      ],
      data: {
        fb: {
          fa: 'fab fa-facebook-f',
          name: 'Fb',
          href: (url) => {
            return `https://www.facebook.com/sharer.php?u=${url}`
          },
          show: true
        },
        gPlus: {
          fa: 'fab fa-google-plus-g',
          name: 'Google+',
          href: (url) => {
            return `https://plus.google.com/share?url=${url}`
          },
          show: true
        },
        line: {
          fa: 'fab fa-line fa-2x',
          name: 'Line',
          href: (url) => {
            return `https://lineit.line.me/share/ui?url=${url}`
          },
          show: true,
          hideWrapper: true
        },
        plurk: {
          fa: 'fa-plurk',
          name: 'Plurk',
          href: (url, description) => {
            return `http://www.plurk.com/?qualifier=shares&status=${description} ${url}`
          },
          show: false
        },
        weibo: {
          fa: 'fab fa-weibo',
          name: '微博',
          href: (url, description) => {
            return `http://service.weibo.com/share/share.php?title=${description}&url=${url}`
          },
          show: false
        },
        twitter: {
          fa: 'fab fa-twitter',
          name: 'Twitter',
          href: (url, description) => {
            return `https://twitter.com/intent/tweet?original_referer=${url}&url=${url}&text=${description}`
          },
          show: false
        },
        tumblr: {
          fa: 'fab fa-tumblr',
          name: 'Tumblr',
          href: (url, description) => {
            return `http://www.tumblr.com/share/link?name=${description} ${url}&url=${url}`
          },
          show: false
        },
        pinterest: {
          fa: 'fab fa-pinterest-p',
          name: 'Pinterest',
          href: (url, description) => {
            return `http://pinterest.com/pin/create/button/?url=${url}&description=${description} ${url}`
          },
          show: false
        },
        email: {
          fa: 'fas fa-envelope',
          name: 'E-mail',
          href: (url, description) => {
            return `mailto:?subject=${description}&body=${description} ${url}`
          },
          show: false
        }
      },
      spacing: 6,
      shareToText: 'Share to'
    }

    const href = location.href.replace(/#\w/, '')
    const mobile = navigator.userAgent.match(/(mobile|android|pad)/i)

    let settings = $.extend({}, defaults, options)
    if (options) {
      settings.data = $.extend({}, defaults.data, options.data)
    }

    settings.showButtons.forEach((shareName) => {

      let item = settings.data[shareName]

      // Create button element
      this.append(`
        <a href="${item.href.call(null, href, settings.description)}" title="${settings.shareToText} ${item.name}" target="_blank" data-icon="${shareName}">
          <span class="fa-stack">
            ${
              !item.hideWrapper
                ? '<i class="fas fa-circle fa-stack-2x"></i>'
                : ''
            }
            <i class="${item.fa} fa-stack-1x"></i>
          </span>
        </a>
      `)

    })

    this.find('.fa-plurk').text('P')

    // Bind link click event
    this.find('a').click(function (e) {
      if (!mobile) {
        e.preventDefault()
        window.open(
          $(this).attr('href'),
          '_blank',
          'height=600,width=500'
        )
      }
    })

    // Add CSS
    this.children('a').css({
      'display': 'inline-block',
      'margin': `auto ${Number(settings.spacing) / 2}px`,
      'text-decoration': 'none',
      '-webkit-transition': 'all .2s',
      '-moz-transition': 'all .2s',
      'transition': 'all .2s'
    })
    if (!mobile) {
      this.children('a').hover(function () {
        $(this).css({
          '-webkit-transform': 'translateY(-4px)',
          '-ms-transform': 'translateY(-4px)',
          'transform': 'translateY(-4px)'
        })
      }, function () {
        $(this).css({
          '-webkit-transform': 'translateY(0px)',
          '-ms-transform': 'translateY(0px)',
          'transform': 'translateY(0px)'
        })
      })
    }

    // Set color
    this.find('.fa-stack-1x').css('color', '#ffffff')
    this.find('[data-icon=fb] .fa-stack-2x').css('color', '#3B5998')
    this.find('[data-icon=gPlus] .fa-stack-2x').css('color', '#d73d32')
    this.find('[data-icon=line] .fa-stack-1x').css('color', '#00c300')
    this.find('[data-icon=plurk] .fa-stack-2x').css('color', '#cf682f')
    this.find('[data-icon=plurk] .fa-plurk').css({
      'font-family': 'arial',
      'font-style': 'normal',
      'font-weight': 'bold'
    })
    this.find('[data-icon=weibo] .fa-stack-2x').css('color', '#F5CA59')
    this.find('[data-icon=twitter] .fa-stack-2x').css('color', '#2ba9e1')
    this.find('[data-icon=tumblr] .fa-stack-2x').css('color', '#35465d')
    this.find('[data-icon=pinterest] .fa-stack-2x').css('color', '#EA1514')
    this.find('[data-icon=email] .fa-stack-2x').css('color', '#939598')

    return this;

  }

}
