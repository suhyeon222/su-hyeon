<script>
    document.addEventListener('DOMContentLoaded', function() {
        let sections = document.querySelectorAll('.section');
        let index = 0;

        function scrollToNextSection() {
            index++;
            if (index < sections.length) {
                sections[index].scrollIntoView({ behavior: 'smooth' });
            } else {
                index = sections.length - 1;
            }
        }

        document.addEventListener('wheel', function(e) {
            if (e.deltaY > 0) { 
                scrollToNextSection();
            }
        });

    
        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowDown') {
                scrollToNextSection();
            }
        });
    });

// 사이드바 메뉴 클릭 시 페이지로 스크롤 이동
document.querySelectorAll('.sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth' // 부드러운 스크롤
        });
    });
});

<script>
    function navigateToPage(url) {
        window.location.href = url;
    }
</script>

<script>
        function toggleMenu() {
            var menu = document.getElementById('menu');
            menu.classList.toggle('show');
        }

        var currentBox = 1;
        var totalBoxes = document.querySelectorAll('.box').length;

        function navigateBox(direction) {
            var boxContainer = document.getElementById('box-container');
            var boxes = boxContainer.querySelectorAll('.box');

            if (direction === 'prev') {
                if (currentBox === 1) {
                    currentBox = totalBoxes;
                } else {
                    currentBox--;
                }
            } else if (direction === 'next') {
                if (currentBox === totalBoxes) {
                    currentBox = 1;
                } else {
                    currentBox++;
                }
            }

            // Hide all boxes and show the current one
            boxes.forEach(function(box) {
                box.classList.remove('active');
            });

            var currentBoxId = 'box' + currentBox;
            var currentActiveBox = document.getElementById(currentBoxId);
            currentActiveBox.classList.add('active');
        }
        <script>
        function toggleMenu() {
            var menu = document.getElementById('menu');
            menu.classList.toggle('show');
        }

        function goToGoodsPage() {
            window.location.href = 'next page.html; // 이동할 페이지의 경로
        }
    </script>
    </script>