import React from 'react'
import styles from './index.scss'

const App = () => {
    // StorgeInfo()
    // docCookies.setItem('name', '哈哈哈')
    return <>
        <h3 className='titl'>对H5的理解</h3>
        <div>
            H5从广义说是前端开发中各种最新技术的总称、包含了HTML5、CSS3、JavaScript、ES6和各种开源框架等最新前端开发技术的总和。H5广泛而深入地吸引了移动互联网时代的技术精髓，再加上其自身跨平台、免安装、更新快的技术优势，自2014年发布以来，
            已经逐渐成为现代互联网和移动互联网开发的核心技术，逐渐发展成为各行各业进入互联网+的首选技术。
        </div>
        <h3 className='title'>语义化标签</h3>
        <div>article、footer、header、nav、section、aside</div>
        <div className={styles.wrap}>
            <header className={styles.header}>header</header>
            <nav className={styles.header}>nav</nav>
            <section className={styles.content}>
                <section className={styles.left}>
                    <article className={styles.aricle}>aricle</article>
                    <section className={styles.section}>section</section>
                </section>
                <aside className={styles.aside}>aside</aside>
            </section>
            <footer className={styles.footer}>footer</footer>
        </div>
        <div></div>
        <h3 className='title'>HTML（超文本标记语言——HyperText Markup Language）</h3>
        <div className='link'><a href='https://developer.mozilla.org/zh-CN/docs/Web/HTML'>文档-简介</a></div>
        <div className='link'><a href='https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference'>文档-HTML参考</a></div>
        <h3 className='title'>Web Storage</h3>
        <div>localStorage、sessionStorage、cookie</div>
    </>
}

const StorgeInfo = () => {
    const Storage = {
        setLocalStorage(name, value) {
            localStorage.setItem(name, value)
        },
        setSessionStorage(name, value) {
            sessionStorage.setItem(name, value)
        },
        getLocalStorage(name) {
            return localStorage.getItem(name)
        },
        clearLocalStorage() {
            localStorage.clear()
        }
    }
    console.log('localStorage.length:', localStorage.length)
    Storage.setSessionStorage('name3', '哈哈1哈')
    Storage.setLocalStorage('name3', '哈哈1哈')
    // Storage.clearLocalStorage()
    localStorage.removeItem('name3')
    sessionStorage.removeItem('name3')
    // const name = Storage.getLocalStorage('name')
    // console.log(name)
}

const docCookies = {
    getItem: function (sKey) {
        return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[-.+*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
    },
    //cookie的名字、cookie的值、过期时间、路径、域名、传输方式
    setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
        if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
        var sExpires = "";
        if (vEnd) {
            switch (vEnd.constructor) {
                case Number:
                    sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
                    break;
                case String:
                    sExpires = "; expires=" + vEnd;
                    break;
                case Date:
                    sExpires = "; expires=" + vEnd.toUTCString();
                    break;
            }
        }
        document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
        return true;
    },
    removeItem: function (sKey, sPath, sDomain) {
        if (!sKey || !this.hasItem(sKey)) { return false; }
        document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
        return true;
    },
    hasItem: function (sKey) {
        return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[-.+*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
    },
    keys: /* optional method: you can safely remove it! */ function () {
        var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
        for (var nIdx = 0; nIdx < aKeys.length; nIdx++) { aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]); }
        return aKeys;
    }
};

export default App