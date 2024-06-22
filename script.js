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

    // 사이드바 메뉴 클릭 시 페이지로 스크롤 이동


    function toggleMenu() {
        var menu = document.getElementById('menu');
        menu.classList.toggle('show');
    }

    function navigateToPage(url) {
        window.location.href = url;
    }


    function goToProductDetail(url) {
        window.location.href = url;
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

        // 모든 박스 숨기고 현재 박스만 표시
        boxes.forEach(function(box) {
            box.classList.remove('active');
        });

        var currentBoxId = 'box' + currentBox;
        var currentActiveBox = document.getElementById(currentBoxId);
        currentActiveBox.classList.add('active');
    }

    document.querySelector('.arrow.left').addEventListener('click', function() {
        navigateBox('prev');
    });

    document.querySelector('.arrow.right').addEventListener('click', function() {
        navigateBox('next');
    });
});

