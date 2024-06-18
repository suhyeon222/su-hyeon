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


</script>
