<script>
        const imageDatabase = [
            { keyword: '貓', url: 'https://images2.imgbox.com/cd/f2/Dsy4Ch98_o.jpeg' },
            { keyword: '狗', url: 'https://raw.githubusercontent.com/你的用户名/仓库名/分支名/圖片2.jpg' },
            { keyword: '鸟', url: 'https://raw.githubusercontent.com/你的用户名/仓库名/分支名/圖片3.jpg' }
        ];

        function searchImage() {
            const keyword = document.getElementById('search').value.trim();
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = ''; // 清空之前的搜索结果

            // 搜索图片并显示
            const filteredImages = imageDatabase.filter(image => image.keyword.includes(keyword));
            
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
    </script>
