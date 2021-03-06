//1.初始数据
var hashA = init()
var keys = hashA['keys']
var hash = hashA['hash']

//2.生成键盘
//遍历Keys 生成KBD标签
generateKeyboard(keys, hash)

//3监听用户
listenUser(hash)


//下面是工具函数
function listenUser() {
    document.onkeypress = function (xyz) {
        var key = xyz['key']
        var website = hash[key]
        console.log(website)
        //location.href = 'http://'+ website
        window.open('http://' + website, '_blank')
    }

}


function generateKeyboard(keys, hash) {
    for (var index = 0; index < keys['length']; index = index + 1) {
        var div1 = tag('div')
        div1.className = 'row'

        zhangsan.appendChild(div1)

        var row = keys[index]
        for (var index2 = 0; index2 < row['length']; index2 = index2 + 1) {

            var span = createSpan(row[index2])

            var buttonX = createbutton(row[index2])

            var img = createImage(hash[row[index2]])

            var z = tag('kbd')
            z.className = 'key'
            z.appendChild(span)
            z.appendChild(img)
            z.appendChild(buttonX)

            div1.appendChild(z)
        }
    }
}


function init() {
    var keys = {
        '0': { 0: 'q', 1: 'w', 2: 'e', 3: 'r', 4: 't', 5: 'y', 6: 'u', 7: 'i', 8: 'o', 9: 'p', length: 10 },
        '1': { 0: 'a', 1: 's', 2: 'd', 3: 'f', 4: 'g', 5: 'h', 6: 'j', 7: 'k', 8: 'l', length: 9 },
        '2': { 0: 'z', 1: 'x', 2: 'c', 3: 'v', 4: 'b', 5: 'n', 6: 'm', length: 7 },
        length: 3
    }
    var hash = {
        q: 'qq.com', w: 'weibo.com', e: 'ele.com', r: 'renren.com', t: 'tianya.com', y: 'youtube.com',
        u: 'uc.com', i: 'iqiyi.com', o: 'opera.com', p: undefined, a: 'acfun.tv', s: 'sohu.com', z: 'zhihu.com',
    }

    var hashInLocalStorage = getFromLocalStorage('zzz')
    if (hashInLocalStorage) {
        hash = hashInLocalStorage
    }
    return {
        'keys': keys,
        'hash': hash
    }
}

function getFromLocalStorage(name) {
    return JSON.parse(localStorage.getItem(name) || 'null')
}
function tag(tagName) {
    return document.createElement(tagName)
}
function createSpan(textContent) {
    var span = tag('span')
    span.textContent = textContent
    span.className = 'text'
    return span
}
function createbutton(id) {
    var buttonX = tag('button')
    buttonX.textContent = '编辑'
    buttonX.id = id
    buttonX.onclick = function (xyz) {
        // console.log(xyz['target']['id'])
        var button2 = xyz['target']
        var img2 = button2.previousSibling
        var key = button2['id']
        var x = prompt('给我一个网址')
        hash[key] = x
        img2.src = 'http://' + x + '/favicon.ico'
        img2.onerror = function (xxx) {
            xxx.target.src = 'https://i.loli.net/2017/11/10/5a05afbc5e183.png'
        }
        localStorage.setItem('zzz', JSON.stringify(hash))
        console.log(hash)
    }
    return buttonX
}
function createImage(domain) {
    var img = tag('img')
    if (domain) {
        img.src = 'http://' + domain + '/favicon.ico'
    }
    else {
        img.src = 'https://i.loli.net/2017/11/10/5a05afbc5e183.png'
    }
    img.onerror = function (xxx) {
        xxx.target.src = 'https://i.loli.net/2017/11/10/5a05afbc5e183.png'
    }
    return img
}
