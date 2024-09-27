        const imageDatabase = [
            { keyword: '藍色紳士帽', url: 'https://images2.imgbox.com/cd/f2/Dsy4Ch98_o.jpeg' },
            { keyword: '白色淑女帽', url: 'https://images2.imgbox.com/9a/aa/ZzGDFwfa_o.jpg' },
            { keyword: '棕色紳士帽', url: 'https://images2.imgbox.com/16/2d/F2iWUfBa_o.jpg' },
            { keyword: '黃色淑女帽', url: 'https://images2.imgbox.com/39/a2/vUpZYTj8_o.jpg' },
            { keyword: '粉紅色淑女帽', url: 'https://images2.imgbox.com/e5/c3/uXc8ShpX_o.jpg' },
            { keyword: '白色紳士帽', url: 'https://images2.imgbox.com/cc/f8/XTjCG1ez_o.jpg' },
            { keyword: '國王的新帽', url: 'https://images2.imgbox.com/a9/2e/lzLmxbdQ_o.jpg' },
            { keyword: '飛噗噗翅膀', url: 'https://images2.imgbox.com/0e/cb/TwNGjIzS_o.jpg' },
            { keyword: '兔耳造型頭飾', url: 'https://images2.imgbox.com/7e/53/MHHgn8KJ_o.jpg' },
            { keyword: '青蛙造型頭飾', url: 'https://images2.imgbox.com/78/8f/tqoTjDei_o.jpg' },
            { keyword: '西瓜造型帽', url: 'https://images2.imgbox.com/fa/89/dMselrK9_o.jpg' },
            { keyword: '棉花糖造型帽', url: 'https://images2.imgbox.com/02/cb/j65r8lfs_o.jpg' },
            { keyword: '牡羊角I', url: 'https://images2.imgbox.com/c5/36/8vs5KSZO_o.jpg' },
            { keyword: '牡羊角II', url: 'https://images2.imgbox.com/9f/c5/v2ffkQOK_o.jpg' },
            { keyword: '牡羊角III', url: 'https://images2.imgbox.com/48/e9/90IQ1TwB_o.jpg' },
            { keyword: '鸟', url: 'https://raw.githubusercontent.com/你的用户名/仓库名/分支名/圖片3.jpg' }
        ];

        function searchImage() {
    const keyword = document.getElementById('search').value.trim();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // 清空之前的搜索结果

    // 创建一个正则表达式，确保关键字后面有空白或是字符串结束
    const regex = new RegExp(`^${keyword}(\\s|$)`);
    
    // 搜索图片并显示
    const filteredImages = imageDatabase.filter(image => regex.test(image.keyword));
    
    if (filteredImages.length > 0) {
        filteredImages.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image.url;
            resultDiv.appendChild(imgElement);
        });
    } else {
        const noResultText = document.createElement('p');
        noResultText.textContent = '未找到相关图片';
        resultDiv.appendChild(noResultText);
    }
}


